// JSX runtime handles React imports automatically
import { Brain, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
  <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            What's in a Name?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Movement isn't just physical. It's a source of insights, principles, and a way of life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Name Explanation */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-4">Phylos</h3>
              <p className="text-gray-700 leading-relaxed">
                A play on "philosophy" - the love of wisdom. We believe that true understanding comes not just from thinking, but from experiencing.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-4">Body Movement</h3>
              <p className="text-gray-700 leading-relaxed">
                Our holistic approach encompasses every aspect of movement, from top to bottom, creating a comprehensive understanding of embodied wisdom.
              </p>
            </div>
          </div>

          {/* Right Column - Platform Benefits */}
          <div className="space-y-8">
            <div className="bg-gold text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Dynamic Platform</h3>
              <p className="leading-relaxed opacity-90">
                Connecting wisdom with physical action. We bridge the gap between understanding and embodiment, theory and practice.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-4">Beyond Physical Activity</h3>
              <p className="text-gray-700 leading-relaxed">
                Our platform reveals the inherent wisdom found through physical activity, unlocking improvements in athletics, wellness, and beauty simultaneously.
              </p>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gold mb-3">Discovery</h4>
            <p className="text-gray-600 leading-relaxed">
              Unlock hidden potential within your movement practice and daily activities.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gold mb-3">Embodiment</h4>
            <p className="text-gray-600 leading-relaxed">
              Experience wisdom physically, making abstract concepts tangible and actionable.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gold mb-3">Integration</h4>
            <p className="text-gray-600 leading-relaxed">
              Connect mind and body in a harmonious relationship that enhances all aspects of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;