import { Lightbulb, Building2, Paintbrush, Home, Building } from 'lucide-react';

const solutions = [
  {
    icon: Lightbulb,
    title: 'Decorative Lighting',
    description: 'Statement pieces that blend artistry with illumination, creating focal points in any space.',
  },
  {
    icon: Building2,
    title: 'Architectural Lighting',
    description: 'Integrated solutions that enhance building aesthetics while providing functional illumination.',
  },
  {
    icon: Paintbrush,
    title: 'Custom Installations',
    description: 'Bespoke lighting designs crafted to your unique vision and spatial requirements.',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    description: 'Luxury lighting for private residences, from intimate spaces to grand estates.',
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    description: 'Hotels, offices, and showrooms transformed through strategic lighting design.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="label-uppercase text-primary mb-4 block">Our Solutions</span>
          <h2 className="heading-section text-foreground mb-6">
            Lighting for Every
            <br />
            <span className="italic">Vision</span>
          </h2>
          <p className="text-muted-foreground">
            From concept to installation, we deliver comprehensive lighting solutions 
            tailored to architects, designers, and discerning clients.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="luxury-card group p-8 lg:p-10 rounded-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glow-effect" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-subsection text-foreground mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
