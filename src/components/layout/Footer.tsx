import { Instagram, Linkedin, Mail } from 'lucide-react';

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
      { label: 'Press', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-sans text-3xl font-bold tracking-wider uppercase">JJ LIGHT</span>
            </a>
            <p className="text-primary-foreground/60 leading-relaxed max-w-sm mb-8">
              Crafting bespoke lighting solutions for architects, designers, and 
              discerning clients who understand that light transforms spaces.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/jjlight.in?igsh=d2pyaDRteXZwbHRl" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:jjlight.in@gmail.com" 
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="label-uppercase text-primary-foreground/40 mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 JJ LIGHT. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
