import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEEvents = () => {
  const [guests, setGuests] = useState(100);
  
  // Official B.M.E Colors
  const colors = {
    gold: '#C9A86A',
    ivory: '#F8F4EC',
    onyx: '#1B1B1D',
    plum: '#4C2A63'
  };

  // Logic for Package Names based on your research
  const getPackage = (count) => {
    if (count <= 75) return { name: "The Genesis Experience", desc: "Perfect for intimate, sacred gatherings." };
    if (count <= 200) return { name: "The Royal Psalms Package", desc: "Full-service planning with luxury touches." };
    if (count <= 400) return { name: "The Esther Luxury Collection", desc: "High-end, all-inclusive majesty." };
    return { name: "The Solomon Signature", desc: "Top-tier luxury and elite coordination." };
  };

  const currentPackage = getPackage(guests);
  const revenue = guests * 150; 
  const captains = Math.ceil(guests / 100);
  const servers = Math.ceil(guests / 20);

  const handleDivineVision = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: [colors.gold, '#ffffff']
    });
    alert('B.M.E: Your ' + currentPackage.name + ' vision has been elevated.');
  };

  return (
    <div style={{ backgroundColor: colors.onyx, minHeight: '100vh', color: colors.ivory, fontFamily: 'serif' }}>
      {/* Header */}
      <header style={{ padding: '60px 20px', textAlign: 'center', borderBottom: '2px solid ' + colors.gold, background: 'linear-gradient(to bottom, #2a2a2a, #1B1B1D)' }}>
        <h1 style={{ fontSize: '3.5rem', color: colors.gold, margin: 0, letterSpacing: '6px' }}>B.M.E</h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: colors.gold }}>BETHEL MAJESTY EVENTS</p>
        <p style={{ letterSpacing: '3px', opacity: 0.8 }}>BLESSED • MOMENTS • ELEVATED</p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Brand Story Section */}
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ color: colors.gold, fontSize: '2rem' }}>OUR DIVINE PURPOSE</h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Inspired by the biblical "House of God," B.M.E reflects a standard of purity, honor, and divine elegance. 
            We transform visions into breathtaking realities, ensuring every celebration carries majesty and purpose.
          </p>
        </section>

        {/* Interactive Architect Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Inputs */}
          <div style={{ background: '#252525', padding: '40px', borderRadius: '10px', border: '1px solid ' + colors.gold }}>
            <h3 style={{ color: colors.gold }}>THE DIVINE ARCHITECT</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Adjust your guest count to see your designated package.</p>
            
            <div style={{ marginTop: '40px' }}>
              <label style={{ fontSize: '1.2rem' }}>Expected Guests: <strong style={{ color: colors.gold }}>{guests}</strong></label>
              <input 
                type="range" min="50" max="1000" value={guests} 
                onChange={(e) => setGuests(e.target.value)}
                style={{ width: '100%', marginTop: '20px', accentColor: colors.gold }}
              />
            </div>

            <div style={{ marginTop: '40px', padding: '20px', border: '1px dashed ' + colors.gold }}>
              <h4 style={{ margin: 0, color: colors.gold }}>{currentPackage.name}</h4>
              <p style={{ marginBottom: 0 }}>{currentPackage.desc}</p>
            </div>

            <button 
              onClick={handleDivineVision}
              style={{ 
                marginTop: '40px', width: '100%', padding: '20px', 
                background: colors.gold, color: colors.onyx, 
                border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' 
              }}>ELEVATE MY MOMENT</button>
          </div>

          {/* Logistics / ROI */}
          <div style={{ padding: '20px' }}>
            <h3 style={{ borderBottom: '2px solid ' + colors.gold, paddingBottom: '15px' }}>MAJESTY STANDARDS</h3>
            
            <div style={{ marginTop: '30px' }}>
              <div style={{ marginBottom: '30px' }}>
                <small style={{ opacity: 0.6 }}>ESTIMATED VENUE REVENUE</small>
                <div style={{ fontSize: '2.5rem', color: colors.gold }}>${revenue.toLocaleString()}</div>
              </div>

              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <small style={{ opacity: 0.6 }}>LOGISTICS CAPTAINS</small>
                  <div style={{ fontSize: '1.8rem' }}>{captains}</div>
                </div>
                <div>
                  <small style={{ opacity: 0.6 }}>ELITE SERVERS</small>
                  <div style={{ fontSize: '1.8rem' }}>{servers}</div>
                </div>
              </div>

              <div style={{ marginTop: '40px', fontStyle: 'italic', padding: '20px', borderLeft: '4px solid ' + colors.gold, background: '#111' }}>
                "Grace. Glamour. Majesty. Your vision, crowned in excellence."
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #333', opacity: 0.5 }}>
        &copy; 2026 BETHEL MAJESTY EVENTS | CINCINNATI, OH
      </footer>
    </div>
  );
};

export default BMEEvents;
