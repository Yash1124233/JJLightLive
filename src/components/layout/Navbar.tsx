import { useState, type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLighting } from '@/components/lighting/LightingContext';
import { JJLogo } from '@/components/JJLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Collection', href: '/products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { isNightMode, toggleTheme } = useLighting();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    event.preventDefault();
    const scroll = () => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    if (location.pathname !== '/') { navigate('/'); window.setTimeout(scroll, 120); } else scroll();
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--lighting-border)]/60 bg-[var(--lighting-bg)]/80 backdrop-blur-xl transition-colors duration-700">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <Link to="/" aria-label="JJ A Lighting Co. home" className="text-[var(--lighting-text)] transition-colors duration-700"><JJLogo className="h-14 w-auto sm:h-16" /></Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => link.href.startsWith('#') ? <a key={link.label} href={link.href} onClick={(event) => handleAnchor(event, link.href)} className="label-uppercase text-[var(--lighting-muted)] transition-colors hover:text-[var(--lighting-text)]">{link.label}</a> : <Link key={link.label} to={link.href} className="label-uppercase text-[var(--lighting-muted)] transition-colors hover:text-[var(--lighting-text)]">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleTheme} aria-label={isNightMode ? 'Switch to day mode' : 'Switch to night mode'} className="group flex items-center gap-2 text-[var(--lighting-muted)] transition-colors hover:text-[var(--lighting-text)]">
            {isNightMode ? <Moon size={15} strokeWidth={1.5} /> : <Sun size={15} strokeWidth={1.5} />}<span className="hidden label-uppercase sm:inline">{isNightMode ? 'Night' : 'Day'}</span>
          </button>
          <button type="button" aria-label="Toggle navigation" className="p-2 text-[var(--lighting-text)] lg:hidden" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {menuOpen && <nav className="border-t border-[var(--lighting-border)] bg-[var(--lighting-bg)] px-6 py-5 lg:hidden">{navLinks.map((link) => link.href.startsWith('#') ? <a key={link.label} href={link.href} onClick={(event) => handleAnchor(event, link.href)} className="block py-3 label-uppercase text-[var(--lighting-muted)]">{link.label}</a> : <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} className="block py-3 label-uppercase text-[var(--lighting-muted)]">{link.label}</Link>)}</nav>}
    </header>
  );
}