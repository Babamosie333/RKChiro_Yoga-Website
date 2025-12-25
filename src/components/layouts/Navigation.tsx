import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 xl:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 smooth-transition hover:opacity-80">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">RK</span>
            </div>
            <div className="hidden xl:block">
              <h1 className="text-xl font-bold gradient-text">RK CHIRO Yog Centre</h1>
              <p className="text-xs text-muted-foreground">Wellness & Healing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-base font-medium smooth-transition relative py-2',
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground smooth-transition">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">RK</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">RK CHIRO Yog Centre</h2>
                    <p className="text-xs text-muted-foreground">Wellness & Healing</p>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium smooth-transition p-3 rounded-lg',
                        isActive(link.path)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground smooth-transition mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
