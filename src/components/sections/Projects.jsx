import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { RevealOnScroll } from "../RevealOnScroll"


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-0 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Learning Management System(LMS)</h3>
                            <p className="text-gray-400 mb-4">Built a full-stack LMS using the MERN stack with features like user authentication, course enrollment, dynamic ratings, and a responsive dashboard. Designed a clean UI for both learners and instructors, enabling smooth content management and real-time interaction.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://lms-frontend-jet-zeta.vercel.app/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <BiLinkExternal className="text-lg mr-2" />View Project
                                </a>
                                <a href="https://github.com/SakshiJ004/LMS.git" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                                    <FaGithub className="text-lg mr-2" />Github Repository
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">AI-Powered Code Reviewer</h3>
                            <p className="text-gray-400 mb-4">Created an AI-powered Code Reviewer using the MERN stack, integrated with Gemini AI to deliver intelligent analysis and improvement suggestions. Automated code review process to ensure clean, optimized, and maintainable code.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://ai-code-reviewer-gilt.vercel.app/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <BiLinkExternal className="text-lg mr-2" />View Project
                                </a>
                                <a href="https://github.com/SakshiJ004/ai-code-reviewer.git" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                                    <FaGithub className="text-lg mr-2" />Github Repository
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Hand Gesture Recognition System</h3>
                            <p className="text-gray-400 mb-4">Implemented a real-time finger-counting system using Python, OpenCV, MediaPipe, and NumPy to enable hands-free interaction through webcam gestures. Ensured high accuracy and minimal latency with optimized image processing techniques.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "OpenCV", "MediaPipe", "NumPy"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/SakshiJ004/Hand-Gesture-Recognision.git" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub className="text-lg mr-2" />Github Repository
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
                            <p className="text-gray-400 mb-4">Developed a responsive personal portfolio using HTML, TailwindCSS, JavaScript, and React.
                                Implemented smooth transitions, hover effects, and a clean, modern layout.
                                Showcases my projects, skills, and contact details with a user-friendly design.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Html", "TailwindCSS", "Javascript", "React"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://personal-portfolio-omega-ten-62.vercel.app/" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <BiLinkExternal className="text-lg mr-2" />View Project
                                </a>
                                <a href="https://github.com/SakshiJ004/Personal_Portfolio.git" target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                                    <FaGithub className="text-lg mr-2" />Github Repository
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}