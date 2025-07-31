import { RevealOnScroll } from "../RevealOnScroll"
import Resume from '../../assets/Resume.pdf'

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Hi, I'm Sakshi Jadhav</h1>
                    <p className="text-blue-300 text-lg mb-6">
                        Full Stack Developer | Frontend Enthusiast | Creative Coder
                    </p>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">Hello! I’m a Computer Science graduate passionate about full stack development, with a special love for crafting smooth and engaging frontend experiences.
                        From designing responsive UIs to building complete web applications, I enjoy bringing ideas to life through code. <br />
                        Scroll down and check out what I’ve been working on!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                        <a href={Resume} target="_blank" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Download Resume</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}