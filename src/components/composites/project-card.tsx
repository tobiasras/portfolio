import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Avatar, AvatarFallback, AvatarGroup, AvatarImage} from "@/components/ui/avatar.tsx";
import type { ReactNode } from "react";

function getGitHubUsername(value: string): string | null {
    if (!value.startsWith("http")) {
        return value.replace(/^@/, "") || null;
    }

    try {
        const {hostname, pathname} = new URL(value);
        if (hostname !== "github.com" && hostname !== "www.github.com") {
            return null;
        }

        const [username] = pathname.split("/").filter(Boolean);
        return username ?? null;
    } catch {
        return null;
    }
}

function GitHubAvatar({username}: { username: string }) {
    return (
        <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`@${username}`}
        >
            <Avatar size="sm">
                <AvatarImage
                    src={`https://github.com/${username}.png`}
                    alt={username}
                />
                <AvatarFallback>
                    {username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>
        </a>
    );
}

function TeamAvatars({members}: { members: string[] }) {
    const usernames = [
        ...new Set(
            members
                .map(getGitHubUsername)
                .filter((username): username is string => username !== null),
        ),
    ];

    if (usernames.length === 0) {
        return null;
    }

    if (usernames.length > 2) {
        return (
            <AvatarGroup>
                {usernames.map((username) => (
                    <GitHubAvatar key={username} username={username}/>
                ))}
            </AvatarGroup>
        );
    }

    return (
        <div className="flex items-center gap-1.5">
            {usernames.map((username) => (
                <GitHubAvatar key={username} username={username}/>
            ))}
        </div>
    );
}

type ProjectCardProps = {
    title: string;
    category: string;
    image: string;
    url?: string;
    sourceUrl?: string;
    team?: string[];
    badges?: string[];
    children?: ReactNode;
};

export function ProjectCard({
                                title,
                                category,
                                image,
                                url,
                                sourceUrl,
                                team = [],
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
                {team.length > 0 && (
                    <CardAction>
                        <TeamAvatars members={team}/>
                    </CardAction>
                )}
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
                    <a href={url}  >
                        <Button variant="outline">Open</Button>
                    </a>
                )}

                {sourceUrl && (
                    <a href={sourceUrl} >
                        <Button variant="outline">Codebase</Button>
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}


