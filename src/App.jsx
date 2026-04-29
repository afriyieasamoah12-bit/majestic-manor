import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEExperience = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#C9A86A', '#F8F4EC', '#4C2A63']
    });
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '300vh', fontFamily: "'Cinzel', serif", overflowX: 'hidden' }}>
      
      {/* Cinematic Sticky Header */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', padding: '30px 60px', 
        display: 'flex', justifyContent: 'space-between', zIndex: 1000,
        background: scrollY > 100 ? 'rgba(5,5,5,0.95)' : 'transparent',
        transition: '0.5s', borderBottom: scrollY > 100 ? '1px solid #C9A86A' : 'none'
      }}>
        <div style={{ fontSize: '1.8rem', color: '#C9A86A', fontWeight: 'bold', letterSpacing: '5px' }}>B.M.E</div>
        <div style={{ display: 'flex', gap: '40px', letterSpacing: '3px', fontSize: '0.8rem', alignItems: 'center' }}>
          <span>CINCINNATI</span>
          <button onClick={triggerCelebration} style={{ background: '#C9A86A', border: 'none', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>BOOK THE VISION</button>
        </div>
      </nav>

      {/* Section 1: The Entrance */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
        <div style={{ transform: `translateY(${scrollY * 0.5}px)`, opacity: 1 - scrollY / 500 }}>
          <h1 style={{ fontSize: '6rem', color: '#C9A86A', margin: 0, letterSpacing: '20px' }}>MAJESTY</h1>
          <p style={{ letterSpacing: '10px', fontSize: '1.2rem', opacity: 0.6 }}>BLESSED • MOMENTS • ELEVATED</p>
        </div>
        <div style={{ position: 'absolute', bottom: '50px', animation: 'bounce 2s infinite', color: '#C9A86A' }}>↓ SCROLL TO ENTER THE ESTATE</div>
      </section>

      {/* Section 2: The Divine Packages */}
      <section style={{ padding: '150px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', color: '#C9A86A', textAlign: 'center', marginBottom: '100px' }}>THE COLLECTIONS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { name: 'GENESIS', price: '$8,000+', desc: 'Intimate. Sacred. Purposeful.', icon: '🕊️' },
            { name: 'ROYAL PSALMS', price: '$15,000+', desc: 'Luxury Planned With Purpose.', icon: '📜' },
            { name: 'ESTHER', price: '$30,000+', desc: 'Grace. Glamour. Majesty.', icon: '👑' },
            { name: 'SOLOMON', price: '$50,000+', desc: 'Heavenly Elegance & Excellence.', icon: '🏛️' }
          ].map((pkg, i) => (
            <div key={i} style={{ 
              background: '#111', padding: '60px 30px', border: '1px solid #222', textAlign: 'center',
              transition: '0.4s', cursor: 'pointer'
            }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
              <h3 style={{ color: '#C9A86A', letterSpacing: '3px' }}>{pkg.name}</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.8' }}>{pkg.desc}</p>
              <div style={{ marginTop: '30px', fontWeight: 'bold', color: '#C9A86A' }}>{pkg.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: The Blueprint */}
      <section style={{ background: '#0A0A0A', padding: '150px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#C9A86A', fontSize: '2.5rem', borderBottom: '1px solid #C9A86A', paddingBottom: '20px' }}>THE CINCINNATI ASCENSION</h2>
          <div style={{ marginTop: '50px' }}>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
              <div style={{ fontSize: '1.5rem', color: '#C9A86A' }}>01</div>
              <div>
                <h4 style={{ margin: 0, letterSpacing: '2px' }}>LAND & ARCHITECTURE</h4>
                <p style={{ opacity: 0.6 }}>Securing the $7M estate and finalizing the Pillar of Majesty entrance.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
              <div style={{ fontSize: '1.5rem', color: '#C9A86A' }}>02</div>
              <div>
                <h4 style={{ margin: 0, letterSpacing: '2px' }}>FULL-SERVICE INTEGRATION</h4>
                <p style={{ opacity: 0.6 }}>In-house planners, catering, and immersive AV technology suites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '100px', textAlign: 'center', opacity: 0.3, letterSpacing: '5px' }}>
        B.M.E | CINCINNATI | POWERED BY DIVINE PURPOSE
      </footer>

      <style>{`
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);} }
        body { margin: 0; }
      `}</style>
    </div>
  );
};

export default BMEExperience;
