import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Scene } from '@/components/three/Scene'
import { ArrowRight, Box, Layers, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

const stack = [
  { icon: Box, label: 'Three.js + R3F' },
  { icon: Layers, label: 'shadcn/ui' },
  { icon: Palette, label: 'Tailwind CSS' },
]

export function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.95_0.02_250)_0%,_transparent_55%)]" />

      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          Portfolio
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" render={<a href="#work" />}>
            Work
          </Button>
          <Button size="sm" render={<a href="#contact" />}>
            Contact
            <ArrowRight className="size-4" />
          </Button>
        </nav>
      </header>

      <section className="relative z-10 grid min-h-[calc(100svh-4.5rem)] items-center gap-8 px-6 pb-16 md:grid-cols-2 md:px-10 md:pb-10">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge variant="secondary" className="w-fit">
            React · Three.js · shadcn
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Build immersive
            <br />
            web experiences
          </h1>
          <p className="max-w-md text-base text-muted-foreground md:text-lg">
            Starter kit with Vite, React Three Fiber, shadcn/ui, Framer Motion,
            and React Router — ready to ship.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" render={<a href="#work" />}>
              View stack
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              shadcn docs
            </Button>
          </div>
          <ul id="work" className="mt-4 flex flex-wrap gap-4">
            {stack.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="size-4 text-foreground" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="h-[320px] w-full md:h-[480px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Scene />
        </motion.div>
      </section>
    </main>
  )
}
