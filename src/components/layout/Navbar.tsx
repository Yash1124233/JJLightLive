import { useState, type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLighting } from '@/components/lighting/LightingContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Collection', href: '/products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 118 64" aria-hidden="true" className="h-12 w-[88px] sm:h-14 sm:w-[104px]">
      <path d="M36 5c0 10-8 13-8 21 0 6 4 9 8 9 5 0 8-3 8-8 0-5-3-8-8-8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="36" cy="40" r="2.2" fill="var(--lighting-glow)" className="animate-mark-pulse" />
      <path d="M23 50v9M27 50v9M23 50h4M27 50h4M39 50v9M43 50v9M39 50h4M43 50h4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="52" y="40" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" letterSpacing="3">JJ</text>
      <text x="52" y="53" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="5.5" letterSpacing="1.15">A LIGHTING CO.</text>
    </svg>
  );
}

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
        <Link to="/" aria-label="JJ Light home" className="text-[var(--lighting-text)] transition-colors duration-700"><BrandMark /></Link>
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