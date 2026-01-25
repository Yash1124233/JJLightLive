import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-lighting.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury architectural lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/20 blur-[120px] animate-glow-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="label-uppercase text-charcoal-light mb-6 block opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Architectural Lighting Design
          </span>
          
          <h1 className="heading-display text-charcoal mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Crafting Light.
            <br />
            <span className="italic">Defining Spaces.</span>
          </h1>

          <p className="body-large text-charcoal-light max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Custom-designed lighting solutions for luxury interiors and architectural spaces. 
            Where design meets illumination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" asChild>
              <a href="#projects">View Our Work</a>
            </Button>
            <Button variant="heroOutline" className="border-charcoal/40 hover:border-charcoal" asChild>
              <a href="#brochure">Download Brochure</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="label-uppercase text-xs">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
