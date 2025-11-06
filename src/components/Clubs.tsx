import { Users, MapPin, Zap, ExternalLink } from 'lucide-react';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: 'Zen Movement Club',
      location: 'San Francisco, CA',
      members: 342,
      focus: 'Mindfulness & Meditation',
      description: 'A sanctuary for exploring movement through the lens of Zen philosophy and contemplative practice.',
      image: 'bg-gradient-to-br from-blue-100 to-blue-50',
      members_list: ['Alex', 'Jordan', 'Casey', 'Morgan', '+338'],
    },
    {
      id: 2,
      name: 'Athletic Philosophy Squad',
      location: 'New York, NY',
      members: 567,
      focus: 'Sports & Performance',
      description: 'Dedicated to understanding the philosophical foundations of athletic excellence and competition.',
      image: 'bg-gradient-to-br from-red-100 to-red-50',
      members_list: ['Sam', 'Taylor', 'Riley', 'Jamie', '+563'],
    },
    {
      id: 3,
      name: 'Wellness Warriors',
      location: 'Los Angeles, CA',
      members: 289,
      focus: 'Health & Beauty',
      description: 'Connect movement, wellness, and the philosophy of holistic health and natural beauty.',
      image: 'bg-gradient-to-br from-green-100 to-green-50',
      members_list: ['Alex', 'Jordan', 'Morgan', 'Casey', '+285'],
    },
    {
      id: 4,
      name: 'Urban Dance Philosophy',
      location: 'Chicago, IL',
      members: 201,
      focus: 'Dance & Expression',
      description: 'Explore the intersection of urban culture, dance, and philosophical self-expression.',
      image: 'bg-gradient-to-br from-purple-100 to-purple-50',
      members_list: ['Quinn', 'Blake', 'Avery', 'Jordan', '+197'],
    },
    {
      id: 5,
      name: 'Nature Movement Collective',
      location: 'Boulder, CO',
      members: 178,
      focus: 'Outdoor & Nature',
      description: 'Embrace movement in nature and the philosophical connection between body and environment.',
      image: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
      members_list: ['River', 'Dakota', 'Phoenix', 'Sage', '+174'],
    },
    {
      id: 6,
      name: 'Digital Age Movers',
      location: 'Seattle, WA',
      members: 421,
      focus: 'Virtual & Community',
      description: 'Connect globally through online movement sessions and philosophical discussions.',
      image: 'bg-gradient-to-br from-indigo-100 to-indigo-50',
      members_list: ['Morgan', 'Casey', 'Alex', 'Jordan', '+417'],
    },
  ];

  return (
    <section id="clubs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Our Clubs & Communities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join local and global communities united by movement and philosophy
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="border-2 border-gold/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-gold transition-all duration-300"
            >
              {/* Image/Gradient Header */}
              <div className={`h-32 ${club.image} flex items-center justify-center`}>
                <Zap size={40} className="text-gold opacity-30" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{club.name}</h3>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin size={16} className="text-gold mr-2" />
                  {club.location}
                </div>

                <p className="text-gray-600 text-sm mb-4">{club.description}</p>

                <div className="bg-gold/5 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-gray-700">Focus: {club.focus}</span>
                    <span className="text-lg font-bold text-gold">{club.members}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="text-gold mr-2" />
                    <span>Active Members</span>
                  </div>
                </div>

                {/* Members */}
                <div className="flex items-center space-x-2 mb-4">
                  {club.members_list.slice(0, 4).map((member, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-xs font-bold"
                    >
                      {member[0]}
                    </div>
                  ))}
                  {club.members_list[4] && (
                    <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">
                      {club.members_list[4]}
                    </div>
                  )}
                </div>

                <button className="w-full border-2 border-gold text-gold py-2 rounded-lg hover:bg-gold hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 font-medium">
                  <span>Join Club</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Creating a Club */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-8 border-2 border-gold/20 text-center">
          <h3 className="text-3xl font-bold text-gold mb-4">Want to start your own club?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Create a community around your unique philosophy and movement passion. Connect with like-minded practitioners worldwide.
          </p>
          <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-gold-700 transition-colors duration-200 font-bold">
            Create a Club
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
