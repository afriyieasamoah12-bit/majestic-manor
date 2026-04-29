import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [activePackage, setActivePackage] = useState(null);

  const packages = [
    { id: 'genesis', name: 'The Genesis', price: '$8,000+', desc: 'Intimate. Sacred. Intention.', icon: '🕊️' },
    { id: 'esther', name: 'The Esther', price: '$20,000+', desc: 'Glamour. Grace. Royalty.', icon: '👑' },
    { id: 'solomon', name: 'The Solomon', price: '$50,000+', desc: 'Top-tier Luxury. Wisdom. Excellence.', icon: '🏛️' }
  ];

  const handleDivineVision = (name) => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C9A86A', '#ffffff', '#4C2A63']
    });
    setActivePackage(name);
  };

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#F8F4EC', 
      minHeight: '100vh', 
      fontFamily: 'serif',
      padding: '0 20px'
    }}>
      {/* Cinematic Hero Section */}
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid #C9A86A'
      }}>
        <h1 style={{ fontSize: '4rem', color: '#C9A86A', margin: 0, letterSpacing: '15px', fontWeight: '300' }}>B.M.E</h1>
        <p style={{ fontSize: '1.2rem', letterSpacing: '5px', marginTop: '10px', opacity: 0.8 }}>BETHEL MAJESTY EVENTS</p>
        <div style={{ width: '60px', height: '2px', backgroundColor: '#C9A86A', margin: '30px 0' }}></div>
        <p style={{ maxWidth: '600px', fontStyle: 'italic', lineHeight: '1.6', fontSize: '1.1rem' }}>
          "Where Blessed Moments Become Majestic."
        </p>
      </section>

      {/* Interactive Experience Section */}
      <section style={{ padding: '100px 0', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#C9A86A', fontSize: '2rem', marginBottom: '60px', letterSpacing: '3px' }}>SELECT YOUR EXPERIENCE</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => handleDivineVision(pkg.name)}
              style={{ 
                background: '#151515', 
                padding: '50px 30px', 
                borderRadius: '15px', 
                border: '1px solid #333', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: activePackage === pkg.name ? 'scale(1.05)' : 'scale(1)',
                borderColor: activePackage === pkg.name ? '#C9A86A' : '#333'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
              <h3 style={{ color: '#C9A86A', fontSize: '1.5rem', marginBottom: '10px' }}>{pkg.name}</h3>
              <p style={{ opacity: 0.7, marginBottom: '20px' }}>{pkg.desc}</p>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{pkg.price}</div>
              {activePackage === pkg.name && (
                <div style={{ marginTop: '20px', color: '#C9A86A', fontSize: '0.9rem', animation: 'fadeIn 0.5s' }}>
                  VISION INITIALIZED
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <footer style={{ padding: '100px 0', textAlign: 'center', borderTop: '1px solid #222' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.6, fontSize: '0.9rem', letterSpacing: '2px' }}>
          <span>EXCELLENCE</span>
          <span>INTEGRITY</span>
          <span>GRACE</span>
          <span>MAJESTY</span>
        </div>
        <p style={{ marginTop: '50px', opacity: 0.3, fontSize: '0.8rem' }}>&copy; 2026 Bethel Majesty Events | Cincinnati, OH</p>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        body { margin: 0; background-color: #0a0a0a; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
