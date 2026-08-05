import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";

export default function Header() {
    return (

        <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] flex items-center h-100 justify-between
 px-6 md:px-10  z-100">
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
        </header>

    )
}
