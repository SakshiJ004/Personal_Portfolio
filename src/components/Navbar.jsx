import { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <div className="fixed top-0 w-full z-40 px-4 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="w-full">
                <div className="flex justify-between items-center h-16 w-full">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="font-mono text-base sm:text-sm md:text-xl font-bold text-white"
                    >
                        Sakshi <span className="text-blue-500">Jadhav</span>
                    </a>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-white text-2xl z-50 focus:outline-none"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <FiMenu /> : <FiMenu />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
