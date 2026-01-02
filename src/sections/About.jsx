import { Axis3DIcon, UserPen, Users, Wrench } from "lucide-react";

const highlights = [
    {
        icon: Axis3DIcon,
        title: "Quick Learner",
        description:
            "Learned new tools and software like SimpliGov within the first month of working.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Works closely with teams and stakeholders to gather program requirements.",
    },
    {
        icon: Wrench,
        title: "Flexible & Adaptable",
        description:
            "Can quickly switch from one project to another, depending on urgency and deadline dates.",
    },
    {
        icon: UserPen,
        title: "Hardworking & Reliable",
        description:
            "Works hard and consistently delivers good attention to detail to projects before the deadline.",
    },
]

export const About = () => {
    return (
        <section 
            id="about"
            className="py-32 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*  Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>I'm a Digital Transformation Intern at the New Jersey Department of Community Affairs, where I design and automate end-to-end workflows using SimpliGov to streamline operations for hundreds of staff across the state. I have built and launched automated solutions for EEO training, grant scoring, and statewide housing programs by using APIs, data sources, conditional logic, and advanced formulas to reduce manual processes and improve user experience.</p>

                            <p>My background revolves around Computer Science, Psychology, and applied research, giving me a strong foundation in both technical problem-solving and human-centered design. I enjoy working directly with program leads to translate complex requirements into scalable digital solutions that improve efficiency, data quality, and decision-making.</p>

                            <p>Beyond government tech, I have built projects in machine learning (PyTorch), full-stack development (HTML/CSS/JS), and conversational AI (Google Cloud/Dialogflow), including a movie recommender system and an AI transit chatbot. I’m passionate about automation, AI, and building tools that make others' work easier and smarter.</p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}