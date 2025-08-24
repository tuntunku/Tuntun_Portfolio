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
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Animated Background with Floating Shapes */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="floating-shapes"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-secondary/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-primary-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 rounded-full gradient-primary opacity-30 animate-pulse blur-xl"></div>
            <div className="absolute inset-0 rounded-full gradient-secondary opacity-20 animate-pulse blur-2xl animation-delay-1000"></div>
            <div className="relative w-52 h-52 mx-auto">
              <img 
                src={professionalPhoto} 
                alt="Tuntun Kumar - Professional Photo" 
                className="w-full h-full rounded-full shadow-2xl border-4 border-white/30 dark:border-white/20 animate-float object-cover relative z-10 glow-button"
                data-testid="profile-image"
              />
              <div className="absolute inset-0 rounded-full gradient-primary opacity-20 animate-spin-slow"></div>
            </div>
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up mb-8">
            <button 
              className="modern-button group"
              onClick={() => scrollToSection('#contact')}
              data-testid="button-contact"
            >
              <span className="flex items-center gap-3 text-lg">
                <i className="fas fa-envelope group-hover:animate-bounce"></i>
                Get In Touch
              </span>
            </button>
            <button
              className="glass-card hover:shadow-2xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 transform rounded-2xl border-2 border-primary-500/50 hover:border-primary-400 group"
              onClick={() => scrollToSection('#projects')}
              data-testid="button-projects"
            >
              <span className="flex items-center gap-3 text-lg gradient-text">
                <i className="fas fa-code group-hover:animate-spin"></i>
                View My Work
              </span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-10 animate-slide-up">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-16 h-16 flex items-center justify-center rounded-2xl glass-card hover:shadow-2xl transition-all duration-500 hover:scale-125 transform text-muted-foreground group relative overflow-hidden"
              data-testid="link-github"
            >
              <i className="fab fa-github text-2xl group-hover:animate-pulse z-10 relative"></i>
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/tuntun-kumar-01a7a5255/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-16 h-16 flex items-center justify-center rounded-2xl glass-card hover:shadow-2xl transition-all duration-500 hover:scale-125 transform text-muted-foreground group relative overflow-hidden"
              data-testid="link-linkedin"
            >
              <i className="fab fa-linkedin text-2xl group-hover:animate-pulse z-10 relative"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="mailto:tuntun830344@gmail.com" 
              className="w-16 h-16 flex items-center justify-center rounded-2xl glass-card hover:shadow-2xl transition-all duration-500 hover:scale-125 transform text-muted-foreground group relative overflow-hidden"
              data-testid="link-email"
            >
              <i className="fas fa-envelope text-2xl group-hover:animate-bounce z-10 relative"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
