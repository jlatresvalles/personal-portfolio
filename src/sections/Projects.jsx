import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/Button"

const projects = [
    {
        title: "Restaurant Menu & Order Analysis",
        description: "SQL exploratory data analysis on a restaurant's menu and order data, uncovering insights on pricing, popularity, and customer spending behavior.",
        image: "/projects/restaurant_analysis.png",
        tags: ["SQL"],
        link: "https://github.com/jlatresvalles/restaurant-menu-order-analysis",
        github: "https://github.com/jlatresvalles/restaurant-menu-order-analysis",
    },
    {
        title: "HMIS Help Desk",
        description: "Led requirements gathering and coordinated directly with NJOIT (Office of Information Technology) and NJHFMA (Housing & Mortgage Finance Agency) to design a Homeless Management Information System (HMIS) Help Desk in ServiceNow, improving technical support workflows for stakeholder organizations and shelter providers across New Jersey. Currently in development.",
        image: "/projects/nj-hfma.jpeg",
        tags: ["ServiceNow", "Stakeholder Collaboration"],
        link: "#",
        github: "#",
    },
    {
        title: "Bringing Veterans Home External Referral Form",
        description: "Maintained and updated a public-facing referral intake form for the Bringing Veterans Home (BVH) program at the NJ DCA, allowing veterans experiencing homelessness (or their case managers) to submit referrals that are automatically routed to the appropriate housing provider statewide.",
        image: "/projects/bvh-logo.webp",
        tags: ["SimpliGov"],
        link: "https://bvh.dca.nj.gov/#make-referral",
        github: "#",
    },
    {
        title: "Amazon Connect IVR System",
        description: "Built a cloud-based IVR phone system using Amazon Connect to automatically route NJ Residents to the correct housing, utility, or lead assistance program, ultimately replacing manual call handling for agency staff and enabling automated SMS follow-ups. Currently in pre-deployment.",
        image: "/projects/call_center.jpg",
        tags: ["Amazon Connect"],
        link: "#",
        github: "#",
    },
    {
        title: "Winter Termination Program Self-Certification Form",
        description: "Created to quickly prevent service discontinuation for eligible residential customers receiving residential electric, sewer, and water service from a local authority, municipal utility, or rural electric cooperative.",
        image: "/projects/winter-termination.png",
        tags: ["SimpliGov"],
        link: "https://www.nj.gov/dca/dhcr/offices/wintertermination.shtml",
        github: "#",
    },
    {
        title: "Nate the Transit Mate",
        description: "Involves developing a conversational AI chatbot, integrating NJ TRANSIT's FAQ, ticket system, and schedules using Google Cloud and Dialogflow. This was done in less than 48 hours for the RU Hackathon.",
        image: "/projects/nj-transit-pic.webp",
        tags: ["Google Cloud", "Dialogflow"],
        link: "https://devpost.com/software/nate-the-transit-mate?_gl=1*1ys1jek*_gcl_au*ODU2MjQ1NTM3LjE3NTY3NjA3NzY.*_ga*MTQxMjUyMTUzNy4xNzU2NzYwNzc2*_ga_0YHJK3Y10M*czE3NTY3NjA3NzYkbzEkZzEkdDE3NTY3NjA5OTkkajM5JGwwJGgw",
        github: "https://github.com/TherealZain/Nate-the-Transit-Mate",
    },
    {
        title: "Movie Recommender System",
        description: "This project explores using recommendation systems to predict user ratings for movies and provide movie recommendations. The system uses collaborative filtering based on embeddings of users, ratings, and movies from the MovieLens32M dataset, trained using PyTorch. The model predicts ratings and generates personalized top-10 movie recommendations.",
        image: "/projects/movie-recommender-pic.jpg",
        tags: ["Python", "Data Science", "PyTorch"],
        link: "https://github.com/jlatresvalles/data-science-final-project/blob/main/Final%20Project%20Paper.pdf",
        github: "https://github.com/jlatresvalles/data-science-final-project",
    },
]

export const Projects = () => {
    return (
        <section>
            <section 
                id="projects"
                className="py-32 relative overflow-hidden"
            >
                {/* Background Glows */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mx-auto max-w-3xl mb-16">
                        <span className="text-secondary-foreground text-lg font-medium tracker-wider uppercase animate-fade-in">
                            Featured Work
                        </span>

                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            A selection of my current and past projects.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-1 gap-8">
                        {projects.map((projects, idx) => (
                            <div 
                                key={idx} 
                                className="group glass rounded-2xl overflow-hidden animate-fade-in max-w-5xl mx-auto"
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img 
                                        src={projects.image} 
                                        alt={projects.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" 
                                    />

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={projects.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={projects.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{projects.title}</h3>
                                        <a
                                            href={projects.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                        </a>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{projects.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {projects.tags.map((tag, tagIdx) => (
                                        <span 
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Projects Call to Action */}
                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <Button size="lg">
                            <a
                                href="https://github.com/jlatresvalles"
                                target="_blank"
                            >
                                <span className="relative flex items-center justify-center gap-2">
                                    View All Projects
                                    <ArrowUpRight className="w-5 h-5"/>
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </section>
    );
}