import {useEffect, useRef} from 'react'
import vertSource from '@/assets/shaders/creative-002/shader.vert?raw'
import fragSource from '@/assets/shaders/creative-002/shader.frag?raw'

const ORB_COUNT = 15
const SOFTENING = 0.012
const CENTER_STRENGTH = 5

const CLICK_EXPLOSION_FORCE = 10
const CLICK_EXPLOSION_FALLOFF = 2.5

type Orb = {
    x: number
    y: number
    mass: number
    accelerations_x: number
    accelerations_y: number
    velocity_x: number
    velocity_y: number
    force_x: number
    force_y: number
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type)
    if (!shader) throw new Error('Failed to create shader')
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader)
        gl.deleteShader(shader)
        throw new Error(log ?? 'Shader compile failed')
    }
    return shader
}

function createProgram(gl: WebGLRenderingContext, vert: string, frag: string) {
    const program = gl.createProgram()
    if (!program) throw new Error('Failed to create program')

    const vertShader = compileShader(gl, gl.VERTEX_SHADER, vert)
    const fragShader = compileShader(gl, gl.FRAGMENT_SHADER, frag)
    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const log = gl.getProgramInfoLog(program)
        throw new Error(log ?? 'Program link failed')
    }

    gl.deleteShader(vertShader)
    gl.deleteShader(fragShader)
    return program
}

function initOrbs(): Orb[] {
    const padding = 0.2
    return Array.from({length: ORB_COUNT}, () => {
        const x = Math.random() * (2 - 2 * padding) - (1 - padding)
        const y = Math.random() * (2 - 2 * padding) - (1 - padding)

        return {
            x,
            y,
            mass: 0.015,
            accelerations_x: 0,
            accelerations_y: 0,
            velocity_x: 0,
            velocity_y: 0,
            force_x: 0,
            force_y: 0,
        }
    })
}

function computeForce(orbs: Orb[], gravity: number, centerStrength: number) {
    for (const orb of orbs) {
        orb.force_x = -centerStrength * orb.x
        orb.force_y = -centerStrength * orb.y
    }

    for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
            const dx = orbs[j].x - orbs[i].x
            const dy = orbs[j].y - orbs[i].y
            const r2 = dx * dx + dy * dy
            const r = Math.sqrt(r2)

            const f = (gravity * orbs[i].mass * orbs[j].mass) / (r2 + SOFTENING)
            const fx = (f * dx) / r
            const fy = (f * dy) / r

            orbs[i].force_x += fx
            orbs[i].force_y += fy
            orbs[j].force_x -= fx
            orbs[j].force_y -= fy
        }
    }
}

function updateOrbs(orbs: Orb[], dt: number) {
    for (const orb of orbs) {
        orb.accelerations_x = orb.force_x / orb.mass
        orb.accelerations_y = orb.force_y / orb.mass
        orb.velocity_x += orb.accelerations_x * dt
        orb.velocity_y += orb.accelerations_y * dt
        orb.x += orb.velocity_x * dt
        orb.y += orb.velocity_y * dt
    }
}

function canvasToSimCoords(
    clientX: number,
    clientY: number,
    rect: DOMRect,
    bufferWidth: number,
    bufferHeight: number,
) {
    const px = ((clientX - rect.left) / rect.width) * bufferWidth
    const py = bufferHeight - ((clientY - rect.top) / rect.height) * bufferHeight

    return {
        x: (px * 2 - bufferWidth) / bufferHeight,
        y: (py * 2 - bufferHeight) / bufferHeight,
    }
}

function applyClickExplosion(
    orbs: Orb[],
    clickX: number,
    clickY: number,
    force: number,
    falloff: number,
) {
    for (const orb of orbs) {
        const dx = orb.x - clickX
        const dy = orb.y - clickY
        const r = Math.hypot(dx, dy) + SOFTENING
        const strength = force * Math.exp(-r * falloff)

        orb.velocity_x += (dx / r) * strength
        orb.velocity_y += (dy / r) * strength
    }
}

export function NBodyShader002() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const gl = canvas.getContext('webgl', {alpha: false, antialias: false})
        if (!gl) return

        const program = createProgram(
            gl,
            vertSource,
            fragSource.replaceAll('{{ORB_COUNT}}', String(ORB_COUNT)),
        )
        gl.useProgram(program)

        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW,
        )

        const positionLoc = gl.getAttribLocation(program, 'a_position')
        gl.enableVertexAttribArray(positionLoc)
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

        const uTime = gl.getUniformLocation(program, 'u_time')
        const uResolution = gl.getUniformLocation(program, 'u_resolution')
        const orbUniforms = Array.from({length: ORB_COUNT}, (_, i) =>
            gl.getUniformLocation(program, `u_repel_orbs[${i}]`),
        )

        const orbs = initOrbs()
        const gravity = 10
        const centerStrength = CENTER_STRENGTH

        let width = 0
        let height = 0
        let raf = 0
        let lastTime = performance.now()

        const resize = () => {
            const rect = canvas.getBoundingClientRect()
            const dpr = Math.min(window.devicePixelRatio, 2)
            width = Math.max(1, Math.floor(rect.width * dpr))
            height = Math.max(1, Math.floor(rect.height * dpr))
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width
                canvas.height = height
                gl.viewport(0, 0, width, height)
            }
        }

        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(canvas)
        resize()

        const onClick = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            const {x, y} = canvasToSimCoords(
                event.clientX,
                event.clientY,
                rect,
                width,
                height,
            )
            applyClickExplosion(orbs, x, y, CLICK_EXPLOSION_FORCE, CLICK_EXPLOSION_FALLOFF)
        }

        canvas.addEventListener('click', onClick)

        const draw = (now: number) => {
            const deltaMs = now - lastTime
            lastTime = now
            const dt = deltaMs / 100_000

            computeForce(orbs, gravity, centerStrength)
            updateOrbs(orbs, dt)

            gl.clearColor(1, 1, 1, 1)
            gl.clear(gl.COLOR_BUFFER_BIT)

            gl.useProgram(program)
            gl.uniform1f(uTime, now * 0.001)
            gl.uniform2f(uResolution, width, height)

            for (let i = 0; i < ORB_COUNT; i++) {
                const orb = orbs[i]
                const loc = orbUniforms[i]
                if (loc) gl.uniform3f(loc, orb.x, orb.y, orb.mass)
            }

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
            raf = requestAnimationFrame(draw)
        }

        raf = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(raf)
            resizeObserver.disconnect()
            canvas.removeEventListener('click', onClick)
            gl.deleteProgram(program)
            gl.deleteBuffer(positionBuffer)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="block h-full w-full bg-white"
            aria-hidden
        />
    )
}
