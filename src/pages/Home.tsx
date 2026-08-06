import {Badge} from '@/components/ui/badge'
import {Box, ChartNetwork,} from 'lucide-react'
import {motion} from 'framer-motion'
import {ProjectCard} from "@/components/composites/project-card.tsx";
import {Separator} from '@/components/ui/separator'
import {MinorCard} from "@/components/composites/minor-card.tsx";
import {Timeline} from "@/components/composites/timeline.tsx";
import {Container} from "@/components/layout/container.tsx";
import {AsciiArt} from "@/util/ascii-art"
import {NBodyShader002} from '@/components/creative/nbody-shader-002'

import {education, workExperience} from "@/data/timeline"

const stack = [
    {icon: Box, label: 'Software engineering'},
    {icon: ChartNetwork, label: 'Machine learning'},
]

export function Home() {
    return (
        <main className="min-h-svh overflow-x-hidden bg-white mt-[var(--header-height)] lg:pt-2">
            <section className="pb-10 md:pb-12">
                <Container className="flex flex-col gap-4 pb-6 pt-4 lg:grid lg:grid-cols-4 lg:items-start lg:gap-10 lg:py-8 ">
                    <motion.div
                        data-particle-layer
                        className="relative z-10 flex flex-col col-span-3 gap-6"
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

                    <div className="relative h-[min(40svh,320px)] min-h-[240px] lg:-mt-6 lg:h-[min(82vh,860px)] lg:min-h-[380px]">
                        <div className="relative h-full w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[100svh] lg:w-[100vw] lg:-translate-x-1/2 lg:-translate-y-1/2">
                            <NBodyShader002/>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="relative z-10 bg-white pb-10">
                    <Container className="mb-5">
                        <h2>Projects:</h2>
                    </Container>

                    <Container className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <ProjectCard image="/images/shop_compare.png" title="Calculating Shopping Prices" badges={["SQL", "Kotlin", "Docker", "Rest API", "Word embeddings"]} sourceUrl="https://github.com/tobiasras/shopping_list.git" category="Bachelor thesis">
                            <p>explain what i did, what did it achieve?</p>
                        </ProjectCard>

                        <ProjectCard image="/images/dbcg.png" title="DBCG website" badges={["PHP"," SQL", "JS", "CSS"]} url="https://dbcg.dk/" category="Full stack application">
                            <p>explain what i did</p>
                        </ProjectCard>

                        <ProjectCard image="/images/zero_shot_anomaly_detection.png" title="Zero shot anomaly detection" badges={["Image vision","DinoV3", "Python"]} url="https://dbcg.dk/" category="Anomaly detection on the MVTec Dataset">
                            <p></p>
                        </ProjectCard>
                    </Container>
            </section>

            <section className="pb-10">
                <Separator className="my-10" />

                <Container className="mb-5">
                    <h2>Minor experiments & games:</h2>
                </Container>

                <Container className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                    <MinorCard href="https://lab.tobiasras.dk/creative/005" image="/images/shader_005.png" title={"NBody problem 3D"} />
                    <MinorCard href="https://lab.tobiasras.dk/projects/cubed_chess" image="/images/cubed_chess.png" title={"Game - Chess on cube"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/004" image="/images/shader_004.png" title={"Interactive NBody problem"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/003" image="/images/shader_003.png" title={"NBody problem 2D"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/002" image="/images/shader_002.png" title={"NBody problem 2D with shader"} />
                    <MinorCard href="https://lab.tobiasras.dk/creative/001" image="/images/shader_001.png" title={"GLSL Shader"} />
                    <MinorCard href="https://lab.tobiasras.dk/projects/yukon_web/" title="Yukon Solitaire" description="In ASCII-style" ascii={AsciiArt["yukon"]}/>
                </Container>

                <Separator className="my-10" />

                <Container className="grid gap-12 md:grid-cols-2">
                    <section id="experience" className="space-y-6 p-4 md:p-6">
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                            Experience
                        </h2>
                        <Timeline items={workExperience} />
                    </section>

                    <section id="education" className="space-y-6 p-4 md:p-6">
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                            Education
                        </h2>
                        <Timeline items={education} />
                    </section>
                </Container>
            </section>
        </main>
    )
}
