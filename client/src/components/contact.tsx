import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error sending message",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/20 dark:bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                  <i className="fas fa-envelope text-primary-600 dark:text-primary-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">tuntun830344@gmail.com</p>
                  <p className="text-muted-foreground">22BCS16442@cuchd.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                  <i className="fas fa-phone text-primary-600 dark:text-primary-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91-7991199611</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                  <i className="fas fa-map-marker-alt text-primary-600 dark:text-primary-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Chandigarh, Mohali, Punjab, India</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors duration-200"
                  data-testid="social-github"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/tuntun-kumar-01a7a5255/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a 
                  href="mailto:tuntun830344@gmail.com" 
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors duration-200"
                  data-testid="social-email"
                >
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
