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
                    <div className="glass">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}