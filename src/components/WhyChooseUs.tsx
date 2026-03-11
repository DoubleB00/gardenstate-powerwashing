import { Star, Users, Zap, DollarSign, Wrench, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: '5-Star Rated Service',
    description: 'Perfect 5.0 rating from 90+ satisfied customers who trust our work.'
  },
  {
    icon: Users,
    title: 'Reliable and Professional Staff',
    description: 'Experienced team members who treat your property with care and respect.'
  },
  {
    icon: Zap,
    title: 'Fast Response and Communication',
    description: 'Quick quotes, timely service, and clear communication throughout the process.'
  },
  {
    icon: DollarSign,
    title: 'Affordable and Fair Pricing',
    description: 'Competitive rates with no hidden fees. Quality service at honest prices.'
  },
  {
    icon: Wrench,
    title: 'High-Quality Cleaning Equipment',
    description: 'Professional-grade equipment for superior results without damage to your property.'
  },
  {
    icon: MapPin,
    title: 'Local New Jersey Business',
    description: 'Proudly serving Middlesex County and nearby communities with local expertise.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a trusted local pressure washing company
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
