'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ImageProperty() {
  
    const imageHousing = [
        {
            id: 1,
            name: 'WASHINGTON',
            image: '/assets/washington.jpg'
        },
         {
            id: 2,
            name: 'FRANKLIN',
            image: '/assets/franklin.jpg'
        },
         {
            id: 3,
            name: 'CLINTON',
            image: '/assets/clinton.jpg'
        },
         {
            id: 4,
            name: 'GREENVILLE',
            image: '/assets/greenville.jpg'
        },
         {
            id: 5,
            name: 'BRISTOL',
            image: '/assets/bristol.jpg'
        },
         {
            id: 6,
            name: 'FAIRVIEW',
            image: '/assets/fairview.jpg'
        },
         {
            id: 7,
            name: 'FAIRVIEW',
            image: '/assets/fairview_2.jpg'
        },
         {
            id: 8,
            name: 'SALEM',
            image: '/assets/salem.jpg'
        },
         {
            id: 9,
            name: 'MADISON',
            image: '/assets/madison.jpg'
        }
    ]

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const imagesToShow = !showAll && isMobile ? imageHousing.slice(0, 4) : imageHousing;

  return (
    <article className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {imagesToShow.map((imagehousing)=> (
            <Link href='/properties' key={imagehousing.id} className="group relative block overflow-hidden shadow hover:shadow-lg transition-shadow">
                <img 
                    src={imagehousing.image} 
                    alt={imagehousing.name}                        
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                    <span className="w-full text-center text-white text-lg font-semibold py-3 bg-black/40 group-hover:bg-black/60 transition-all">{imagehousing.name}</span>
                </div>
            </Link>
        ))}
        {/* Load More button for mobile only, and only if not all images are shown */}
        {!showAll && isMobile && (
            <button
                className="block lg:hidden col-span-full 
                mt-6 mx-auto px-8 py-2 bg-black text-white 
                font-semibold shadow hover:bg-transparent transition-all
                text-xl hover:border-2 hover:text-black"
                onClick={() => setShowAll(true)}
            >
                Load More
            </button>
        )}
    </article>
  );
}