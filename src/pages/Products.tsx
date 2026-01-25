import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Products } from '@/components/sections/Products';
import { Contact } from '@/components/sections/Contact';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
