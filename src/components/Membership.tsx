import { Check } from 'lucide-react';

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Membership</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Annual Membership Card */}
        <div className="flex justify-center">
          <div className="bg-white border-2 border-gold rounded-xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
            <h4 className="text-2xl sm:text-3xl font-bold text-gold mb-6 text-center">Annual Membership</h4>
            <div className="mb-8 text-center">
              <p className="text-5xl sm:text-6xl font-bold text-gold mb-2">$20</p>
              <p className="text-base sm:text-lg text-gray-600">Annual membership</p>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <Check size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg text-gray-700">Access to all Phylos activities</span>
              </li>
              <li className="flex items-start">
                <Check size={24} className="text-gold mr-4 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg text-gray-700">Discount price to events</span>
              </li>
            </ul>
            <button className="w-full bg-gold text-white py-3 sm:py-4 rounded-lg font-bold hover:bg-gold-700 transition-all duration-200 text-base sm:text-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
