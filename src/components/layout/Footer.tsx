import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { JJLogo } from '@/components/JJLogo';

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Products', href: '/products' },
      { label: 'Projects', href: '#projects' },
      { label: 'Process', href: '#process' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Decorative Lighting', href: '#solutions' },
      { label: 'Architectural Lighting', href: '#solutions' },
      { label: 'Custom Installations', href: '#solutions' },
      { label: 'Consultation', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Showroom', href: '#contact' },
      { label: 'Brochure', href: '#brochure' },
      { label: 'Press', href: '#contact' },
    ],
  },
];

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFooterHash = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();

    const targetId = href.slice(1);
    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scrollToTarget, 100);
      return;
    }

    scrollToTarget();
  };

  return (
    <footer className="bg-[#121110] text-[#F6F4EE]">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-6 inline-block text-[#F6F4EE]">
              <JJLogo className="h-20 w-auto" />
            </a>
            <p className="mb-8 max-w-sm leading-relaxed text-[#F6F4EE]/75">
              Crafting bespoke lighting solutions for architects, designers, and 
              discerning clients who understand that light transforms spaces.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/jjlight.in?igsh=d2pyaDRteXZwbHRl" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F6F4EE]/35 text-[#F6F4EE] transition-colors hover:border-[#FFB35A] hover:text-[#FFB35A]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/jj-light/" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F6F4EE]/35 text-[#F6F4EE] transition-colors hover:border-[#FFB35A] hover:text-[#FFB35A]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jjlight.in@gmail.com" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F6F4EE]/35 text-[#F6F4EE] transition-colors hover:border-[#FFB35A] hover:text-[#FFB35A]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="label-uppercase mb-6 text-[#F6F4EE]/65">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleFooterHash(e, link.href)}
                        className="text-[#F6F4EE]/85 transition-colors hover:text-[#F6F4EE]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[#F6F4EE]/85 transition-colors hover:text-[#F6F4EE]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#F6F4EE]/20 pt-8 md:flex-row">
          <p className="text-sm text-[#F6F4EE]/65">
            © 2025 JJ A LIGHTING CO. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#/privacy-policy" className="text-[#F6F4EE]/65 transition-colors hover:text-[#F6F4EE]">
              Privacy Policy
            </a>
            <a href="#/terms-of-service" className="text-[#F6F4EE]/65 transition-colors hover:text-[#F6F4EE]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
