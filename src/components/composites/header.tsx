import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";
import {Container} from "@/components/layout/container.tsx";

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
                <nav className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" render={<a href="#work"/>}>
                        Work
                    </Button>
                    <Button size="sm" render={<a href="#contact"/>}>
                        Contact
                        <ArrowRight className="size-4"/>
                    </Button>
                </nav>
            </Container>
        </header>
    )
}
