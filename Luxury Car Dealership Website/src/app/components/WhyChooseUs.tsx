import { motion } from 'motion/react';
import { Shield, Award, Wrench, CreditCard } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Certified Excellence',
      description: 'Every vehicle undergoes rigorous inspection and certification',
    },
    {
      icon: Award,
      title: 'Premium Warranty',
      description: 'Comprehensive coverage with exclusive service packages',
    },
    {
      icon: Wrench,
      title: 'Expert Service',
      description: 'State-of-the-art facility with master technicians',
    },
    {
      icon: CreditCard,
      title: 'Flexible Financing',
      description: 'Tailored financing solutions for your luxury investment',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-[800] text-white mb-4 tracking-tight">
            WHY CHOOSE US
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            Experience unparalleled excellence in luxury automotive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-gradient-to-b from-zinc-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 h-full hover:border-[var(--ferrari-red)]/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-[var(--ferrari-red)]/10 flex items-center justify-center group-hover:bg-[var(--ferrari-red)]/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[var(--ferrari-red)]" />
                    </div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-2 border-[var(--ferrari-red)]/20 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-[700] text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-0 bg-[var(--ferrari-red)] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
