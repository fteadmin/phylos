// JSX runtime handles React imports automatically
import { Trophy, Leaf, Sparkles, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Trophy,
      title: 'Athletics',
      description: 'Enhance performance through mindful movement and philosophical understanding of your body\'s capabilities.',
      features: ['Performance optimization', 'Mindful training techniques', 'Mental resilience building', 'Movement efficiency']
    },
    {
      icon: Leaf,
      title: 'Wellness',
      description: 'Improve overall health and balance by understanding the deeper connections between mind and body.',
      features: ['Holistic health approach', 'Stress reduction techniques', 'Energy optimization', 'Balance restoration']
    },
    {
      icon: Sparkles,
      title: 'Beauty',
      description: 'Cultivate natural radiance from within through movement that aligns your inner and outer self.',
      features: ['Inner confidence building', 'Posture enhancement', 'Natural grace development', 'Authentic self-expression']
    },
    {
      icon: Lightbulb,
      title: 'Wisdom',
      description: 'Develop deeper understanding of self through the philosophy embedded in every movement.',
      features: ['Self-awareness cultivation', 'Philosophical insights', 'Personal growth guidance', 'Life principle application']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Core Benefits
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience transformation through our comprehensive approach to movement and philosophy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <service.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action-Oriented Approach */}
        <div className="bg-gold-800 text-white p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Action-Oriented Approach</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Philosophy isn't abstract with Phylos. It's experienced and embodied through movement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Concept</h4>
              <p className="text-gray-300 leading-relaxed">
                Understanding the philosophy behind movement and its deeper meanings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Practice</h4>
              <p className="text-gray-300 leading-relaxed">
                Applying wisdom through intentional, mindful movement practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Transformation</h4>
              <p className="text-gray-300 leading-relaxed">
                Experiencing profound benefits in all aspects of life and being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;