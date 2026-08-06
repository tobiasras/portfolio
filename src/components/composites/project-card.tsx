import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import type { ReactNode } from "react";


type ProjectCardProps = {
    title: string;
    category: string;
    image: string;
    url?: string;
    sourceUrl?: string;
    badges?: string[];
    children?: ReactNode;
};

export function ProjectCard({
                                title,
                                category,
                                image,
                                url,
                                sourceUrl,
                                badges = [],
                                children,
                            }: ProjectCardProps) {
    return (
        <Card data-particle-layer className="relative mx-auto w-full max-w-sm pt-0 gap-3">
            <div className="absolute inset-0 z-30 aspect-video" />
            <img
                src={image}
                alt={title}
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
                <CardTitle className="pt-1">{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <CardDescription>
                    <b>{category}</b>
                </CardDescription>

                <CardDescription className="mt-3">
                    {children}
                </CardDescription>

                {badges.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {badges.map((badge) => (
                            <Badge key={badge} variant="secondary">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>

            <CardFooter className="gap-1">
                {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Button>Open</Button>
                    </a>
                )}

                {sourceUrl && (
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" >
                            Source
                        </Button>
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}


