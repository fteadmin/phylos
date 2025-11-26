import { Lightbulb } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Our Vision & Mission</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Lightbulb size={48} className="text-gold mr-4" />
                <h3 className="text-4xl font-bold text-gold">Our Vision & Mission</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-gold mb-3">Vision</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To create a global community where physical movement is understood as a profound expression of philosophy, connecting the mind, body, and spirit through intentional practice and deeper awareness.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gold mb-3">Mission</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower individuals through accessible platforms, expert guidance, and vibrant communities that unlock the transformative power of movement—bridging athletics, wellness, and beauty through philosophical wisdom.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-96 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg)',
              }}>
            </div>
          </div>
        </div>

        {/* Core Values */}
        {/* <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gold mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Authenticity</h4>
              <p className="text-gray-600">We believe in genuine movement that reflects your true self.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h4>
              <p className="text-gray-600">Philosophy and movement are for everyone, regardless of background.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600">Stronger together—we celebrate collective growth and shared wisdom.</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default VisionMission;
