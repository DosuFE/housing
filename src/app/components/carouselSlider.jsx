'use client'
import { useState, useEffect, useRef } from 'react';

const images = [
  '/assets/slider-one.jpg',
  '/assets/slider-two.jpg',
];

export default function CarouselSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="carousel-slider-container">
      <div className="relative w-full h-72 md:h-96 lg:h-[500px] overflow-hidden shadow-lg">
        <img
          src={images[current]}
          alt={`slider-${current + 1}`}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        {/* Icon controllers */}
        <div className="absolute right-4 bottom-4 flex gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className={`carousel-dot ${current === idx ? 'active' : ''}`}
            >
              {/* Simple dot icon, can be replaced with an SVG icon */}
              <span className="inline-block w-4 h-4 rounded-full border-2 border-white bg-white/70 hover:bg-sky-400 transition-all"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}