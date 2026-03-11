import { Phone, MessageSquare } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7031589/pexels-photo-7031589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Make Your Home Look New Again?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Get a free quote today and see why 90+ homeowners trust us with their pressure washing needs
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="tel:7329256354"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <Phone className="w-7 h-7" />
            Call Now (732) 925-6354
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-white/20"
          >
            <MessageSquare className="w-7 h-7" />
            Request a Free Quote
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Available 7 Days a Week</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Fast Response Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Free Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
