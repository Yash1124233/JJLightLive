import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brochureCover from '@/assets/brochure-cover.jpg';

export function Brochure() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochures/JJ_LIGHT_2025_BROCHURE.pdf';
    link.download = 'JJ_LIGHT_2025_BROCHURE.pdf';
    link.click();
  };

  return (
    <section id="brochure" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-sm bg-foreground text-primary-foreground p-10 lg:p-16">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-champagne/10 blur-[150px] pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="label-uppercase text-champagne mb-4 block">2025 Collection</span>
              <h2 className="heading-section mb-6">
                JJ LIGHT
                <br />
                <span className="italic">Brochure</span>
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8 max-w-md">
                Explore our complete collection of decorative and architectural lighting solutions. 
                From concept to specifications, everything you need in one comprehensive guide.
              </p>
              <Button 
                variant="heroOutline" 
                className="border-champagne/40 text-primary-foreground hover:bg-champagne/10"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>

            {/* Brochure Preview */}
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto aspect-[3/4] rounded-sm shadow-2xl overflow-hidden group cursor-pointer" onClick={handleDownload}>
                <img 
                  src={brochureCover} 
                  alt="JJ Light 2025 Brochure Cover" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-primary-foreground font-medium flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Click to Download
                  </span>
                </div>
              </div>
              {/* Shadow/Reflection */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-background/20 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
