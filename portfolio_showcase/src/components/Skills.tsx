const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Python', 'MySQL', 'Django', 'DRF', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'CI/CD', 'JIRA', 'Confluence', 'Linux', 'BitBucket'].map((skill) => (
            <div 
              key={skill}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
