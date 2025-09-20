import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
            <footer className="text-white py-5 md:py-10 px-4 w-full border-t border-white/10 bg-black">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto text-center">

                    <div className="flex gap-4 mb-4 sm:mb-0">
                        <a
                            href="https://github.com/SakshiJ004"
                            target="_blank"
                            className="text-blue-500 hover:text-blue-700 hover:translate-y-0.5 transition-transform duration-200"
                        >
                            <FaGithub className="text-2xl md:text-3xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sakshi2004"
                            target="_blank"
                            className="text-blue-500 hover:text-blue-700 hover:translate-y-0.5 transition-transform duration-200"
                        >
                            <FaLinkedinIn className="text-2xl md:text-3xl" />
                        </a>
                    </div>

                    <p className="text-sm md:text-base text-gray-400">
                        &copy; {new Date().getFullYear()} Design and Built by Sakshi Jadhav.
                    </p>
                </div>
            </footer>
    );
};
