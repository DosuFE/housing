'use client'
import { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation on scroll
const useCountUpOnScroll = (end, duration = 2000, decimals = 0) => {
  const [count, setCount] = useState(0);
  const entryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the item is visible
    );

    if (entryRef.current) {
      observer.observe(entryRef.current);
    }

    return () => {
      if (entryRef.current) {
        observer.unobserve(entryRef.current);
      }
    };
  }, []); // Run once on mount to set up observer

  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      const animateCount = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(parseFloat((progress * end).toFixed(decimals)));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isVisible, end, duration, decimals]); // Rerun animation if target changes or visibility changes

  return [count, entryRef]; // Return count and the ref to attach to the element
};

export default function Accolades() {
    const [yearsCount, yearsRef] = useCountUpOnScroll(35, 2000);
    const [percentageCount, percentageRef] = useCountUpOnScroll(1.5, 2000, 1);
    const [salesCount, salesRef] = useCountUpOnScroll(2, 2000, 0); // Target 2 for "$2B+"
    const [dealVolumeCount, dealVolumeRef] = useCountUpOnScroll(150, 2000, 0); // Target 150 for "150M+"
    const [listToSoldCount, listToSoldRef] = useCountUpOnScroll(4, 2000, 0);
    const [champagneCount, champagneRef] = useCountUpOnScroll(900, 2000, 0);

    return(
        <main className="bg-black/55 text-white 
            py-16 px-10 lg:py-24 lg:px-28 flex items-center justify-center 
            sm:gap-x-10 lg:gap-x-20 xl:gap-x-40
        ">
            <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-7 md:gap-y-10 lg:gap-y-12">
                {/* YEARS IN BUSINESS */}
                <div ref={yearsRef} className="flex flex-col items-center justify-center space-y-5">
                    <h2 className="text-2xl">{yearsCount}</h2>
                    <p 
                        className="text-center leading-7 sm:leading-0 sm:text-start 
                        tracking-wider text-[10px] sm:text-sm md:text-base
                    ">
                        COMBINED YEARS IN BUSINESS
                    </p>
                </div>
                {/* TOP 1.5% OF TEAMS NATIONWIDE */}
                <div ref={percentageRef} className="flex flex-col items-center justify-center space-y-5">
                    <h2 className="text-2xl">{percentageCount}%</h2>
                    <p 
                        className="text-center leading-7 sm:leading-0 sm:text-start 
                        tracking-wider text-[10px]  sm:text-sm md:text-base
                    ">
                        TOP 1.5% OF TEAMS NATIONWIDE
                    </p>
                </div>
                {/* OVER 1 BILLION IN TOTAL SALES */}
                <div ref={salesRef} className="flex flex-col items-center justify-center space-y-5">
                    <h2 className="text-2xl">${salesCount}B+</h2>
                    <p 
                        className="text-center leading-7 sm:leading-0 sm:text-start 
                        tracking-wider text-[10px]  sm:text-sm md:text-base
                    ">
                       OVER 1 BILLION IN TOTAL SALES
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 sm:gap-y-7 md:gap-y-10 lg:gap-y-12">
                {/* DEAL VOLUME IN THE PAST 12 MONTH */}
                <div ref={dealVolumeRef} className="flex flex-col items-center justify-center space-y-5">
                    <h2 className="text-2xl">{dealVolumeCount}M+</h2>
                    <p 
                        className="text-center leading-7 sm:leading-0 sm:text-start 
                        tracking-wider text-[10px]  sm:text-sm md:text-base
                    ">
                        DEAL VOLUME IN THE PAST 12 MONTH
                    </p>
                </div>
                {/* LIST TO SOLD AVERAGE */}
                <div ref={listToSoldRef} className="flex flex-col items-center justify-center space-y-5">
                    <h2 className="text-2xl">{listToSoldCount}%</h2>
                    <p 
                        className="text-center leading-7 sm:leading-0 sm:text-start 
                        tracking-wider text-[10px]  sm:text-sm md:text-base
                    ">
                        LIST TO SOLD AVERAGE
                    </p>
                </div>
                {/* # OF CHAMPAGNE BOTTLES DELIVERED */}
                <div ref={champagneRef} className="flex flex-col items-center justify-center space-y-5">
                    <h2 className="text-2xl">{champagneCount}+</h2>
                    <p 
                        className="text-center leading-7 sm:leading-0 sm:text-start 
                        tracking-wider text-[10px]  sm:text-sm md:text-base
                    ">
                        # OF CHAMPAGNE BOTTLES DELIVERED
                    </p>
                </div>
            </div>
        </main>
    )
}