'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center">
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

      {/* Property Images Grid */}
      <article className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 cursor-pointer transition-all overflow-hidden flex flex-col"
            onClick={() => router.push(`/properties/${property.id}`)}
          >
            <img
              src={property.image}
              alt={property.label}
              className="w-full h-72 md:h-64 object-cover"
            />
            <div className="pl-4 py-5 flex-1 flex flex-col justify-between">
              <div className='tracking-wider space-y-3'>
                <h3 className="text-lg font-semibold text-gray-800">{property.label}</h3>
                <p className="text-blue-600 font-semibold text-base">{property.price}</p>
                <p className="text-gray-500 text-sm hover:text-sky-600">{property.address}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default TabMenu;
