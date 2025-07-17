'use client'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const PropertyDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/property?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setProperty(null);
        } else {
          setProperty(data);
          setError(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch property details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center text-lg">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600 text-lg">{error}</div>;
  if (!property) return null;

  return (
    <main className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-lg overflowhidden">
      <img
        src={property.image}
        alt={property.label}
        className="w-full px-0 sm:px-10 h-64 sm:h-80 object-cover mx-auto"
      />
      <div className="p-8 space-y-3">
        <h1 className="m-0 text-2xl sm:text-3xl font-semibold tracking-wider mb-2">{property.label}</h1>
        <p className="text-sky-600 font-semibold text-xl tracking-wider">{property.price}</p>
        <p className="text-gray-500">{property.address}</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4 text-base sm:text-lg">
          <span>Area: <b>{property.area}</b></span>
          {property.bedroom && <span>Bedroom: <b>{property.bedroom}</b></span>}
          {property.bathroom && <span>Bathroom: <b>{property.bathroom}</b></span>}
          <span>Status: <b>{property.status}</b></span>
          <span>Type: <b>{property.type}</b></span>
          <span>Year: <b>{property.year}</b></span>
        </div>
        <p className="mb-8 leading-relaxed tracking-normal">{property.description}</p>
        <div className="border-t border-gray-200 pt-6 flex items-center gap-6">
          <img
            src={property.agent_image}
            alt={property.agent}
            className="w-16 h-16 rounded-full object-cover border-2 border-sky-600"
          />
          <div>
            <div className="font-semibold text-lg">{property.agent}</div>
            <div className="text-gray-600 text-base">{property.agent_email}</div>
            <div className="text-gray-600 text-base">{property.agent_phone}</div>
            <div className="mt-2 flex flex-wrap gap-1 sm:gap-3">
              {property.agent_website && (
                <a href={property.agent_website} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Website</a>
              )}
              {property.agent_facebook && (
                <a href={property.agent_facebook} target="_blank" rel="noopener noreferrer" className="text-[#4267B2] hover:underline">Facebook</a>
              )}
              {property.agent_twitter && (
                <a href={property.agent_twitter} target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:underline">Twitter</a>
              )}
              {property.agent_instagram && (
                <a href={property.agent_instagram} target="_blank" rel="noopener noreferrer" className="text-[#C13584] hover:underline">Instagram</a>
              )}
              {property.agent_linkedin && (
                <a href={property.agent_linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:underline">LinkedIn</a>
              )}
            </div>

            <button
              className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition"
              onClick={() => router.push('/contact')}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetails;
