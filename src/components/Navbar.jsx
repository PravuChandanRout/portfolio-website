import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Portfolio
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white">
                Projects
              </a>
              <a href="#services" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900/95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block text-gray-300 hover:text-white">
              About
            </a>
            <a href="#skills" className="block text-gray-300 hover:text-white">
              Skills
            </a>
            <a href="#projects" className="block text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#services" className="block text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
