import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedModels } from './components/FeaturedModels';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CarCollection } from './components/CarCollection';
import { CarDetail } from './components/CarDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedCarId(null);
  };

  const handleViewCar = (carId: number) => {
    setSelectedCarId(carId);
    setCurrentPage('car-detail');
  };

  const handleBackFromDetail = () => {
    setCurrentPage('inventory');
    setSelectedCarId(null);
  };

  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Home Page */}
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <FeaturedModels onViewCar={handleViewCar} />
          <WhyChooseUs />
          <About />
          <Testimonials />
          <Contact />
        </>
      )}

      {/* Models Page - Same as Home Featured Models but full screen */}
      {currentPage === 'models' && (
        <div className="pt-32 pb-24">
          <FeaturedModels onViewCar={handleViewCar} />
        </div>
      )}

      {/* Inventory/Collection Page */}
      {currentPage === 'inventory' && (
        <CarCollection onViewCar={handleViewCar} />
      )}

      {/* Car Detail Page */}
      {currentPage === 'car-detail' && selectedCarId && (
        <CarDetail
          carId={selectedCarId}
          onBack={handleBackFromDetail}
          onNavigate={handleNavigate}
        />
      )}

      {/* About Page */}
      {currentPage === 'about' && (
        <div className="pt-32 pb-24">
          <About />
          <Testimonials />
        </div>
      )}

      {/* Contact Page */}
      {currentPage === 'contact' && (
        <div className="pt-32 pb-24">
          <Contact />
        </div>
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
