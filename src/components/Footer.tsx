import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Garden State Power Washing LLC</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional pressure washing services in Middlesex County and nearby areas.
              We take on every job at the highest level of importance and expertise to make sure
              every customer is left 110% satisfied.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gardenstatepowerwashingllc?igsh=dWV6MzRyMHNtZXJi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:7329256354" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>(732) 925-6354</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Middlesex County & Nearby Areas</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Open · Closes 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Garden State Power Washing LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
