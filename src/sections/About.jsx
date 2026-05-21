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
                            <p>I'm a Digital Transformation Specialist at the New Jersey Department of Community Affairs, where I design, build, and maintain automated workflow systems that support statewide housing and community resource programs serving thousands of New Jersey residents and hundreds of staff.</p>

                            <p>My work spans the full lifecycle of application development, from gathering requirements with program managers and configuring SimpliGov workflows, to integrating APIs and data sources, managing user access controls, and delivering training to agency personnel. Recent projects include building a cloud-based IVR system using Amazon Connect to automatically route callers across housing, utility, and lead programs, and leading the development of the HMIS Help Desk in ServiceNow in coordination with NJOIT to improve technical support for stakeholder organizations statewide.</p>

                            <p>My background in Computer Science and Psychology gives me a foundation in both technical problem-solving and human-centered design. I enjoy translating complex operational requirements into scalable digital solutions that improve efficiency, data quality, and decision-making for the people who use them every day.</p>

                            <p>Beyond government tech, I've built projects in machine learning (PyTorch), conversational AI (Google Cloud/Dialogflow), and full-stack development (HTML/CSS/JS), including a collaborative filtering movie recommender system, an AI-powered NJ Transit chatbot, and a hospital locator that won 1st place in my district.</p>
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