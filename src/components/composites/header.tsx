import {Link} from "react-router-dom";
import {Container} from "@/components/layout/container.tsx";

const socialLinks = [
    {href: "https://github.com/tobiasras", label: "GitHub", icon: "/images/icons/github.svg"},
    {href: "https://www.linkedin.com/in/tobiasras/", label: "LinkedIn", icon: "/images/icons/linkedin.svg"},
    {href: "https://www.instagram.com/tobiasras/", label: "Instagram", icon: "/images/icons/instagram.svg"},
] as const;

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-white">
            <Container className="flex h-full items-center justify-between">
                <Link
                    to="/"
                    className="font-heading text-lg font-semibold tracking-tight text-foreground"
                >
                    Tobiasras
                </Link>
                <nav className="nav-links flex items-center gap-3">
                    {socialLinks.map(({href, label, icon}) => (
                        <a
                            key={href}
                            className="nav-icon opacity-70 transition-opacity hover:opacity-100"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            <img src={icon} alt={label} className="size-5"/>
                        </a>
                    ))}
                </nav>
            </Container>
        </header>
    )
}
