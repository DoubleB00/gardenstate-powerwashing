import { MapPin, CheckCircle2 } from 'lucide-react';

const areas = [
  'Old Bridge',
  'East Brunswick',
  'Sayreville',
  'South Brunswick',
  'Monroe Township',
  'Spotswood',
  'South River',
  'Milltown',
  'New Brunswick',
  'North Brunswick',
  'Woodbridge',
  'Perth Amboy'
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-6">
            <MapPin className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proudly serving Middlesex County and nearby areas throughout New Jersey
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Don't see your town listed? We may still service your area!
            </p>
            <a
              href="tel:7329256354"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Call to Check Your Area
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
