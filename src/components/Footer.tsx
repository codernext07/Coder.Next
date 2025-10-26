import { Link } from "react-router-dom";
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">Coder.Next</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm mb-4">
              Crafting exceptional digital experiences with cutting-edge technology and creative design.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@Coder.Next.com" className="hover:text-primary-foreground transition-colors">
                  hello@Coder.Next.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/80">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>123 Tech Street, San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Coder.Next. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-secondary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-secondary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
