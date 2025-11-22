// JSX runtime handles React imports automatically
import { Briefcase, Users, Dumbbell } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for business growth and wellness partnerships.
          </p>
        </div>

        {/* Business Incubators Section */}
        <div className="mb-20">
          <div className="flex items-center mb-10">
            <Briefcase size={40} className="text-gold mr-4" />
            <h3 className="text-3xl font-bold text-gold">Business Incubators</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Health Wellness Influencers */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gold mb-4">Health & Wellness Influencers</h4>
              <p className="text-gray-700 leading-relaxed">
                Support for emerging health and wellness influencers looking to establish and grow their personal brand and business.
              </p>
            </div>

            {/* Health Wellness Global Ambassador */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gold mb-4">Health & Wellness Global Ambassador</h4>
              <p className="text-gray-700 leading-relaxed">
                Premium tier for established ambassadors with multi-layer global health and wellness business partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Partnerships Section */}
        <div>
          <div className="flex items-center mb-10">
            <Briefcase size={40} className="text-gold mr-4" />
            <h3 className="text-3xl font-bold text-gold">Brand Partnership Services</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-6">
              <Dumbbell className="text-white" size={24} />
            </div>
            <h4 className="text-2xl font-bold text-gold mb-4">Fitness Trainer</h4>
            <p className="text-gray-700 leading-relaxed">
              Professional fitness training services delivered by our network of certified trainers and wellness experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;