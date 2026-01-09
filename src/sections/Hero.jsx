import { Button } from "@/components/Button"
import { Download, ChevronDown } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const skills = [
    "Java",
    "Python",
    "C",
    "React",
    "Tailwind CSS",
    "SimpliGov",
    "Postman"
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img 
                    src="/hero-bg.png" 
                    alt="Hero Image" 
                    className="w-full h-full object-cover opacity-25" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
                </div>
            </div>

            {/* Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_,i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%` ,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Digital Transformation Intern
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                               Hi, I'm <span className="text-primary glow-text">Justin</span>.
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                I'm a Digital Transformation Intern at the New Jersey Department of Community Affairs, where I design and automate end-to-end workflows using SimpliGov to streamline operations for hundreds of staff and residents across the state.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
                            <a href="#contact">
                                <Button size="lg">
                                    Contact Me
                                </Button>
                            </a>

                            <a 
                                href="/Justin_Tresvalles_Resume.pdf"
                                download
                            >
                                <Button size="lg">
                                    <span className="relative flex items-center justify-center gap-2">
                                        <Download className="w-5 h-5" />
                                        Resume
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                    src="/profile-photo.JPG"
                                    alt="Justin Tresvalles"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animate-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Skills</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div 
                                    key={idx}
                                    className="flex-shrink-0 px-8 py-4"
                                >
                                    <span className="text-xl font-semibold text-muted-foreground/80 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
                animate-fade-in animation-delay-800"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6" />
                </a>
            </div>
        </section>
    )
}