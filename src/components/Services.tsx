import { Home, Square, Wind, TreeDeciduous, Car, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'House Washing',
    description: 'Professional exterior house washing to remove dirt, mildew, and grime. Make your home look brand new again.',
    image: 'https://images.pexels.com/photos/8005398/pexels-photo-8005398.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Square,
    title: 'Siding Cleaning',
    description: 'Deep cleaning of vinyl, wood, and composite siding. Restore your siding\'s original beauty and protect your investment.',
    image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Wind,
    title: 'Patio Cleaning',
    description: 'Remove years of buildup from concrete, stone, and brick patios. Perfect for outdoor entertaining spaces.',
    image: 'https://images.pexels.com/photos/7031415/pexels-photo-7031415.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: TreeDeciduous,
    title: 'Deck Cleaning',
    description: 'Gentle yet effective deck cleaning that preserves wood integrity while removing dirt, algae, and stains.',
    image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Car,
    title: 'Driveway Cleaning',
    description: 'High-pressure driveway cleaning that eliminates oil stains, tire marks, and years of accumulated grime.',
    image: 'https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Sparkles,
    title: 'Exterior Surface Cleaning',
    description: 'Comprehensive cleaning for fences, walkways, pool areas, and any exterior surface that needs attention.',
    image: 'https://images.pexels.com/photos/6195267/pexels-photo-6195267.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional pressure washing services for every exterior cleaning need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
