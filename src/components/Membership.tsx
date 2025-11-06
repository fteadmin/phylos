import { Check } from 'lucide-react';

const Membership = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for exploring your philosophy',
      features: [
        'Access to basic movement guides',
        'Monthly community events',
        'Email support',
        'Exclusive newsletter',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$29.99',
      period: '/month',
      description: 'For dedicated practitioners',
      features: [
        'All Starter features',
        'Personalized coaching sessions',
        'Priority support',
        'Advanced video library',
        'Club membership included',
        'Early access to events',
      ],
      cta: 'Choose Premium',
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '$59.99',
      period: '/month',
      description: 'For movement masters',
      features: [
        'All Premium features',
        'VIP event access',
        'Monthly 1-on-1 sessions',
        'Exclusive workshops',
        'Networking opportunities',
        'Custom training programs',
      ],
      cta: 'Become Elite',
      highlighted: false,
    },
  ];

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Membership Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect membership to unlock your philosophy journey
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gold text-white shadow-2xl scale-105 border-2 border-gold'
                  : 'bg-white border-2 border-gold/20 text-gray-900'
              }`}
            >
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gold'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlighted ? 'text-gold-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={tier.highlighted ? 'text-gold-100' : 'text-gray-600'}>{tier.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-white text-gold hover:bg-gray-100'
                      : 'bg-gold text-white hover:bg-gold-700'
                  }`}
                >
                  {tier.cta}
                </button>

                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check size={20} className={`mr-3 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-gold'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gold/10 rounded-lg p-8 border border-gold/20">
          <h3 className="text-2xl font-bold text-gold mb-4">Why choose us?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start">
              <Check size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <p>Flexible plans that scale with your journey</p>
            </div>
            <div className="flex items-start">
              <Check size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <p>Cancel anytime, no long-term commitment</p>
            </div>
            <div className="flex items-start">
              <Check size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <p>Expert coaches and community support</p>
            </div>
            <div className="flex items-start">
              <Check size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
              <p>Continuous updates and new content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
