import { motion } from 'motion/react';
import { Trophy, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--ferrari-red)]/5 via-transparent to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-[800] text-white mb-6 tracking-tight">
              PASSION MEETS
              <br />
              <span className="text-[var(--ferrari-red)]">PERFORMANCE</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                For over two decades, we have been at the forefront of luxury automotive excellence, 
                curating the world's most exceptional supercars for the most discerning collectors.
              </p>
              <p>
                Our passion for performance, combined with an unwavering commitment to authenticity, 
                has established us as the premier destination for those who demand nothing but the absolute best.
              </p>
              <p>
                Every vehicle in our collection tells a story of innovation, craftsmanship, and 
                the relentless pursuit of perfection—values that define not just the machines we sell, 
                but the legacy we continue to build.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-[800] text-[var(--ferrari-red)] mb-2">20+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-4xl font-[800] text-[var(--ferrari-red)] mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Cars Sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-[800] text-[var(--ferrari-red)] mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjgxMjYwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury Showroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Values Cards */}
            <div className="space-y-4">
              {[
                { icon: Heart, title: 'Passion', text: 'Driven by an unwavering love for automotive excellence' },
                { icon: Trophy, title: 'Excellence', text: 'Committed to the highest standards of quality' },
                { icon: Sparkles, title: 'Innovation', text: 'Embracing the cutting edge of performance technology' },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-gradient-to-r from-zinc-900/50 to-transparent backdrop-blur-sm border border-white/10 p-4 hover:border-[var(--ferrari-red)]/50 transition-all duration-300"
                  >
                    <div className="p-2 bg-[var(--ferrari-red)]/10">
                      <Icon className="w-6 h-6 text-[var(--ferrari-red)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-[700] mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
