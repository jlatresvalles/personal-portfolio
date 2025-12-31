import { Button } from "@/components/Button";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "https://www.linkedin.com/in/jlatresvalles/", label: "LinkedIn"},
    {href: "https://github.com/jlatresvalles", label: "GitHub"},
]

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a 
                    href="#" 
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    Justin <span className="text-primary">Tresvalles</span>
                </a>

                {/* Desktop Nav */}
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div>
                    <Button size="sm">
                        <span className="relative flex items-center justify gap-2">Contact Me</span>
                    </Button>
                </div>
            </nav>
        </header>
    );
}