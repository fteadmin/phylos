import { Check } from 'lucide-react';

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Membership</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* All Membership Cards */}
        <div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General Membership Card */}
            <div className="bg-white border-2 border-gold rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-bold text-gold mb-4">General Membership</h4>
              <div className="mb-6">
                <p className="text-3xl sm:text-4xl font-bold text-gold mb-2">$20</p>
                <p className="text-sm sm:text-base text-gray-600">Annual membership</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">Access to all Phylos activities</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-700">Discount price to events</span>
                </li>
              </ul>
              <button className="w-full bg-gold text-white py-3 rounded-lg font-bold hover:bg-gold-700 transition-all duration-200 text-sm sm:text-base">
                Join Now
              </button>
            </div>

            {/* Health and Wellness Influencer */}
            <div className="bg-white border-2 border-gold rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gold text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">Business Partner</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gold mb-4 mt-4">Health and Wellness Influencer</h4>
              <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
                Starter package for those who want to start their health and wellness business. Branding and establishing of a business and business co.
              </p>
              <button className="w-full bg-gold text-white py-3 rounded-lg font-bold hover:bg-gold-700 transition-all duration-200 text-sm sm:text-base">
                Learn More
              </button>
            </div>

            {/* Global Ambassador */}
            <div className="bg-white border-2 border-gold rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gold text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">Business Partner</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gold mb-4 mt-4">Global Ambassador</h4>
              <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
                Having multiple brand partnerships, multi layer global level of health and wellness businesses.
              </p>
              <button className="w-full bg-gold text-white py-3 rounded-lg font-bold hover:bg-gold-700 transition-all duration-200 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
