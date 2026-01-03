const experiences = [
    {
        period: "October 2025 - Present", 
        role: "Digital Transformation Intern",
        company: "New Jersey Department of Community Affairs",
        description: "Design, develop, configure, and maintain workflows for statewide housing and community resource programs.",
        skills: ["SimpliGov"],
        current: true,
    },
    {
        period: "August 2023 - June 2025", 
        role: "Resident Assistant",
        company: "Rutgers University-New Brunswick",
        description: "Managed resident support and conflict resolution for a 500+ student community in the Cook-Douglass campus, coordinating resources and services across individuals.",
        skills: ["Collaboration"],
        current: false,
    },
    {
        period: "September 2024 - June 2025", 
        role: "Research Assistant",
        company: "Rutgers University-New Brunswick",
        description: "Collected and analyzed research data on how young children acquire number words as part of a team-based cognitive development study.",
        skills: ["Research", "Collaboration"],
        current: false,
    },
    {
        period: "June 2023 - April 2024", 
        role: "Teaching Assistant",
        company: "Rutgers University-New Brunswick",
        description: "Facilitated weekly discussions on mental disorders, enhancing 16 interns' understanding and fostering a supportive learning environment.",
        skills: ["Research", "Collaboration"],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section 
            id="experience"
            className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div 
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 150}ms`}}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />}
                                </div>

                                {/* Content */}
                                <div 
                                    className={`pl-8 md:pl-0 ${
                                        idx % 2 === 0 
                                            ? "md:pr-16 md:text-right" 
                                            : "md:col-start-2 md:pl-16"
                                }`}
                                >
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div 
                                            className={`flex flex-wrap gap-2 mt-4 ${
                                                idx % 2 === 0 
                                                    ? "md:justify-end" 
                                                    : ""
                                                    }`}
                                        >
                                            {exp.skills.map((skill, skillIdx) => (
                                            <span 
                                                key={skillIdx}
                                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}