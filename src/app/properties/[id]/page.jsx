'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PropertyDetails = () => {
  const { id } = useParams();
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

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>{error}</div>;
  if (!property) return null;

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
      <img
        src={property.image}
        alt={property.label}
        style={{ width: '100%', height: 350, objectFit: 'cover' }}
      />
      <div style={{ padding: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 700 }}>{property.label}</h1>
        <p style={{ color: '#0070f3', fontWeight: 600, fontSize: '1.3rem', margin: '0.5rem 0' }}>{property.price}</p>
        <p style={{ color: '#666', margin: '0.25rem 0 1rem 0' }}>{property.address}</p>
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span>Area: <b>{property.area}</b></span>
          {property.bedroom && <span>Bedroom: <b>{property.bedroom}</b></span>}
          {property.bathroom && <span>Bathroom: <b>{property.bathroom}</b></span>}
          <span>Status: <b>{property.status}</b></span>
          <span>Type: <b>{property.type}</b></span>
          <span>Year: <b>{property.year}</b></span>
        </div>
        <p style={{ marginBottom: '2rem' }}>{property.description}</p>
        <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img
            src={property.agent_image}
            alt={property.agent}
            style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '2px solid #0070f3' }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{property.agent}</div>
            <div style={{ color: '#555', fontSize: '0.97rem' }}>{property.agent_email}</div>
            <div style={{ color: '#555', fontSize: '0.97rem' }}>{property.agent_phone}</div>
            <div style={{ marginTop: 6 }}>
              {property.agent_website && <a href={property.agent_website} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, color: '#0070f3' }}>Website</a>}
              {property.agent_facebook && <a href={property.agent_facebook} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, color: '#4267B2' }}>Facebook</a>}
              {property.agent_twitter && <a href={property.agent_twitter} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, color: '#1DA1F2' }}>Twitter</a>}
              {property.agent_instagram && <a href={property.agent_instagram} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10, color: '#C13584' }}>Instagram</a>}
              {property.agent_linkedin && <a href={property.agent_linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5' }}>LinkedIn</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
