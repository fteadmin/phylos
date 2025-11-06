import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Introduction to Movement Philosophy',
      date: 'November 15, 2025',
      time: '6:00 PM - 7:30 PM',
      location: 'Virtual',
      attendees: 245,
      description: 'Explore the fundamentals of how movement connects with philosophy.',
      type: 'Workshop',
    },
    {
      id: 2,
      title: 'Advanced Embodiment Masterclass',
      date: 'November 22, 2025',
      time: '5:00 PM - 8:00 PM',
      location: 'New York, NY',
      attendees: 89,
      description: 'Deep dive into embodiment techniques with master instructors.',
      type: 'Masterclass',
    },
    {
      id: 3,
      title: 'Community Movement Gathering',
      date: 'December 1, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Los Angeles, CA',
      attendees: 156,
      description: 'Join fellow practitioners in a celebration of movement and community.',
      type: 'Gathering',
    },
    {
      id: 4,
      title: 'Philosophy & Athletics Panel',
      date: 'December 10, 2025',
      time: '7:00 PM - 8:30 PM',
      location: 'Virtual',
      attendees: 512,
      description: 'Expert panel discussing the intersection of philosophy and competitive sports.',
      type: 'Panel Discussion',
    },
    {
      id: 5,
      title: 'Wellness Retreat Weekend',
      date: 'January 10-12, 2026',
      time: 'All Day',
      location: 'Sedona, Arizona',
      attendees: 45,
      description: 'Immersive retreat combining movement, philosophy, and wellness.',
      type: 'Retreat',
    },
    {
      id: 6,
      title: 'Beauty of Movement Exhibition',
      date: 'January 25, 2026',
      time: '6:00 PM - 10:00 PM',
      location: 'San Francisco, CA',
      attendees: 200,
      description: 'Visual celebration of movement art through photography and performance.',
      type: 'Exhibition',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gold mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community for workshops, masterclasses, and gatherings around the world
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="border-2 border-gold/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-gold transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-4 border-b border-gold/20">
                <span className="inline-block bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                  {event.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="text-gold mr-3 flex-shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="text-gold mr-3 flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={18} className="text-gold mr-3 flex-shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users size={18} className="text-gold mr-3 flex-shrink-0" />
                    <span className="text-sm">{event.attendees} registered</span>
                  </div>
                </div>

                <button className="w-full bg-gold text-white py-2 rounded-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gold text-white px-8 py-4 rounded-full hover:bg-gold-700 transition-colors duration-200 text-lg font-bold">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
