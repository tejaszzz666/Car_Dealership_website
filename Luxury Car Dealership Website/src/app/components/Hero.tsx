import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1760681448470-6563f4cb95fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWQlMjBzdXBlcmNhciUyMGZyb250fGVufDF8fHx8MTc2ODE0Njg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'UNLEASH PERFORMANCE',
      subtitle: 'Experience the pinnacle of automotive excellence',
    },
    {
      image: 'https://images.unsplash.com/photo-1683615005974-73fdf4e3faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlcnJhcmklMjByYWNpbmd8ZW58MXx8fHwxNzY4MTQ2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'ENGINEERED PERFECTION',
      subtitle: 'Where passion meets precision engineering',
    },
    {
      image: 'https://images.unsplash.com/photo-1708063787693-4b862e1ee887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhbWJvcmdoaW5pJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'ULTIMATE LUXURY',
      subtitle: 'Redefining the art of the supercar',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-5xl">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-[800] tracking-tight mb-6 text-white leading-[1.1]">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 tracking-wide">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button
                  onClick={() => onNavigate('inventory')}
                  className="px-10 py-4 bg-[var(--ferrari-red)] text-white uppercase tracking-wider text-sm hover:bg-[var(--ferrari-red-dark)] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50"
                >
                  Explore Cars
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-10 py-4 bg-transparent border-2 border-white text-white uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Book Test Drive
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              index === currentSlide ? 'bg-[var(--ferrari-red)]' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
