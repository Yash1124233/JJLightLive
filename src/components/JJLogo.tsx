import type { SVGProps } from 'react';

type JJLogoProps = SVGProps<SVGSVGElement> & {
  variant?: 'full' | 'compact';
  lit?: boolean;
};

export function JJLogo({ variant = 'full', lit = true, className, ...props }: JJLogoProps) {
  return (
    <svg
      viewBox={variant === 'compact' ? '0 0 150 72' : '0 0 150 78'}
      role="img"
      aria-label="JJ A Lighting Co."
      className={className}
      {...props}
    >
      <path d="M75 4c0 11-10 15-10 25 0 7 5 11 10 11 6 0 10-4 10-10 0-6-4-10-10-10" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="75" cy="49" r="2.7" fill="var(--lighting-glow, #FFB35A)" className={lit ? 'animate-mark-pulse' : undefined} style={lit ? { filter: 'drop-shadow(0 0 8px rgba(255, 179, 90, 0.8))' } : undefined} />
      <text x="75" y="66" textAnchor="middle" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" letterSpacing="4">JJ</text>
      {variant === 'full' && <text x="75" y="76" textAnchor="middle" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="5.2" fontWeight="600" letterSpacing="1.1">A LIGHTING CO.</text>}
    </svg>
  );
}