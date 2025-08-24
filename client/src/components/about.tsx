export default function About() {
  return (
    <section id="about" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Professional Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              An enthusiastic Computer Science student with a strong interest in Full Stack Development and problem solving. 
              Passionate about building user-centric web applications and writing clean, efficient code. Seeking an opportunity 
              to contribute to innovative projects while expanding my technical expertise and collaborative skills.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-graduation-cap text-primary-600 dark:text-primary-500"></i>
                <span className="text-foreground">Bachelor of Engineering (Final Year)</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-calendar text-primary-600 dark:text-primary-500"></i>
                <span className="text-foreground">Graduation Year: 2026</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary-600 dark:text-primary-500"></i>
                <span className="text-foreground">Chandigarh, Mohali</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
            
            <div className="space-y-4">
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground">B.E. in Computer Science</h4>
                <p className="text-primary-600 dark:text-primary-500">Chandigarh University</p>
                <p className="text-muted-foreground">2022 – 2026 | CGPA: 6.87</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground">Senior Secondary (XII)</h4>
                <p className="text-primary-600 dark:text-primary-500">Karpoori Thakur Inter College (BSEB)</p>
                <p className="text-muted-foreground">2020 – 2022 | Percentage: 75.4%</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground">Secondary (X)</h4>
                <p className="text-primary-600 dark:text-primary-500">Shantiniketan Jubilee School (CBSE)</p>
                <p className="text-muted-foreground">2019 – 2020 | Percentage: 71.8%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-8">Hobbies & Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Cricket', 'Cooking', 'Traveling', 'Problem Solving', 'Learning New Technologies'].map((hobby) => (
              <span 
                key={hobby}
                className="glass-card bg-primary-100/50 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-2xl font-medium hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                data-testid={`hobby-${hobby.toLowerCase().replace(' ', '-')}`}
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
