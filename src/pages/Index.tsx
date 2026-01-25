import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Solutions } from '@/components/sections/Solutions';
import { ProductsTeaser } from '@/components/sections/ProductsTeaser';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { Brochure } from '@/components/sections/Brochure';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <ProductsTeaser />
        <Projects />
        <Process />
        <Brochure />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
