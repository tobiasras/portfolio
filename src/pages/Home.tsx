import {Button} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'
import {ArrowRight, Box, ChartNetwork, Layers, Palette} from 'lucide-react'
import {motion} from 'framer-motion'
import {ProjectCard} from "@/components/composites/project-card.tsx";
import {Separator} from '@/components/ui/separator'
import {MinorCard} from "@/components/composites/minor-card.tsx";
import {AsciiArt} from "@/util/ascii-art"

const stack = [
    {icon: Box, label: 'Software engineering'},
    {icon: ChartNetwork, label: 'Machine learning'},
]

export function Home() {
    return (
        <main className="relative min-h-svh overflow-hidden pt-5 mt-[var(--header-height)]">
            <section className="relative z-10 grid  gap-8 px-6 pb-16  md:px-10 md:pb-10">
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{opacity: 0, y: 24}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.1, ease: [0.22, 1, 0.36, 1]}}
                    >
                        <Badge variant="secondary" className="w-fit">
                            Student at DTU · Human-Centered Artificial Intelligence MSc
                        </Badge>
                        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            Tobias Juul Rasmussen
                        </h1>
                        <p className="max-w-md text-base text-muted-foreground md:text-lg">
                            Based in Copenhagen. Interrested in solving challengine problems and exploration in software
                            and machinelaering. i love to create and innovate
                        </p>
                        <p className="max-w-md text-base text-muted-foreground md:text-lg">
                            This website is collection of projects i have created.
                        </p>

                        <ul>
                            <li className="bullet">asdasjdkl</li>
                            <li>asdasjdkl</li>
                        </ul>



                        <ul id="work" className="mt-4 flex flex-wrap gap-4">
                            {stack.map(({icon: Icon, label}) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <Icon className="size-4 text-foreground"/>
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>


            <section className="md:px-10 md:pb-10">
                <div className="mx-auto md:px-12 max-w-7xl px-6 mb-5">
                    <h2 className="">Projects:</h2>
                </div>

                <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>

                <Separator className="my-10 bg-gray-300" />

                <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    <MinorCard href="https://lab.tobiasras.dk/creative/005" image="public/images/shader_005.png" title={"NBody problem 3D"} />
                    <MinorCard href="https://lab.tobiasras.dk/projects/cubed_chess" image="public/images/cubed_chess.png" title={"Game - Chess on cube"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/004" image="public/images/shader_004.png" title={"Interactive NBody problem"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/003" image="public/images/shader_003.png" title={"NBody problem 2D"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/002" image="public/images/shader_002.png" title={"NBody problem 2D with shader"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/001" image="public/images/shader_001.png" title={"GLSL Shader"} />
                    <MinorCard href="https://lab.tobiasras.dk/projects/yukon_web/" title="Yukon Solitaire" description="In ASCII-style" ascii={AsciiArt["yukon"]}/>
                    <MinorCard href="https://lab.tobiasras.dk/projects/yukon_web/" title="Yukon Solitaire" description="In ASCII-style" ascii={AsciiArt["yukon"]}/>
                </div>





            </section>
        </main>
    )
}
