import {Button} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'


import {ArrowRight, Box, Layers, Palette} from 'lucide-react'
import {motion} from 'framer-motion'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";

const stack = [
    {icon: Box, label: 'Three.js + R3F'},
    {icon: Layers, label: 'shadcn/ui'},
    {icon: Palette, label: 'Tailwind CSS'},
]

export function Home() {
    return (


        <main className="relative min-h-svh overflow-hidden">

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
                            Based in Copenhagen,
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button size="lg" render={<a href="#work"/>}>
                                View stack
                                <ArrowRight className="size-4"/>
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
                <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-3 gap-4">
                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardAction>

                                <Badge variant="secondary">Featured</Badge>
                                <Badge variant="secondary">Featured</Badge>

                                <Badge variant="secondary">Featured</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardAction>

                                <Badge variant="secondary">Featured</Badge>
                                <Badge variant="secondary">Featured</Badge>

                                <Badge variant="secondary">Featured</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Design systems meetup</CardTitle>
                            <CardAction>

                                <Badge variant="secondary">Featured</Badge>
                                <Badge variant="secondary">Featured</Badge>

                                <Badge variant="secondary">Featured</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardTitle>Price estimator</CardTitle>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="">
                            <CardDescription>
                                A practical talk on component APIs, accessibility, and shipping
                                faster.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">View Event</Button>
                        </CardFooter>
                    </Card>


                </div>
            </section>


        </main>
    )
}
