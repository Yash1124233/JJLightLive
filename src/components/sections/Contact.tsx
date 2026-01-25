import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const projectTypes = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Custom Installation',
  'Consultation',
];

export function Contact() {
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form - trim whitespace to check properly
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    // Create WhatsApp message with form data
    const message = `Hello! I have a new inquiry from your website:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Project Type:* ${selectedType || 'Not specified'}
*Message:* ${formData.message}`;

    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/919574699881?text=${encodeURIComponent(message)}`;
    
    // Show success message before redirecting
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedType('');
    
    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setSubmitStatus('idle');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <span className="label-uppercase text-primary mb-4 block">Get in Touch</span>
            <h2 className="heading-section text-foreground mb-8">
              Start Your
              <br />
              <span className="italic">Project</span>
            </h2>
            <div className="line-separator mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-12">
              Whether you're an architect, designer, or homeowner with a vision, 
              we'd love to hear from you. Let's create something extraordinary together.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Visit Our Showroom</p>
                  <p className="text-muted-foreground text-sm">
                    123 Design District, Creative Avenue<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Email Us</p>
                  <a href="mailto:jjlight.in@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    jjlight.in@gmail.com
                  </a>  
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 95746 99881
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="label-uppercase text-muted-foreground mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/919574699881?text=Hello%20JJ%20Light!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 lg:p-10 rounded-sm border border-border">
            <h3 className="heading-subsection text-foreground mb-8">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-uppercase text-muted-foreground mb-2 block">Name</label>
                  <Input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="label-uppercase text-muted-foreground mb-2 block">Email</label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="label-uppercase text-muted-foreground mb-2 block">Phone</label>
                <Input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 00000 00000" 
                  className="bg-background border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="label-uppercase text-muted-foreground mb-3 block">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-sm text-sm transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border text-muted-foreground hover:border-primary'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label-uppercase text-muted-foreground mb-2 block">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                  ✓ Thank you! Your inquiry has been submitted successfully. We'll contact you via WhatsApp soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                  ✗ Please make sure to fill in: Name, Email, Phone, and Message fields.
                </div>
              )}

              <Button 
                variant="luxury" 
                className="w-full" 
                size="lg"
                type="submit"
              >
                Send Inquiry via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
