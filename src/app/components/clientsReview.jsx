'use client'
import { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Jane Doe',
    image: '/assets/john_doe.jpg',
    review: 'This company exceeded my expectations! The process was smooth and the staff was very helpful.'
  },
  {
    name: 'John Smith',
    image: '/assets/john_smith.jpg',
    review: 'Professional and reliable. I found my dream home thanks to their amazing service.'
  },
  {
    name: 'Emily Johnson',
    image: '/assets/emily_johnson.jpg',
    review: 'Great experience from start to finish. Highly recommended for anyone looking for a new property.'
  },
  {
    name: 'Michael Brown',
    image: '/assets/micheal_brown.jpg',
    review: 'The team was knowledgeable and guided me through every step. Thank you!'
  }
];

export default function ClientsReview() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);

  return (
    <section className="w-full bg-gradient-to-br from-sky-50 to-sky-100 py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-sky-800 tracking-wide">What Our Clients Say</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-sky-200 hover:bg-sky-400 hover:text-white text-sky-500 shadow transition-all absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          {/* Review Card */}
          <div className="w-full sm:w-[440px] bg-white border border-sky-100 rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center text-center mx-auto relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sky-500 rounded-full p-3 shadow-lg">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M7.17 15A3 3 0 0 1 4 12.17V12A7 7 0 0 1 11 5v2a5 5 0 0 0-5 5h2a3 3 0 0 1 3 3v.17A3 3 0 0 1 7.17 15ZM19.17 15A3 3 0 0 1 16 12.17V12a7 7 0 0 1 7-7v2a5 5 0 0 0-5 5h2a3 3 0 0 1 3 3v.17A3 3 0 0 1 19.17 15Z" fill="#fff"/></svg>
            </div>
            <img
              src={reviews[current].image}
              alt={reviews[current].name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-sky-200 shadow-lg mt-4"
            />
            <h3 className="text-xl font-semibold text-sky-900 mb-1 mt-2 tracking-wide">{reviews[current].name}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mt-2 mb-2 italic">"{reviews[current].review}"</p>
          </div>
          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next review"
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-sky-200 hover:bg-sky-400 hover:text-white text-sky-500 shadow transition-all absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-4 h-4 rounded-full border-2 ${current === idx ? 'bg-sky-400 border-sky-400 scale-110' : 'bg-white border-sky-200'} shadow transition-all`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}