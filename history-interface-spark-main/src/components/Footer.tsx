import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              HCI Evolution
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              An interactive journey through the fascinating history of 
              human-computer interaction, from punch cards to brain interfaces.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Reuel and Saranya
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#timeline" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a 
                  href="#interfaces" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Interface Types
                </a>
              </li>
              <li>
                <a 
                  href="#future" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Future Tech
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Interested in HCI research or have feedback? Get in touch!
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} HCI Evolution. Educational content for learning purposes.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm smooth-transition"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm smooth-transition"
            >
              Terms of Use
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm smooth-transition"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;