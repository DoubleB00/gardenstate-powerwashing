import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jo-Ann Bandomer',
    text: 'Excellent communication and service and price… the after looks like the siding is brand new. I couldn\'t be happier.',
    rating: 5
  },
  {
    name: 'Patrick McGrory',
    text: 'Alex did a great job, in a short time, for a reasonable price. I highly recommend Garden State Power Washing!',
    rating: 5
  },
  {
    name: 'Ame Davis',
    text: 'Alex made the experience quick and easy. He did a beautiful job on my house and completed the job in no time.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            5.0 stars from 90+ satisfied homeowners in Middlesex County
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-300 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-bold text-blue-200">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Garden+State+Power+Washing+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Read All 90 Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
