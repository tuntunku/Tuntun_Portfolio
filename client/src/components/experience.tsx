export default function Experience() {
  const experiences = [
    {
      title: ".Net Full Stack Development Training",
      company: "Wipro",
      period: "Current",
      type: "Training Program",
      description: "Currently undergoing comprehensive training in .Net Full Stack Development, covering both frontend and backend technologies including ASP.NET, C#, SQL Server, and modern web development practices.",
      skills: [".NET", "C#", "ASP.NET", "SQL Server", "Full Stack Development"],
      status: "ongoing"
    },
    {
      title: "Blockchain Technology using Ethereum and Polygon",
      company: "Chandigarh University with Metacrafters",
      period: "June 2024 – August 2024",
      type: "Summer Programme",
      description: "Completed intensive summer program on Blockchain Technology, gaining practical experience in Ethereum and Polygon development with mentorship and real-world project experience.",
      skills: ["Blockchain", "Ethereum", "Polygon", "Smart Contracts", "JavaScript"],
      modules: [
        "JS PROOF: Beginner Course",
        "ETH PROOF: Beginner EVM Course"
      ],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience & Training</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional training and development experiences that have shaped my technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div 
              key={experience.title}
              className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              data-testid={`experience-${experience.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">{experience.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      experience.status === 'ongoing' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                    }`}>
                      {experience.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-500 font-medium mb-1">
                    {experience.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {experience.type} • {experience.period}
                  </p>
                </div>
              </div>

              <p className="text-card-foreground mb-4 leading-relaxed">
                {experience.description}
              </p>

              {experience.modules && (
                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2">Completed Modules:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experience.modules.map((module) => (
                      <li key={module} className="text-muted-foreground text-sm">
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => {
                    const getSkillUrl = (skillName: string): string | null => {
                      const urls: { [key: string]: string } = {
                        '.NET': 'https://dotnet.microsoft.com/',
                        'C#': 'https://docs.microsoft.com/en-us/dotnet/csharp/',
                        'ASP.NET': 'https://dotnet.microsoft.com/en-us/apps/aspnet',
                        'SQL Server': 'https://docs.microsoft.com/en-us/sql/sql-server/',
                        'Full Stack Development': 'https://developer.mozilla.org/en-US/docs/Learn',
                        'Blockchain': 'https://ethereum.org/en/developers/docs/',
                        'Ethereum': 'https://ethereum.org/en/',
                        'Polygon': 'https://polygon.technology/',
                        'Smart Contracts': 'https://ethereum.org/en/developers/docs/smart-contracts/',
                        'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                      };
                      return urls[skillName] || null;
                    };

                    const url = getSkillUrl(skill);
                    const isClickable = url !== null;

                    return (
                      <span 
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                          isClickable
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50' 
                            : 'bg-muted text-muted-foreground'
                        }`}
                        onClick={() => {
                          if (url) {
                            window.open(url, '_blank');
                          }
                        }}
                        data-testid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        title={isClickable ? `Learn more about ${skill}` : undefined}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready for New Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              With ongoing training and hands-on experience, I'm eager to contribute to innovative projects and continue learning in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}