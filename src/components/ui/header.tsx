import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";

export default function Header() {
    return (

        <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
            <Link
                to="/"
                className="font-heading text-lg font-semibold tracking-tight text-foreground"
            >
                Portfolio
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
