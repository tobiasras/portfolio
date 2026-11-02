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
                <Container
                    className="flex flex-col gap-4 pb-6 pt-4 lg:grid lg:grid-cols-4 lg:items-start lg:gap-10 lg:py-8 ">
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

                        <p className="max-w-lg text-base text-muted-foreground md:text-lg">
                            Based in Copenhagen, I am passionate about solving challenging problems and exploring the
                            fields of software development and machine learning.
                        </p>


                        <p className="max-w-lg text-base text-muted-foreground md:text-lg">
                            I enjoy building innovative solutions,
                            experimenting with new technologies, and turning ideas into practical applications.
                        </p>

                        <p className="max-w-lg text-base text-muted-foreground md:text-lg">

                            This website is a collection of projects I have created, showcasing my work, technical
                            interests, and continuous exploration of software and artificial intelligence.
                        </p>


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

                    <div
                        className="relative h-[min(40svh,320px)] min-h-[240px] lg:-mt-6 lg:h-[min(82vh,860px)] lg:min-h-[380px]">
                        <div
                            className="relative h-full w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[100svh] lg:w-[100vw] lg:-translate-x-1/2 lg:-translate-y-1/2">
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

                <ProjectCard image="/images/cider_flow.png" title="Cider flow"
                                 badges={["React", "Asp.net", "Docker"]}
                                 url="https://brew.tobiasras.dk/"
                                 category="A webapp for modeling cider brewing">
                        <p>
                            I made this app to plan and model my own cider brewing.
                            With the app, I can add juices with different sugar contents and estimate
                            how much alcohol will be produced, along with many other things.
                        </p>
                        <p className="pt-1">
                            This helps me track decisions throughout the cider brewing process and
                            allows me to readjust flavours for the following year.
                        </p>
                        <p className="pt-1">
                            The app was built with React and C# ASP.NET. It supports multiple users
                            who can sign up through Google Auth.
                        </p>
                    </ProjectCard>

                    <ProjectCard image="/images/shop_compare.png" title="Calculating Shopping Prices"
                                 badges={["SQL", "Kotlin", "Docker", "Rest API", "NLP"]}
                                 sourceUrl="https://github.com/tobiasras/shopping_list.git"
                                 team={["Rasmussw"]}
                                 category="Bachelor thesis">
                        <p>
                            Developed a <b>Mobile app</b> that helps users estimate their grocery expenses by creating a 
                            shopping list and comparing prices across multiple retailers. 
                        </p>
                        
                        <p className='pt-1'>
                            The app brings together 
                            product information from different stores and uses <b>Natural language processing</b> to 
                            match shopping list items with relevant products.
                        </p>

                        <p className="pt-1">
                            We used <b>Kotlin Multiplatform</b> to build the app for both <b>iOS</b> and <b>Android</b>. A Kotlin Ktor <b>REST API</b> handled
                             user authentication and shopping lists, with <b>MySQL</b> for data storage. 
                            A Python script fetched grocery data from retailer APIs every 24 hours, and all server-side 
                            applications ran in <b>Docker containers.</b></p>

                    </ProjectCard>

                    <ProjectCard image="/images/dbcg.png" title="DBCG website" badges={["PHP", " SQL", "JS", "CSS"]}
                                 url="https://dbcg.dk/" category="Full stack application">
                        <p>Rebuilt an existing website with a custom solution, preserving the original design 
                            and functionality while providing greater control over its content and structure.</p>

                        <p className="pt-1">Developed a custom content management system (CMS) that allows users 
                            to create, edit, and organize pages in a hierarchical structure. 
                            Page data and relationships were stored in an SQL database.</p>

                        <p className="pt-1">Implemented role-based access control, allowing users 
                            to be assigned to specific departments and restricting their access to relevant pages.</p>
                    </ProjectCard>

                    <ProjectCard image="/images/zero_shot_anomaly_detection.png" title="Zero shot anomaly detection"
                                 badges={["Image vision", "DinoV3", "Python"]} sourceUrl="https://github.com/tobiasras/Zero-Shot-Anomaly-Detection"
                                 category="Anomaly detection on product images" team={["Mioupytjh", "nico386d"]}>
                        <p>Developed a system that automatically identifies defects and unusual patterns in product images, 
                            without needing examples of defective products to learn from.</p>

                        <p className="pt-1">Built the solution using the DINOv3 vision foundation model 
                            and the MVTec Anomaly Detection dataset. The system compares image features 
                            from defect-free reference images with test images to identify potential anomalies.</p>

                        <p className="pt-1">Improved detection performance by applying Mahalanobis distance 
                            to patch-level image embeddings, enabling zero-shot anomaly detection without 
                            supervised training or defect samples.</p>
                    </ProjectCard>
                </Container>
            </section>

            <section className="pb-10">
                <Separator className="my-10"/>

                <Container className="mb-5">
                    <h2>Minor experiments & games:</h2>
                </Container>

                <Container className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                    <MinorCard href="https://lab.tobiasras.dk/creative/005" image="/images/shader_005.png"
                               title={"NBody problem 3D"}/>
                    <MinorCard href="https://lab.tobiasras.dk/projects/cubed_chess" image="/images/cubed_chess.png"
                               title={"Game - Chess on cube"}/>
                    <MinorCard href="https://lab.tobiasras.dk/creative/004" image="/images/shader_004.png"
                               title={"Interactive NBody problem"}/>
                    <MinorCard href="https://lab.tobiasras.dk/creative/003" image="/images/shader_003.png"
                               title={"NBody problem 2D"}/>
                    <MinorCard href="https://lab.tobiasras.dk/creative/002" image="/images/shader_002.png"
                               title={"NBody problem 2D with shader"}/>
                    <MinorCard href="https://lab.tobiasras.dk/creative/001" image="/images/shader_001.png"
                               title={"GLSL Shader"}/>
                    <MinorCard href="https://lab.tobiasras.dk/projects/yukon_web/" title="Yukon Solitaire"
                               description="In ASCII-style" ascii={AsciiArt["yukon"]}/>
                </Container>

                <Separator className="my-10"/>

                <Container className="grid gap-12 md:grid-cols-2">
                    <section id="experience" className="space-y-6 p-4 md:p-6">
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                            Experience
                        </h2>
                        <Timeline items={workExperience}/>
                    </section>

                    <section id="education" className="space-y-6 p-4 md:p-6">
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                            Education
                        </h2>
                        <Timeline items={education}/>
                    </section>
                </Container>
            </section>
        </main>
    )
}
