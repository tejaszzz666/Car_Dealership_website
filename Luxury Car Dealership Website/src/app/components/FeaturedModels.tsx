import { motion } from 'motion/react';
import { Zap, Gauge, TrendingUp } from 'lucide-react';

interface FeaturedModelsProps {
  onViewCar: (carId: number) => void;
}

export function FeaturedModels({ onViewCar }: FeaturedModelsProps) {
  const featuredCars = [
    {
      id: 1,
      name: 'Rosso Corsa GT',
      price: '$485,000',
      image: 'https://images.unsplash.com/photo-1760681448470-6563f4cb95fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWQlMjBzdXBlcmNhciUyMGZyb250fGVufDF8fHx8MTc2ODE0Njg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      power: '730 HP',
      acceleration: '2.9s',
      topSpeed: '340 km/h',
    },
    {
      id: 2,
      name: 'Nero Phantom',
      price: '$520,000',
      image: 'https://images.unsplash.com/photo-1683615005974-73fdf4e3faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlcnJhcmklMjByYWNpbmd8ZW58MXx8fHwxNzY4MTQ2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      power: '800 HP',
      acceleration: '2.7s',
      topSpeed: '355 km/h',
    },
    {
      id: 3,
      name: 'Bianco Supremo',
      price: '$545,000',
      image: 'https://images.unsplash.com/photo-1708063787693-4b862e1ee887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhbWJvcmdoaW5pJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      power: '850 HP',
      acceleration: '2.5s',
      topSpeed: '370 km/h',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-[800] text-white mb-4 tracking-tight">
            FEATURED MODELS
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            Discover our exceptional collection of hypercars
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black border border-white/10 cursor-pointer"
              onClick={() => onViewCar(car.id)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--ferrari-red)]/0 group-hover:bg-[var(--ferrari-red)]/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-[700] text-white mb-2 tracking-tight">
                  {car.name}
                </h3>
                <p className="text-[var(--ferrari-red)] text-3xl font-[700] mb-6">
                  {car.price}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-[var(--ferrari-red)] mx-auto mb-2" />
                    <p className="text-white text-sm font-[600]">{car.power}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Power</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <Gauge className="w-5 h-5 text-[var(--ferrari-red)] mx-auto mb-2" />
                    <p className="text-white text-sm font-[600]">{car.acceleration}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">0-100</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-[var(--ferrari-red)] mx-auto mb-2" />
                    <p className="text-white text-sm font-[600]">{car.topSpeed}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Top Speed</p>
                  </div>
                </div>

                {/* View Details Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-full py-3 bg-[var(--ferrari-red)] text-white text-center uppercase tracking-wider text-sm font-[600]">
                    View Details
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
