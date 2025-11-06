import { Download, Eye, Share2, FileText } from 'lucide-react';

const PitchDeck = () => {
  const decks = [
    {
      id: 1,
      title: 'Phylos Overview',
      description: 'Comprehensive introduction to Phylos platform, vision, and business model.',
      slides: 24,
      date: 'October 2025',
      size: '12.5 MB',
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Investment Opportunity',
      description: 'Detailed financial projections, market analysis, and growth strategy.',
      slides: 35,
      date: 'October 2025',
      size: '18.3 MB',
      format: 'PDF',
    },
    {
      id: 3,
      title: 'Product Roadmap',
      description: 'Our vision for the next 12-24 months of feature development and expansion.',
      slides: 18,
      date: 'October 2025',
      size: '9.7 MB',
      format: 'PDF',
    },
  ];

  return (
    <section id="pitch" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Pitch Deck</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive presentations showcasing the Phylos vision, opportunity, and roadmap
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {decks.map((deck) => (
            <div
              key={deck.id}
              className="border-2 border-gold/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-gold transition-all duration-300"
            >
              {/* Header with icon */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-6 border-b border-gold/20 flex items-center justify-center h-24">
                <FileText size={48} className="text-gold" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{deck.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{deck.description}</p>

                {/* Meta info */}
                <div className="bg-gold/5 rounded-lg p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Slides:</span>
                    <span className="font-bold text-gold">{deck.slides}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Updated:</span>
                    <span className="font-bold text-gray-900">{deck.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">File Size:</span>
                    <span className="font-bold text-gray-900">{deck.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-bold text-gray-900">{deck.format}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gold text-white py-3 rounded-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  <button className="w-full border-2 border-gold text-gold py-2 rounded-lg hover:bg-gold hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 font-medium">
                    <Eye size={18} />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-8 border-2 border-gold/20 mb-8">
          <h3 className="text-2xl font-bold text-gold mb-6">Request Access to Additional Materials</h3>
          <p className="text-gray-700 mb-6">
            Interested in detailed market research, financial models, or technical documentation? Contact our business team to request access.
          </p>
          <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-gold-700 transition-colors duration-200 flex items-center space-x-2 font-bold">
            <Share2 size={18} />
            <span>Request Materials</span>
          </button>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-gold mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="border-2 border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold transition-colors duration-200">
              <summary className="font-bold text-gray-900 flex items-center justify-between">
                <span>How do I share the pitch deck with my team?</span>
                <span className="text-gold">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Once downloaded, you can share the PDF file via email, cloud storage, or collaboration platforms. We recommend viewing in full-screen mode for best results.
              </p>
            </details>

            <details className="border-2 border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold transition-colors duration-200">
              <summary className="font-bold text-gray-900 flex items-center justify-between">
                <span>Are there speaker notes available?</span>
                <span className="text-gold">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Yes! Speaker notes are included in the presentation files. Contact our business team for a version optimized for different audience types.
              </p>
            </details>

            <details className="border-2 border-gold/20 rounded-lg p-6 cursor-pointer hover:border-gold transition-colors duration-200">
              <summary className="font-bold text-gray-900 flex items-center justify-between">
                <span>Can I request a custom presentation?</span>
                <span className="text-gold">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Absolutely! Our team can prepare customized presentations tailored to specific stakeholders, industries, or use cases. Contact us to discuss your needs.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchDeck;
