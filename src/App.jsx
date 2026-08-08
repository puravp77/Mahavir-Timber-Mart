import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideoShowcase from './components/VideoShowcase';
import Products from './components/Products';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  return (
    <div className="bg-[#0F0F0F] text-[#FFFFFF] min-h-screen font-sans selection:bg-[#9A6B34] selection:text-white">
      
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Hero Section with Video Reel Background */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Video Reel Showcase */}
      <VideoShowcase />

      {/* Products Showcase */}
      <Products onSelectProduct={(prod) => setSelectedProduct(prod)} />

      {/* Gallery Section */}
      <Gallery onOpenLightbox={(item) => setSelectedGalleryItem(item)} />

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Animated Statistics */}
      <Statistics />

      {/* High-Impact CTA */}
      <CTA />

      {/* Contact & Map Location */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Popup Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

    </div>
  );
}
