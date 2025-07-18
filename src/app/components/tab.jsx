'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; // Import motion

const TABS = [
  { label: 'ALL', value: 'ALL' },
  { label: 'LIVING HOUSING', value: 'Living' },
  { label: 'VILLA', value: 'Villa' },
  { label: 'APARTMENT', value: 'Apartment' },
  { label: 'OFFICE', value: 'Office' },
];

const LIMITS = {
  ALL: 12,
  Living: 6,
  Villa: 3,
  Apartment: 5,
  Office: 3,
};

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TabMenu = () => {
  const [selectedTab, setSelectedTab] = useState('ALL');
  const [properties, setProperties] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/property')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  let filteredProperties = [];
  if (selectedTab === 'ALL') {
    filteredProperties = properties.slice(0, LIMITS.ALL);
  } else if (selectedTab === 'Living') {
    filteredProperties = properties
      .filter((property) => property.category === 'Living')
      .slice(0, LIMITS.Living);
  } else if (LIMITS[selectedTab]) {
    filteredProperties = properties
      .filter((property) => property.category === selectedTab)
      .slice(0, LIMITS[selectedTab]);
  } else {
    filteredProperties = properties.filter((property) => property.category === selectedTab);
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Tab Menu */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={`px-6 py-2 rounded-full border transition-all font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-400
              ${selectedTab === tab.value
                ? 'bg-blue-100 border-blue-500 text-blue-700 ring-2 ring-blue-200'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Property Images Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProperties.map((property) => (
          <motion.div
            key={property.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 cursor-pointer transition-all overflow-hidden flex flex-col"
            onClick={() => router.push(`/properties/${property.id}`)}
          >
            <img
              src={property.image}
              alt={property.label}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{property.label}</h3>
                <p className="text-blue-600 font-bold text-base mb-1">{property.price}</p>
                <p className="text-gray-500 text-sm mb-2">{property.address}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TabMenu;
