'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true); // Set to true to display on initial load
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    // This effect runs when the component mounts and when pathname changes
    // We want to show the preloader on *subsequent* pathname changes (navigations)
    // For the initial load, the default isLoading state of false is fine, or you can manage it differently.
    setIsLoading(true); // Show preloader when path changes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 1 seconds

    return () => clearTimeout(timer);
  }, [pathname]); // Rerun effect when pathname changes

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 z-50 flex items-center justify-center transition-opacity duration-300">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-red-200/20 animate-gradient-shift"></div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-dashed border-sky-800 rounded-full animate-spin"></div>
        
        {/* Dotted Line Effect (New) */}
        <div className="absolute w-24 h-24 border-t-4 border-b-4 border-dotted border-blue-500 rounded-full animate-spin-reverse"></div>

        {/* Loading text with enhanced glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <span className="logo italic text-sky-800 font-medium text-2xl animate-pulse-glow">
            WESTON...
          </span>
        </div>
      </div>
    </div>
  );
};

