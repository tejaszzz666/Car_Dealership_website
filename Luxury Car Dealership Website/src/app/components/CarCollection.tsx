import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

interface CarCollectionProps {
  onViewCar: (carId: number) => void;
}

export function CarCollection({ onViewCar }: CarCollectionProps) {
  const [priceFilter, setPriceFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const allCars = [
    {
      id: 1,
      name: 'Rosso Corsa GT',
      brand: 'Ferrari',
      price: 485000,
      image: 'https://images.unsplash.com/photo-1760681448470-6563f4cb95fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWQlMjBzdXBlcmNhciUyMGZyb250fGVufDF8fHx8MTc2ODE0Njg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      power: '730 HP',
      year: 2024,
      fuelType: 'Gasoline',
    },
    {
      id: 2,
      name: 'Nero Phantom',
      brand: 'Lamborghini',
      price: 520000,
      image: 'https://images.unsplash.com/photo-1683615005974-73fdf4e3faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlcnJhcmklMjByYWNpbmd8ZW58MXx8fHwxNzY4MTQ2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      power: '800 HP',
      year: 2024,
      fuelType: 'Gasoline',
    },
    {
      id: 3,
      name: 'Bianco Supremo',
      brand: 'Lamborghini',
      price: 545000,
      image: 'https://images.unsplash.com/photo-1708063787693-4b862e1ee887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhbWJvcmdoaW5pJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      power: '850 HP',
      year: 2024,
      fuelType: 'Hybrid',
    },
    {
      id: 4,
      name: 'Giallo Thunder',
      brand: 'Ferrari',
      price: 395000,
      image: 'https://images.unsplash.com/photo-1583169216201-e46bd66dca66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzdXBlcmNhciUyMHJvYWR8ZW58MXx8fHwxNzY4MTQ2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      power: '670 HP',
      year: 2023,
      fuelType: 'Gasoline',
    },
    {
      id: 5,
      name: 'Azure Dream',
      brand: 'McLaren',
      price: 475000,
      image: 'https://images.unsplash.com/photo-1753899762863-af6e21e86438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc3BvcnRzJTIwY2FyfGVufDF8fHx8MTc2ODEzNTI5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      power: '720 HP',
      year: 2024,
      fuelType: 'Hybrid',
    },
    {
      id: 6,
      name: 'Silver Spectre',
      brand: 'McLaren',
      price: 505000,
      image: 'https://images.unsplash.com/photo-1627734215404-5364b282c1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBoeXBlcmNhciUyMGx1eHVyeXxlbnwxfHx8fDE3NjgxNDY4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      power: '765 HP',
      year: 2024,
      fuelType: 'Gasoline',
    },
  ];

  // Filter and sort logic
  let filteredCars = allCars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceFilter === 'all' ||
                        (priceFilter === 'under400' && car.price < 400000) ||
                        (priceFilter === '400-500' && car.price >= 400000 && car.price < 500000) ||
                        (priceFilter === 'over500' && car.price >= 500000);
    const matchesBrand = brandFilter === 'all' || car.brand === brandFilter;
    
    return matchesSearch && matchesPrice && matchesBrand;
  });

  // Sort
  filteredCars = filteredCars.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'power') return parseInt(b.power) - parseInt(a.power);
    return b.year - a.year; // newest
  });

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-[800] text-white mb-4 tracking-tight">
            OUR COLLECTION
          </h1>
          <p className="text-gray-400 text-lg">
            {filteredCars.length} vehicles available
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-zinc-900/50 to-transparent border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-[var(--ferrari-red)]" />
              <h3 className="text-white font-[700] uppercase tracking-wider">Filters</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Model or brand..."
                    className="w-full bg-black border border-white/10 pl-10 pr-4 py-2 text-white text-sm focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Price Range
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full bg-black border border-white/10 px-4 py-2 text-white text-sm focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                >
                  <option value="all">All Prices</option>
                  <option value="under400">Under $400K</option>
                  <option value="400-500">$400K - $500K</option>
                  <option value="over500">Over $500K</option>
                </select>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Brand
                </label>
                <select
                  value={brandFilter}
                  onChange={(e) => setBrandFilter(e.target.value)}
                  className="w-full bg-black border border-white/10 px-4 py-2 text-white text-sm focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                >
                  <option value="all">All Brands</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Lamborghini">Lamborghini</option>
                  <option value="McLaren">McLaren</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-black border border-white/10 px-4 py-2 text-white text-sm focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="power">Highest Performance</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onViewCar(car.id)}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 overflow-hidden hover:border-[var(--ferrari-red)]/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[var(--ferrari-red)] px-3 py-1 text-white text-xs font-[700] uppercase tracking-wider">
                    {car.year}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">{car.brand}</p>
                  <h3 className="text-2xl font-[700] text-white mb-4">{car.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[var(--ferrari-red)] text-2xl font-[700]">
                      ${car.price.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-sm">{car.power}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Fuel: {car.fuelType}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No vehicles match your criteria</p>
            <button
              onClick={() => {
                setPriceFilter('all');
                setBrandFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-[var(--ferrari-red)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
