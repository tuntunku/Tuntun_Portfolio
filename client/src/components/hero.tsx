import { Button } from "@/components/ui/button";
import professionalPhoto from "@assets/Lovepic_1756042726925.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-background dark:to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src={professionalPhoto} 
              alt="Tuntun Kumar - Professional Photo" 
              className="w-40 h-40 mx-auto rounded-full shadow-2xl border-4 border-white dark:border-gray-700 animate-float object-cover"
              data-testid="profile-image"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Hi, I'm <span className="text-primary-600 dark:text-primary-500">Tuntun Kumar</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up">
            Final Year B.E. Student | Aspiring Software Engineer
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            I am a final-year Bachelor of Engineering student with a strong interest in software development, databases, and problem-solving
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-8">
            <Button 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
              onClick={() => scrollToSection('#contact')}
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-500 dark:border-primary-500 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:text-gray-900 px-8 py-3 font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
              onClick={() => scrollToSection('#projects')}
              data-testid="button-projects"
            >
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200 text-2xl"
              data-testid="link-github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/tuntun-kumar-01a7a5255/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200 text-2xl"
              data-testid="link-linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:tuntun830344@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200 text-2xl"
              data-testid="link-email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
