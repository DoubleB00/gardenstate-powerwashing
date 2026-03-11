import { ArrowRight } from 'lucide-react';

const projects = [
  {
    before: 'https://images.pexels.com/photos/8864477/pexels-photo-8864477.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/8864479/pexels-photo-8864479.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'House Siding'
  },
  {
    before: 'https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/7031589/pexels-photo-7031589.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Driveway'
  },
  {
    before: 'https://images.pexels.com/photos/7031415/pexels-photo-7031415.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Patio'
  },
  {
    before: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Deck'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the dramatic transformations we deliver to homes across Middlesex County
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={project.before}
                    alt={`Before ${project.title}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={project.after}
                    alt={`After ${project.title}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    After
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{project.title} Cleaning</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/gardenstatepowerwashingllc?igsh=dWV6MzRyMHNtZXJi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            View More on Instagram
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
