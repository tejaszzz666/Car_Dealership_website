import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Fuel, Gauge, Zap, TrendingUp, Cog, Heart, Share2 } from 'lucide-react';

interface CarDetailProps {
  carId: number;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function CarDetail({ carId, onBack, onNavigate }: CarDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock car data based on ID
  const carData: { [key: number]: any } = {
    1: {
      name: 'Rosso Corsa GT',
      brand: 'Ferrari',
      price: 485000,
      year: 2024,
      images: [
        'https://images.unsplash.com/photo-1760681448470-6563f4cb95fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWQlMjBzdXBlcmNhciUyMGZyb250fGVufDF8fHx8MTc2ODE0Njg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1623686716045-309a1b678f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmZXJyYXJpJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MTQ2ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      specs: {
        power: '730 HP',
        acceleration: '2.9s',
        topSpeed: '340 km/h',
        engine: 'V12 6.5L',
        transmission: '7-Speed DCT',
        fuelType: 'Gasoline',
        drivetrain: 'RWD',
        mileage: '1,200 km',
      },
      description: 'A masterpiece of Italian engineering, combining raw power with refined elegance. This Rosso Corsa GT represents the pinnacle of Ferrari\'s racing heritage, delivering an unparalleled driving experience.',
    },
    2: {
      name: 'Nero Phantom',
      brand: 'Lamborghini',
      price: 520000,
      year: 2024,
      images: [
        'https://images.unsplash.com/photo-1683615005974-73fdf4e3faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlcnJhcmklMjByYWNpbmd8ZW58MXx8fHwxNzY4MTQ2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      specs: {
        power: '800 HP',
        acceleration: '2.7s',
        topSpeed: '355 km/h',
        engine: 'V12 6.5L',
        transmission: '7-Speed ISR',
        fuelType: 'Gasoline',
        drivetrain: 'AWD',
        mileage: '800 km',
      },
      description: 'Bold, aggressive, and utterly unstoppable. The Nero Phantom embodies Lamborghini\'s uncompromising approach to supercar design and performance.',
    },
    3: {
      name: 'Bianco Supremo',
      brand: 'Lamborghini',
      price: 545000,
      year: 2024,
      images: [
        'https://images.unsplash.com/photo-1708063787693-4b862e1ee887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhbWJvcmdoaW5pJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      specs: {
        power: '850 HP',
        acceleration: '2.5s',
        topSpeed: '370 km/h',
        engine: 'V12 Hybrid',
        transmission: '7-Speed DCT',
        fuelType: 'Hybrid',
        drivetrain: 'AWD',
        mileage: '500 km',
      },
      description: 'The future of performance, combining hybrid technology with legendary Lamborghini power for an electrifying driving experience.',
    },
  };

  const car = carData[carId] || carData[1];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 lg:px-12 bg-black">
      <div className="max-w-[1600px] mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="uppercase tracking-wider text-sm">Back to Collection</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative h-[500px] mb-4 overflow-hidden bg-zinc-900 border border-white/10">
              <img
                src={car.images[currentImageIndex]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-3 bg-black/80 backdrop-blur-sm border border-white/20 text-white hover:bg-[var(--ferrari-red)] transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-black/80 backdrop-blur-sm border border-white/20 text-white hover:bg-[var(--ferrari-red)] transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-24 overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-[var(--ferrari-red)]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 uppercase tracking-wider mb-2">{car.brand}</p>
            <h1 className="text-5xl font-[800] text-white mb-6 tracking-tight">{car.name}</h1>
            <p className="text-[var(--ferrari-red)] text-4xl font-[800] mb-8">
              ${car.price.toLocaleString()}
            </p>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              {car.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-4 text-center">
                <Zap className="w-6 h-6 text-[var(--ferrari-red)] mx-auto mb-2" />
                <p className="text-white font-[700] text-lg">{car.specs.power}</p>
                <p className="text-gray-500 text-xs uppercase">Power</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-4 text-center">
                <Gauge className="w-6 h-6 text-[var(--ferrari-red)] mx-auto mb-2" />
                <p className="text-white font-[700] text-lg">{car.specs.acceleration}</p>
                <p className="text-gray-500 text-xs uppercase">0-100 km/h</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-4 text-center">
                <TrendingUp className="w-6 h-6 text-[var(--ferrari-red)] mx-auto mb-2" />
                <p className="text-white font-[700] text-lg">{car.specs.topSpeed}</p>
                <p className="text-gray-500 text-xs uppercase">Top Speed</p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-white/10 p-6 mb-8">
              <h3 className="text-white font-[700] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cog className="w-5 h-5 text-[var(--ferrari-red)]" />
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(car.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-white font-[600]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 bg-[var(--ferrari-red)] text-white py-4 uppercase tracking-wider font-[700] hover:bg-[var(--ferrari-red-dark)] transition-all duration-300 transform hover:scale-105"
              >
                Book Test Drive
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 bg-transparent border-2 border-white text-white py-4 uppercase tracking-wider font-[700] hover:bg-white hover:text-black transition-all duration-300"
              >
                Make Inquiry
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <h2 className="text-3xl font-[800] text-white mb-8">Included Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Carbon Fiber Package',
              'Sport Exhaust System',
              'Premium Sound System',
              'Adaptive Suspension',
              'Carbon Ceramic Brakes',
              'Racing Seats',
              'Advanced Driver Assist',
              'Custom Paint Protection',
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-zinc-900/30 to-transparent border border-white/10 p-4"
              >
                <div className="w-2 h-2 bg-[var(--ferrari-red)]" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
