import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "/messages", label: "Messages" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 glass-card z-50 border-b border-border/20 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-4xl font-bold gradient-text hover:scale-110 transform transition-all duration-300 glow-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              data-testid="logo-link"
            >
              TK
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-5 py-3 rounded-2xl text-sm font-medium glass-card hover:shadow-lg hover:scale-105 transform transition-all duration-300 relative overflow-hidden group"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href.startsWith('/')) {
                      window.location.href = item.href;
                    } else {
                      scrollToSection(item.href);
                    }
                  }}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="theme-toggle"
              className="rounded-2xl glass-card hover:shadow-xl hover:scale-110 transform transition-all duration-300 border-primary-200/50 dark:border-primary-800/50"
            >
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} ${theme === 'light' ? 'text-primary-600' : 'text-yellow-400'}`}></i>
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars text-gray-600 dark:text-gray-300"></i>
              <span className="sr-only">Open mobile menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
