import { Phone, Star, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8005398/pexels-photo-8005398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0 Star Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="font-semibold">90 Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="font-semibold">Middlesex County & Nearby</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pressure Washing in New Jersey Done Right
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            House washing, siding cleaning, patios, decks, driveways, and exterior cleaning with 5-star service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:7329256354"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Call Now (732) 925-6354
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Get Free Quote
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-300 px-6 py-3 rounded-full text-lg font-semibold border border-green-400/30">
            <CheckCircle2 className="w-6 h-6" />
            110% Satisfaction Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
