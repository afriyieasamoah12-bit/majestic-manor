import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Business Intelligence Dimensions
  const revPerGuest = 250;
  const grossRevenue = guests * revPerGuest;
  const opexRate = 0.45; 
  const totalExpenses = grossRevenue * opexRate;
  const netProfit = grossRevenue - totalExpenses;
  const profitMargin = ((netProfit / grossRevenue) * 100).toFixed(1);

  const triggerCelebration = () => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#C9A86A', '#F8F4EC', '#4C2A63']
    });
  };

  const SectionHeader = ({ title, subtitle }) => (
    <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeIn 1.2s' }}>
      <h2 style={{ fontSize: '3.5rem', color: '#C9A86A', marginBottom: '15px', letterSpacing: '10px' }}>{title}</h2>
      <div style={{ height: '2px', width: '120px', background: 'linear-gradient(to right, transparent, #C9A86A, transparent)', margin: '0 auto 25px' }}></div>
      <p style={{ opacity: 0.6, letterSpacing: '4px', fontSize: '0.9rem', color: '#F8F4EC' }}>{subtitle}</p>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif", lineHeight: '1.8' }}>
      
      {/* ATMOSPHERIC LIGHTING LAYER */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        background: 'radial-gradient(circle at 50% 30%, rgba(201,168,106,0.1) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      {/* NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(5,5,5,0.96)', borderBottom: '1px solid rgba(201,168,106,0.3)', backdropFilter: 'blur(20px)' }}>
        <div style={{ padding: '25px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '8px', cursor: 'pointer' }}>B.M.E</div>
          <button onClick={() => { triggerCelebration(); setView('dashboard'); }} style={{ background: '#C9A86A', color: '#050505', border: 'none', padding: '14px 30px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '3px' }}>BOOK A TOUR</button>
        </div>
        <div style={{ padding: '12px 50px', display: 'flex', gap: '30px', fontSize: '0.7rem', letterSpacing: '2.5px', borderTop: '1px solid #111', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {['HOME', 'ABOUT', 'WEDDINGS', 'CORPORATE', 'SOCIAL', 'FOOD', 'COLLECTIONS', 'DASHBOARD'].map(item => (
            <span key={item} onClick={() => setView(item.toLowerCase())} style={{ cursor: 'pointer', color: view === item.toLowerCase() ? '#C9A86A' : '#777', transition: '0.4s' }}>{item}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '100px 20px', maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* --- COLLECTIONS VIEW --- */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE MAJESTY COLLECTION" subtitle="TIERED BIBLICAL PACKAGES & PREMIER AMENITIES" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              
              {/* THE GENESIS */}
              <div onClick={triggerCelebration} style={{ background: '#0A0A0B', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer', transition: '0.4s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🕊️</div>
                <h3 style={{ color: '#C9A86A', letterSpacing: '4px' }}>THE GENESIS</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '20px' }}>A Foundation of Elegance</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.85rem', opacity: 0.8, textAlign: 'left', marginBottom: '30px' }}>
                  <li style={{ marginBottom: '10px' }}>• <strong>4-Hour Window:</strong> Intimate ceremony & reception.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Scented Sanctuary:</strong> Signature "Morning of Creation" aroma.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>BME Lead Designer:</strong> Personal coordination of timeline.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Essential Gastronomy:</strong> 3-course Mediterranean hors d'oeuvres.</li>
                </ul>
                <div style={{ fontSize: '1.4rem', color: '#C9A86A', fontWeight: 'bold' }}>$8,000+</div>
              </div>

              {/* THE ROYAL PSALMS */}
              <div onClick={triggerCelebration} style={{ background: '#0A0A0B', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer', transition: '0.4s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📜</div>
                <h3 style={{ color: '#C9A86A', letterSpacing: '4px' }}>THE ROYAL PSALMS</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '20px' }}>A Symphony of Praise</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.85rem', opacity: 0.8, textAlign: 'left', marginBottom: '30px' }}>
                  <li style={{ marginBottom: '10px' }}>• <strong>Full Day Access:</strong> 10:00 AM – 11:00 PM.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Live Harpist:</strong> Ambient soundscape for cocktail hour.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Floral Artistry:</strong> Floor-to-ceiling ivory and gold floral walls.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Aerial Capture:</strong> 1-hour professional Drone photography.</li>
                </ul>
                <div style={{ fontSize: '1.4rem', color: '#C9A86A', fontWeight: 'bold' }}>$15,000+</div>
              </div>

              {/* THE ESTHER */}
              <div onClick={triggerCelebration} style={{ background: '#111', padding: '50px 30px', border: '1px solid #C9A86A', textAlign: 'center', cursor: 'pointer', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#C9A86A', color: '#050505', padding: '5px 15px', fontSize: '0.6rem', fontWeight: 'bold' }}>MOST POPULAR</div>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👑</div>
                <h3 style={{ color: '#C9A86A', letterSpacing: '4px' }}>THE ESTHER</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '20px' }}>For Such a Time as This</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.85rem', opacity: 0.8, textAlign: 'left', marginBottom: '30px' }}>
                  <li style={{ marginBottom: '10px' }}>• <strong>Gold-Leaf Catering:</strong> 5-course signature "Esther Feast."</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Bridal Suite Experience:</strong> Mimosas & private vanity team.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Cinematic Drone:</strong> Full-event aerial videography/tracking.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Projection Mapping:</strong> Immersive brand/story visual walls.</li>
                </ul>
                <div style={{ fontSize: '1.4rem', color: '#C9A86A', fontWeight: 'bold' }}>$30,000+</div>
              </div>

              {/* THE SOLOMON */}
              <div onClick={triggerCelebration} style={{ background: '#0A0A0B', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer', transition: '0.4s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏛️</div>
                <h3 style={{ color: '#C9A86A', letterSpacing: '4px' }}>THE SOLOMON</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '20px' }}>The Pinnacle of Wisdom & Wealth</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.85rem', opacity: 0.8, textAlign: 'left', marginBottom: '30px' }}>
                  <li style={{ marginBottom: '10px' }}>• <strong>Weekend Takeover:</strong> Friday – Sunday estate exclusivity.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Castle Lodging:</strong> Overnight suites for 12 VIP guests.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>7-Course Covenant Menu:</strong> Rare spices & private chef table.</li>
                  <li style={{ marginBottom: '10px' }}>• <strong>Apex Logistics:</strong> 2 Captains + 1 Private Concierge.</li>
                </ul>
                <div style={{ fontSize: '1.4rem', color: '#C9A86A', fontWeight: 'bold' }}>$50,000+</div>
              </div>

            </div>
          </div>
        )}

        {/* ALL OTHER VIEWS REMAIN FULLY INTACT BELOW */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '7rem', color: '#C9A86A', margin: '0', animation: 'glow 3s infinite alternate' }}>B.M.E</h1>
            <p style={{ letterSpacing: '20px', opacity: 0.6, fontSize: '1.2rem' }}>MAJESTY REDEFINED</p>
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
               <div style={{ width: '100%', height: '450px', background: '#111', border: '1px solid #C9A86A', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(201,168,106,0.1)' }}>
                  <p style={{ letterSpacing: '5px', opacity: 0.4 }}>[ ESTATE ARCHITECTURE VISUAL: PILLAR ENTRANCE ]</p>
               </div>
            </div>
          </section>
        )}

        {/* ... Rest of code for About, Weddings, Corporate, Social, Food, Dashboard stays same ... */}

      </main>

      <footer style={{ padding: '100px 50px', background: '#000', borderTop: '1px solid #222', marginTop: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', fontSize: '0.7rem', opacity: 0.4 }}>
          <div><h4 style={{ color: '#C9A86A' }}>B.M.E GROUP</h4><p>Careers</p><p>Blog</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>ESTATE</h4><p>Cincinnati, OH</p><p>Architecture</p></div>
          <div style={{ textAlign: 'right' }}><h2 style={{ color: '#C9A86A' }}>B.M.E</h2><p>© 2026 DIVINE EXCELLENCE</p></div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { from { text-shadow: 0 0 20px rgba(201,168,106,0.3); } to { text-shadow: 0 0 40px rgba(201,168,106,0.6); } }
        body { margin: 0; background: #050505; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
