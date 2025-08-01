import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = ["Html", "CSS", "Javascript", "React", "TailwindCSS"]
    const backendSkills = ["Node.js", "Express.js", "MongoDB"]
    const tools = ["Postman", "Git", "Github"]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="glass rounded-xl p-3 border-white/20 border hover:-translate-y-1 transition-all md:p-8">
                        <p className="text-gray-300  mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">Hello! I’m Sakshi Jadhav. I have completed my B.Sc. in Computer Science from Mumbai University. I’m passionate about full stack development because I enjoy working on both the frontend and backend. However, I have a stronger interest in frontend development, as I love designing user interfaces and creating responsive, user-friendly websites.
                            Apart from my technical interests, I enjoy reading books, which helps me stay inspired and continuously learn new perspectives.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key} className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59, 130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key} className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tech, key) => (
                                        <span
                                            key={key} className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                        <div className="p-4 sm:p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                                <li>
                                    <strong>BSC in Computer Science</strong> - Mumbai University [2024]
                                </li>
                                <li>
                                    <strong>HSC</strong> - Viva College [2021]
                                </li>
                                <li>
                                    <strong>SSC</strong> - Utkarsha Madhyamik Vidyalaya [2019]
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 sm:p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-4">Certifications</h3>
                            <ul className="list-disc list-inside space-y-2 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                                <li>
                                    <strong>Mern Stack Development</strong> - EDBA Academy
                                    <a className="ml-2 sm:ml-4 text-blue-500" href="https://www.edba-academy.com/certificates/edba-RIBZMT42">View</a>
                                </li>
                                <li>
                                    <strong>CSS Workshop</strong> - EDBA Academy
                                    <a className="ml-2 sm:ml-4 text-blue-500" href="https://www.edba-academy.com/certificates/edba-ZEJTCZMG">View</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}