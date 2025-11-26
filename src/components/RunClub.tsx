import { ArrowRight } from 'lucide-react';

const RunClub = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="runclub" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-gold mb-6">Phylos Run Club</h2>
          <p className="text-3xl md:text-4xl text-gray-800 italic font-light">"Every step is a lesson in perseverance"</p>
          <div className="w-32 h-1 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Weekly Programs Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gold mb-16">Weekly Programs</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mindful Morning Runs */}
            <div className="overflow-hidden rounded-lg">
              <div className="rounded-lg overflow-hidden mb-6 h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg)',
                }}>
              </div>
              <div className="bg-white">
                <h3 className="text-3xl font-bold text-gold mb-6">Mindful Morning Runs</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Focus</p>
                    <p className="text-gray-700 leading-relaxed">Breath awareness and present-moment consciousness</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Distance</p>
                    <p className="text-gray-700 leading-relaxed">Varies based on ability</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Cool-Down</p>
                    <p className="text-gray-700 leading-relaxed">Philosophy discussion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunset Philosophy Runs */}
            <div className="overflow-hidden rounded-lg">
              <div className="rounded-lg overflow-hidden mb-6 h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg)',
                }}>
              </div>
              <div className="bg-white">
                <h3 className="text-3xl font-bold text-gold mb-6">Sunset Philosophy Runs</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Focus</p>
                    <p className="text-gray-700 leading-relaxed">Contemplative group runs exploring life principles</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Terrain</p>
                    <p className="text-gray-700 leading-relaxed">Mixed terrain for varied physical and mental challenges</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">Post-Run</p>
                    <p className="text-gray-700 leading-relaxed">Wisdom circles and healthy refreshments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gold rounded-lg p-16 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Run with Purpose?</h3>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-gold px-12 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-3 font-bold text-lg"
          >
            <span>Get Started</span>
            <ArrowRight size={22} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default RunClub;
