import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";


export function ProjectCard() {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardTitle>Price estimator</CardTitle>
            </CardHeader>
            <CardContent className="">
                <CardDescription>
                    <b>Machine learning</b>
                </CardDescription>

                <CardDescription className="mt-3">
                    A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription>

                <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                </div>
            </CardContent>

            <CardFooter className="gap-1">
                <Button className="">Open demo</Button>
                <Button variant="outline" className="">Source</Button>
            </CardFooter>
        </Card>
    )
}


