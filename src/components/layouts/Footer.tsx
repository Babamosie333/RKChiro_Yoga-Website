import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 xl:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-12">
          {/* Brand Section */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">RK CHIRO Yog Centre</h3>
                <p className="text-sm text-muted-foreground">Wellness & Healing</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Combining the ancient wisdom of yoga with modern chiropractic techniques 
              to provide comprehensive care for your body, mind, and spirit.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>for your wellness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary smooth-transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary smooth-transition">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary smooth-transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">RK CHIRO Yog Centre</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">+91 9415043595</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">info@rkchiroyog.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center xl:text-left">
              © {currentYear} RK CHIRO Yog Centre. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary smooth-transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary smooth-transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
