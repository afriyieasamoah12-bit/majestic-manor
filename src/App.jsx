import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const packages = [
    { 
      id: 'genesis', 
      name: 'The Genesis', 
      price: '$8,000+', 
      icon: '🕊️',
      details: ["Intimate Venue Curation", "4-Hour Event Window", "Signature Decor Package", "Dedicated Day-of Lead"],
      vibe: "A sacred beginning for your most meaningful moments."
    },
    { 
      id: 'esther', 
      name: 'The Esther', 
      price: '$20,000+', 
      icon: '👑',
      details: ["Full-Service Planning", "Luxury Floral Arrangements", "Custom Lighting Design", "Elite Vendor Coordination", "Bespoke Menu Planning"],
      vibe: "Step into your royal moment with grace and glamour."
    },
    { 
      id: 'solomon', 
      name: 'The Solomon', 
      price: '$50,000+', 
      icon: '🏛️',
      details: ["The 'Majesty' Multi-Day Planning", "Custom Castle-Style Build-outs", "VIP Concierge Staff", "Full Production & AV", "Premium Global Logistics"],
      vibe: "The pinnacle of excellence. No detail left untouched."
    }
  ];

  const openDetails = (pkg) => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C9A86A', '#ffffff']
    });
    setSelectedPkg(pkg);
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: 'serif', padding: '0 20px' }}>
      
      {/* Header */}
      <section style={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', color: '#C9A86A', margin: 0, letterSpacing: '12px' }}>B.M.E</h1>
        <p style={{ fontSize: '1rem', letterSpacing: '4px', opacity: 0.8 }}>BETHEL MAJESTY EVENTS</p>
        <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#C9A86A' }}>Blessed • Moments • Elevated</p>
      </section>

      {/* Grid */}
      <section style={{ paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => openDetails(pkg)}
              style={{ 
                background: '#111', padding: '60px 40px', borderRadius: '5px', 
                border: '1px solid #333', textAlign: 'center', cursor: 'pointer',
                transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = '#C9A86A'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
              <h2 style={{ color: '#C9A86A', fontSize: '1.8rem', letterSpacing: '2px' }}>{pkg.name}</h2>
              <p style={{ opacity: 0.6, marginTop: '10px' }}>Click to view details</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal Overlay */}
      {selectedPkg && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', 
          justifyContent: 'center', alignItems: 'center', padding: '20px'
        }}>
          <div style={{ 
            background: '#151515', width: '100%', maxWidth: '600px', 
            padding: '50px', border: '1px solid #C9A86A', position: 'relative' 
          }}>
            <button 
              onClick={() => setSelectedPkg(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#C9A86A', fontSize: '1.5rem', cursor: 'pointer' }}
            >✕</button>
            
            <h2 style={{ color: '#C9A86A', fontSize: '2.5rem', margin: '0 0 10px 0' }}>{selectedPkg.name}</h2>
            <p style={{ fontStyle: 'italic', marginBottom: '30px', opacity: 0.8 }}>{selectedPkg.vibe}</p>
            
            <div style={{ textAlign: 'left', margin: '40px 0' }}>
              <h4 style={{ color: '#C9A86A', letterSpacing: '2px', marginBottom: '15px' }}>SPECIFICATIONS</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                {selectedPkg.details.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#C9A86A', borderTop: '1px solid #333', paddingTop: '20px' }}>
              {selectedPkg.price}
            </div>
          </div>
        </div>
      )}

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.3 }}>
        &copy; 2026 Bethel Majesty Events | Cincinnati, OH
      </footer>
    </div>
  );
};

export default BMEPortal;
