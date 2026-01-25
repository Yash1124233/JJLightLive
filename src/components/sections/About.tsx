export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <span className="label-uppercase text-primary mb-4 block">About JJ LIGHT</span>
            <h2 className="heading-section text-foreground mb-8">
              Where Architecture
              <br />
              <span className="italic">Meets Illumination</span>
            </h2>
            <div className="line-separator mb-8" />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="body-large text-muted-foreground">
              At JJ LIGHT, we believe lighting is not just about illumination—it's about creating experiences. 
              For over a decade, we've been crafting bespoke lighting solutions that transform spaces into 
              living works of art.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of designers and engineers work at the intersection of technology and artistry, 
              creating fixtures that are as much sculptural pieces as they are functional elements. 
              Every project is an opportunity to push boundaries, to explore new materials, and to 
              redefine what lighting can achieve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From luxury residences to iconic commercial spaces, our commitment remains the same: 
              uncompromising quality, innovative design, and meticulous attention to detail.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-border">
              <div>
                <span className="font-serif text-4xl lg:text-5xl font-light text-foreground">10+</span>
                <p className="label-uppercase text-muted-foreground mt-2">Years</p>
              </div>
              <div>
                <span className="font-serif text-4xl lg:text-5xl font-light text-foreground">500+</span>
                <p className="label-uppercase text-muted-foreground mt-2">Projects</p>
              </div>
              <div>
                <span className="font-serif text-4xl lg:text-5xl font-light text-foreground">50+</span>
                <p className="label-uppercase text-muted-foreground mt-2">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
