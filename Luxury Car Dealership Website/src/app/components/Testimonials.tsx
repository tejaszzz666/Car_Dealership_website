import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Alexander Chen',
      title: 'CEO, Tech Ventures',
      rating: 5,
      text: 'The level of professionalism and attention to detail is unmatched. My Rosso Corsa GT is a masterpiece, and the purchasing experience was seamless from start to finish.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Victoria Laurent',
      title: 'Art Collector',
      rating: 5,
      text: 'Apex Motors understands that a supercar is more than a vehicle—it\'s an investment in artistry and performance. Their expertise and passion are evident in every interaction.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Entrepreneur',
      rating: 5,
      text: 'I\'ve purchased three vehicles from Apex Motors, and each experience has exceeded my expectations. Their dedication to excellence is truly exceptional.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-[800] text-white mb-4 tracking-tight">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            Trusted by the world's most distinguished collectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-sm border border-white/10 p-8 h-full hover:border-[var(--ferrari-red)]/50 transition-all duration-300 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[var(--ferrari-red)]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--ferrari-red)] text-[var(--ferrari-red)]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--ferrari-red)]/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-[700]">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[var(--ferrari-red)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
