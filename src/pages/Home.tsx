import {Badge} from '@/components/ui/badge'
import {Box, ChartNetwork,} from 'lucide-react'
import {motion} from 'framer-motion'
import {ProjectCard} from "@/components/composites/project-card.tsx";
import {Separator} from '@/components/ui/separator'
import {MinorCard} from "@/components/composites/minor-card.tsx";
import {Timeline} from "@/components/composites/timeline.tsx";
import {Container} from "@/components/layout/container.tsx";
import {AsciiArt} from "@/util/ascii-art"

import {education, workExperience} from "@/data/timeline"

const stack = [
    {icon: Box, label: 'Software engineering'},
    {icon: ChartNetwork, label: 'Machine learning'},
]

export function Home() {
    return (
        <main className="relative z-10 min-h-svh pt-5 mt-[var(--header-height)]">
            <section className="relative pb-16 md:pb-10 ">

                <Container className="py-16 grid grid-cols-4">
                    <motion.div
                        data-particle-layer
                        className="flex flex-col gap-6 col-span-3 rounded-xl bg-background/80 p-4 backdrop-blur-[2px] md:p-6"
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


                    <Container className="py-16">
                        <p>asd</p>
                    </Container>
                </Container>


            </section>

            <section className="pb-10">
                <Container className="mb-5">
                    <h2 className="">Projects:</h2>
                </Container>

                <Container className="grid items-start gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

                <Separator className="my-10" />

                <Container className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
                    <section
                        id="experience"
                        data-particle-layer
                        className="space-y-6 rounded-xl bg-background/80 p-4 backdrop-blur-[2px] md:p-6"
                    >
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                            Experience
                        </h2>
                        <Timeline items={workExperience} />
                    </section>

                    <section
                        id="education"
                        data-particle-layer
                        className="space-y-6 rounded-xl bg-background/80 p-4 backdrop-blur-[2px] md:p-6"
                    >
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
