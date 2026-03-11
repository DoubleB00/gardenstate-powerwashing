import { Award, Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Garden State Power Washing LLC
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We at Garden State Power Washing take on every job at the highest level of importance and expertise to make sure every customer is left 110% satisfied.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a locally owned and operated business serving Middlesex County and nearby areas, we understand the unique cleaning challenges that New Jersey homes face. Our dedication to quality, reliable service, and attention to detail sets us apart from the competition.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience and state-of-the-art equipment, we transform homes and properties throughout the area. Our commitment to customer satisfaction has earned us a perfect 5-star rating and the trust of homeowners across the region.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Top Rated</h3>
              <p className="text-gray-600">5.0 stars from 90+ reviews</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600">Serving Middlesex County</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">110% satisfaction guaranteed</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600">Reliable and trustworthy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
