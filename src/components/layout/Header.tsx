import type { MouseEvent } from 'react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '@/assets/jj-light-logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;

    // When not on the homepage, route back to home with the hash.
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/${href}`);
      return;
    }

    // On the homepage, smooth-scroll to section.
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3" aria-label="JJ LIGHT Home">
            <img 
              src={logoImg} 
              alt="JJ LIGHT Logo" 
              className="h-20 lg:h-22 w-auto"
            />
            <div className="flex flex-col items-start text-left">
              <span
                className="font-bold uppercase text-xl lg:text-2xl text-foreground"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                JJ LIGHT
              </span>
              <span
                className="text-[10px] lg:text-[11px] font-medium text-muted-foreground leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Lighting Company
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="label-uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="label-uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="luxuryOutline" 
              size="sm"
              onClick={(e) => handleNavClick(e as any, '#contact')}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-lg border-b border-border">
            <nav className="flex flex-col py-6 px-6">
              {/* Mobile Logo & Tagline */}
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-4 label-uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="py-4 label-uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-6 mt-4 border-t border-border">
                <Button 
                  variant="luxury" 
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick({ preventDefault: () => {} } as any, '#contact');
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
