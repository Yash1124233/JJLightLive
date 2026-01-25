import { Gem, Layers, Users, Wrench, Award } from 'lucide-react';

const reasons = [
  {
    icon: Gem,
    title: 'Custom-Built Designs',
    description: 'Every piece tailored to your unique space and vision.',
  },
  {
    icon: Layers,
    title: 'Premium Materials',
    description: 'Only the finest glass, metals, and finishes.',
  },
  {
    icon: Users,
    title: 'Architectural Expertise',
    description: 'Deep understanding of space, light, and design.',
  },
  {
    icon: Award,
    title: 'Trusted by Professionals',
    description: 'Preferred partner of leading architects and designers.',
  },
  {
    icon: Wrench,
    title: 'End-to-End Service',
    description: 'From concept through installation and beyond.',
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="label-uppercase text-primary mb-4 block">Why JJ LIGHT</span>
          <h2 className="heading-section text-foreground mb-6">
            The JJ LIGHT
            <br />
            <span className="italic">Difference</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-500">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-light text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
