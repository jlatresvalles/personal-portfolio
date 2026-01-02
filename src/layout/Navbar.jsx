import { useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "https://www.linkedin.com/in/jlatresvalles/", label: "LinkedIn", external: true},
    {href: "https://github.com/jlatresvalles", label: "GitHub", external: true},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a 
                    href="#" 
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    Justin <span className="text-primary">Tresvalles</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="hidden md:block">
                    <Button size="sm">
                        <span className="relative flex items-center justify-center gap-2">Contact Me</span>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-foreground cursor-pointer" 
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="text-lg text-muted-foreground hover:text-foreground py-2"
                            >
                                {link.label}
                            </a>
                        ))}

                    <Button>Contact Me</Button>
                </div>
            </div>
            )}
        </header>
    );
}