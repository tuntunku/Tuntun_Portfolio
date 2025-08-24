import { Button } from "@/components/ui/button";
import resumePdf from "@assets/Tuntun_Kumar_Resume_1756042283979.pdf";

export default function Projects() {
  const projects = [
    {
      title: "Spotify Clone",
      period: "Jan - Feb 2023",
      description: "Built a responsive front-end clone of Spotify with play/pause controls and dynamic playlist sections using JavaScript and DOM manipulation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techColors: {
        "HTML": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
        "CSS": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "JavaScript": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
      }
    },
    {
      title: "Restaurant Menu Web App",
      period: "Mar - Apr 2023",
      description: "Developed an interactive restaurant menu system for dish categorization and order simulation with real-time interface responsiveness.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techColors: {
        "HTML": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
        "CSS": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "JavaScript": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
      }
    },
    {
      title: "Travel Tourism Management System",
      period: "Dec 2023 - Jan 2024",
      description: "Designed a Java-based GUI application with hotel booking, package selection, and payment simulation using object-oriented design and Swing.",
      technologies: ["Java", "Swing", "OOP"],
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techColors: {
        "Java": "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200",
        "Swing": "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
        "OOP": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
      }
    },
    {
      title: "Student Management System",
      period: "Aug - Sep 2023",
      description: "Console-based application for storing and modifying student details, including auto-generated IDs and file handling for persistence.",
      technologies: ["C++", "File Handling", "Console App"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      techColors: {
        "C++": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "File Handling": "bg-gray-100 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200",
        "Console App": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent academic and personal projects that showcase my technical skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-muted/20 dark:bg-accent/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} Project`} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-2 py-1 rounded text-xs ${project.techColors[tech as keyof typeof project.techColors]}`}
                      data-testid={`tech-tag-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200"
                    data-testid={`link-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <i className="fab fa-github"></i>
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200"
                    data-testid={`link-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Download Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Want to know more?</h3>
            <p className="text-muted-foreground mb-6">
              Download my complete resume to see all my projects, experience, and qualifications
            </p>
            <Button asChild>
              <a 
                href={resumePdf} 
                download="Tuntun_Kumar_Resume.pdf" 
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
                data-testid="button-download-resume"
              >
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
