import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="heading-section text-foreground mb-12">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="leading-relaxed">
                JJ LIGHT ("we," "us," or "our") operates the website. This page informs you of our policies 
                regarding the collection, use, and disclosure of personal data when you use our Service and 
                the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Collection and Use</h2>
              <p className="leading-relaxed">
                We collect several different types of information for various purposes to provide and improve 
                our Service to you.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Personal Data: While using our Service, we may ask you to provide us with certain 
                personally identifiable information that can be used to contact or identify you ("Personal Data"). 
                This may include, but is not limited to:</li>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Data</h2>
              <p className="leading-relaxed mb-4">JJ LIGHT uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer care and support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <span className="font-semibold">JJ LIGHT</span><br />
                Email: jjlight.in@gmail.com<br />
                Website: www.jjlight.in
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
