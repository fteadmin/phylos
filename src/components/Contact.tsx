import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Start Your Journey
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discover the philosophy within your movement? Let's connect and begin your transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gold mb-6">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're an athlete looking to enhance performance, someone seeking wellness, or curious about the philosophy of movement, we're here to guide you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gold">Email</p>
                  <a href="mailto:contact@phylos.fit" className="text-gray-600 hover:text-gold transition-colors">
                    contact@phylos.fit
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gold">Phone</p>
                  <a href="tel:213-397-8908" className="text-gray-600 hover:text-gold transition-colors">
                    213-397-8908
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gold">Location</p>
                  <p className="text-gray-600">Available Worldwide</p>
                </div>
              </div>
            </div>

          
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your journey and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white py-4 rounded-xl hover:bg-gold-600 transition-all duration-300 flex items-center justify-center space-x-2 group font-semibold"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;