
const Skills = () => {
  const skills = [
    { name: 'React.js', percentage: '95%' },
    { name: 'Vue.js', percentage: '85%' },
    { name: 'Tailwind CSS', percentage: '90%' },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: '90%' },
    { name: 'Python', percentage: '80%' },
    { name: 'MongoDB', percentage: '85%' },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">My Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Frontend Development</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-purple-500">{skill.percentage}</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: skill.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-purple-500">{skill.percentage}</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: skill.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
