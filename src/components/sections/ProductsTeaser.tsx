import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ProductsTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-sm p-10 lg:p-14">
            <span className="label-uppercase text-primary mb-4 block">Products</span>
            <h2 className="heading-section text-foreground mb-6">Explore Our Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              A brochure-style collection of premium architectural lighting solutions—built for specification, not pricing.
            </p>
            <div className="mt-10">
              <Button asChild variant="luxury">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
