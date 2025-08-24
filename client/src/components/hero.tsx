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
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 opacity-20 animate-pulse"></div>
            <img 
              src={professionalPhoto} 
              alt="Tuntun Kumar - Professional Photo" 
              className="w-48 h-48 mx-auto rounded-full shadow-2xl border-4 border-white dark:border-primary-900/50 animate-float object-cover relative z-10 glow-button"
              data-testid="profile-image"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Hi, I'm <span className="gradient-text">Tuntun Kumar</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-muted-foreground mb-4 animate-slide-up font-medium">
            Final Year B.E. Student | Aspiring Software Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            I am a final-year Bachelor of Engineering student with a strong interest in software development, databases, and problem-solving
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-8">
            <Button 
              className="gradient-primary hover:shadow-2xl px-8 py-4 font-medium transition-all duration-300 hover:scale-105 transform text-white border-0 glow-button rounded-2xl"
              onClick={() => scrollToSection('#contact')}
              data-testid="button-contact"
            >
              <span className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                Get In Touch
              </span>
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform rounded-2xl"
              onClick={() => scrollToSection('#projects')}
              data-testid="button-projects"
            >
              <span className="flex items-center gap-2">
                <i className="fas fa-code"></i>
                View My Work
              </span>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 animate-slide-up">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 flex items-center justify-center rounded-2xl glass-card hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110 transform text-muted-foreground hover:shadow-xl"
              data-testid="link-github"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/tuntun-kumar-01a7a5255/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 flex items-center justify-center rounded-2xl glass-card hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 transform text-muted-foreground hover:shadow-xl"
              data-testid="link-linkedin"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="mailto:tuntun830344@gmail.com" 
              className="w-14 h-14 flex items-center justify-center rounded-2xl glass-card hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 transform text-muted-foreground hover:shadow-xl"
              data-testid="link-email"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
