export default function Skills() {
  const programmingSkills = [
    { name: "Java", level: 85, proficiency: "Advanced" },
    { name: "Python", level: 80, proficiency: "Advanced" },
    { name: "JavaScript", level: 75, proficiency: "Intermediate" },
    { name: "C/C++", level: 70, proficiency: "Intermediate" },
  ];

  const frameworkSkills = [
    { name: "React", level: 75, proficiency: "Intermediate" },
    { name: "Node.js", level: 70, proficiency: "Intermediate" },
    { name: "Express.js", level: 65, proficiency: "Intermediate" },
    { name: "HTML/CSS", level: 85, proficiency: "Advanced" },
  ];

  const databases = ["SQL", "MongoDB", "MySQL"];
  const tools = ["Git", "GitHub", "REST APIs", "OOP", "DBMS", "DSA"];

  return (
    <section id="skills" className="py-20 bg-muted/20 dark:bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical expertise and competencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Programming Languages</h3>
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${skill.level}%` }}
                      data-testid={`skill-progress-${skill.name.toLowerCase()}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Frameworks & Technologies</h3>
            <div className="space-y-4">
              {frameworkSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${skill.level}%` }}
                      data-testid={`skill-progress-${skill.name.toLowerCase().replace('/', '-')}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-card-foreground mb-4 gradient-text">Databases</h4>
            <div className="flex flex-wrap gap-2">
              {databases.map((db) => (
                <span 
                  key={db}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  data-testid={`database-${db.toLowerCase()}`}
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-card-foreground mb-4 gradient-text">Tools & Concepts</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                  data-testid={`tool-${tool.toLowerCase().replace(' ', '-')}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <h4 className="font-semibold text-card-foreground">Blockchain A-Z: Building Decentralized Applications</h4>
              <p className="text-primary-600 dark:text-primary-500">Infosys Springboard</p>
              <p className="text-muted-foreground">Jun 2023 – Jul 2023 | 36 hours</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <h4 className="font-semibold text-card-foreground">Quantum Mechanics for Engineers</h4>
              <p className="text-primary-600 dark:text-primary-500">Coursera</p>
              <p className="text-muted-foreground">Oct 2023 – Nov 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
