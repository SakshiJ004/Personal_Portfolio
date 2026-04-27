import { RevealOnScroll } from "../RevealOnScroll"

export const Experience = () => {

    const experiences = [
        {
            role: "Full Stack Developer",
            company: "CBS Software Pvt Ltd",
            duration: "Sep 2025 – Present",
            points: [
                "Developing a Hospital Management System (HMS) using MERN Stack (MongoDB, Express.js, React.js, Node.js), working on both frontend and backend.",
                "Designed and implemented modules including Admin, HRM, Doctor, Patient, and Finance, ensuring smooth end-to-end functionality.",
                "Built responsive UI using React.js and Tailwind CSS and developed RESTful APIs for seamless data communication.",
                "Managed CRUD operations, form validations, debugging, and performance optimization, improving overall system efficiency and user experience.",
            ],
            color: "blue"
        },
    ]

    return (
        <section id="experience" className="flex items-center justify-center py-6 sm:py-10">
            <RevealOnScroll>
                <div className="w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Work Experience
                    </h2>

                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-30 hidden sm:block" />

                        <div className="flex flex-col gap-4 sm:gap-6">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative flex gap-6 sm:gap-8">
                                    <div className="hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full items-center justify-center z-10 mt-1 bg-blue-500/20 border border-blue-500/50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                    </div>

                                    <div className="flex-1 glass rounded-xl p-4 sm:p-6 border border-white/20 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-2">
                                            <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
                                            <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full w-fit bg-blue-500/20 text-blue-400">
                                                {exp.duration}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium mb-3 text-blue-400">
                                            {exp.company}
                                        </p>
                                        <ul className="space-y-1.5">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="text-gray-300 text-sm sm:text-base flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}