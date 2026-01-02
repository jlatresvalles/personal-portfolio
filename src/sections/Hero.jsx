import { Button } from "@/components/Button"
import { Download } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

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
                            <Button size="lg">
                                Contact Me
                            </Button>

                            <Button size="lg">
                                <span className="relative flex items-center justify-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </span>
                            </Button>
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
            </div>
        </section>
    )
}