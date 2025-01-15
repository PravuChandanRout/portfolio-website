const Hero = () => {
  return (
    <section id="hero" className="min-h-[70vh] bg-neutral-900 flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hi, I'm Chandan Rout
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
