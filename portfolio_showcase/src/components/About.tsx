const About = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'm a dedicated and results-oriented Python Developer with over 3 years of experience in in designing and implementing scalable web applications. Committed to optimizing system performance and enhancing backend functionalities. Adept in various programming languages and frameworks, ensuring seamless integration and deployment. Proven ability to deliver high-quality code and drive business success.
            </p>
            <p className="text-lg text-gray-300">
              My expertise includes Python, MySQL, and modern python related backend frameworks.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Coding setup"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
