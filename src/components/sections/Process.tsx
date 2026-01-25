import { Eye, PenTool, Cog, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Eye,
    title: 'Understanding the Space',
    description: 'We begin by immersing ourselves in your vision, studying the architecture, and understanding how light will interact with every surface.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Concept',
    description: 'Our designers create detailed concepts, exploring materials, forms, and lighting effects that align perfectly with your aesthetic.',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Custom Manufacturing',
    description: 'Every piece is handcrafted in our atelier using premium materials, with rigorous quality control at every stage.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Installation & Execution',
    description: 'Our expert team ensures flawless installation, fine-tuning every detail to achieve the perfect illumination.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="label-uppercase text-primary mb-4 block">How We Work</span>
          <h2 className="heading-section text-foreground mb-6">
            Our Design
            <br />
            <span className="italic">Process</span>
          </h2>
          <p className="text-muted-foreground">
            A meticulous journey from concept to completion, ensuring every 
            project exceeds expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-5xl font-light text-champagne/40 group-hover:text-champagne transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="heading-subsection text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
