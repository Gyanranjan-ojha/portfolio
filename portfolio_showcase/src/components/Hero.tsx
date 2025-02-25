const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Gyan Ranjan Ojha</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-delay">
          Python Developer | Django | Discord Bot Developer 
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity animate-fade-in-delay-2">
          View My Work
        </button>
      </div>
    </section>
  )
}

export default Hero
