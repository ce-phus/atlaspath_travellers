// src/components/Hero.jsx
import React from 'react';
import { FaPlaneDeparture, FaSearch } from 'react-icons/fa';
import { hero } from '../assets';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Maasai Mara landscape at sunrise - Kenya"
          className="w-full h-full object-cover brightness-[0.65]"
          // You can also use:
          // src="/images/hero-kenya-safari.jpg"  (if you have local image)
        />
        {/* Optional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 md:mb-6 drop-shadow-2xl">
          Discover the Magic of Kenya
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg">
          Safaris • Beaches • Culture • Mountains • Authentic Adventures
        </p>

        {/* Quick search / CTA area */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6">
          <a
            href="#destinations"
            className="group flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <FaPlaneDeparture className="text-xl group-hover:rotate-12 transition-transform" />
            Start Your Journey
          </a>

          <a
            href="#search"
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            <FaSearch className="text-xl" />
            Explore Tours
          </a>
        </div>

        {/* Optional small trust signals / subtitle */}
        <div className="mt-12 text-white/80 text-sm md:text-base">
          <p>Handcrafted experiences • Expert local guides • Safe & sustainable travel</p>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;