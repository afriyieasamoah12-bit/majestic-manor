import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  // Setting 'home' as the default so the front page is never empty
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  const triggerCelebration = () => {
    confetti({ 
      particleCount: 150, 
      spread: 70, 
      origin: { y: 0.6 }, 
      colors: ['#C9A86A', '#F8F4EC', '#4C2A63'] 
    });
  };

  const packages = [
    { id: 'genesis', name: 'The Genesis', icon: '🕊️', price: '$8,000+', specs: ['Intimate Curation', '4-Hour Window', 'Genesis Lead Planner'] },
    { id: 'psalms', name: 'The Royal Psalms', icon: '📜', price: '$15,000+', specs: ['Full-Service Planning', 'Luxury Florals', 'AV Suite'] },
    { id: 'esther', name: 'The Esther', icon: '👑', price: '$30,000+', specs: ['All-Day Access', 'Royal Catering', 'Bespoke Design'] },
    { id: 'solomon', name: 'The Solomon', icon: '🏛️', price: '$50,000+', specs: ['Multi-Day Planning', 'Castle Lodging', 'Elite Security'] }
  ];

  return (
    <div style={{ backgroundColor: '#0A0A0B', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif", transition: '0.5s' }}>
      
      {/* Fixed Navigation */}
      <nav style={{ 
        padding: '25px 50px', display: 'flex', justifyContent: 'space-between', 
        borderBottom: '1px solid rgba(201,168,106,0.3)', position: 'sticky', top: 0, 
        backgroundColor: 'rgba(10,10,11,0.95)', zIndex: 100, backdropFilter: 'blur(10px)' 
      }}>
        <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '6px', cursor: 'pointer' }}>B.M.E</div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '0.7rem', letterSpacing: '2px', alignItems: 'center' }}>
          <span onClick={() => setView('home')} style={{ cursor: 'pointer', color: view === 'home' ? '#C9A86A' : '#F8F4EC' }}>VISION</span>
          <span onClick={() => setView('collections')} style={{ cursor: 'pointer', color: view === 'collections' ? '#C9A86A' : '#F8F4EC' }}>COLLECTIONS</span>
          <span onClick={() => setView('dashboard')} style={{ cursor: 'pointer', color: view === 'dashboard' ? '#C9A86A' : '#F8F4EC' }}>ROI DASHBOARD</span>
          <span onClick={() => setView('brandkit')} style={{ cursor: 'pointer', color: view === 'brandkit' ? '#C9A86A' : '#F8F4EC' }}>BRAND KIT</span>
        </div>
      </nav>

      <main style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* VIEW 1: HOME / VISION (The "Front Page") */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
            <h1 style={{ fontSize: '5.5rem', color: '#C9A86A', marginBottom: '0', textShadow: '0 0 30px rgba(201,168,106,0.2)' }}>MAJESTY</h1>
            <p style={{ letterSpacing: '15px', opacity: 0.8, fontSize: '1rem', marginTop: '10px' }}>BETHEL MAJESTY EVENTS</p>
            <div style={{ height: '1px', width: '200px', background: 'linear-gradient(to right, transparent, #C9A86A, transparent)', margin: '40px auto' }}></div>
            <h2 style={{ fontWeight: '300', fontStyle: 'italic', fontSize: '1.5rem', color: '#C9A86A' }}>"Blessed • Moments • Elevated"</h2>
            <p style={{ maxWidth: '700px', margin: '30px auto', lineHeight: '2', opacity: 0.8 }}>
              Inspired by the biblical "House of God," we craft elite experiences in Cincinnati with heart-centered service and divine excellence.
            </p>
            <button onClick={() => setView('collections')} style={{ marginTop: '40px', padding: '18px 45px', background: 'transparent', border: '1px solid #C9A86A', color: '#C9A86A', cursor: 'pointer', letterSpacing: '3px', fontWeight: 'bold' }}>
              EXPLORE THE COLLECTION
            </button>
          </section>
        )}

        {/* VIEW 2: COLLECTIONS (The Packages) */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 0.6s' }}>
            <h2 style={{ textAlign: 'center', color: '#C9A86A', letterSpacing: '5px', marginBottom: '60px' }}>THE MAJESTY COLLECTION</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {packages.map(pkg => (
                <div key={pkg.id} onClick={triggerCelebration} style={{ background: '#121214', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer', transition: '0.4s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
                  <h3 style={{ color: '#C9A86A', letterSpacing: '2px' }}>{pkg.name}</h3>
                  <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.8rem', opacity: 0.6, margin: '20px 0', lineHeight: '1.8' }}>
                    {pkg.specs.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                  <div style={{ fontWeight: 'bold', color: '#C9A86A', fontSize: '1.2rem' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: ROI DASHBOARD */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 0.6s', background: '#111', padding: '60px', border: '1px solid #C9A86A', borderRadius: '4px' }}>
            <h2 style={{ color: '#C9A86A', letterSpacing: '4px' }}>VENUE FEASIBILITY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginTop: '40px' }}>
              <div>
                <label style={{ color: '#C9A86A', fontSize: '0.8rem', letterSpacing: '2px' }}>GUEST COUNT: {guests}</label>
                <input type="range" min="50" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '20px' }} />
                <div style={{ marginTop: '50px' }}>
                  <small style={{ opacity: 0.5, letterSpacing: '2px' }}>PROJECTED REVENUE</small>
                  <div style={{ fontSize: '3.5rem', color: '#C9A86A' }}>${(guests * 200).toLocaleString()}</div>
                </div>
              </div>
              <div style={{ borderLeft: '1px solid #333', paddingLeft: '40px' }}>
                <h4 style={{ color: '#C9A86A', margin: '0 0 20px 0' }}>CINCINNATI OPERATIONS</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Logistics for {guests} Guests:</p>
                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ background: '#0A0A0B', padding: '15px' }}>✨ {Math.ceil(guests/100)} Event Captains</div>
                  <div style={{ background: '#0A0A0B', padding: '15px' }}>🥂 {Math.ceil(guests/12)} Elite Servers</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: BRAND KIT */}
        {view === 'brandkit' && (
          <div style={{ animation: 'fadeIn 0.6s' }}>
            <h2 style={{ textAlign: 'center', color: '#C9A86A', marginBottom: '60px' }}>B.M.E IDENTITY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div style={{ background: '#111', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A', marginBottom: '30px', letterSpacing: '2px' }}>PALETTE</h4>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div style={{ textAlign: 'center' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#C9A86A', margin: '0 auto 10px' }}></div><small>GOLD</small></div>
                  <div style={{ textAlign: 'center' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#1B1B1D', margin: '0 auto 10px', border: '1px solid #333' }}></div><small>ONYX</small></div>
                  <div style={{ textAlign: 'center' }}><div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#F8F4EC', margin: '0 auto 10px' }}></div><small>IVORY</small></div>
                </div>
              </div>
              <div style={{ background: '#111', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A', marginBottom: '20px', letterSpacing: '2px' }}>TYPOGRAPHY</h4>
                <div style={{ fontSize: '2.2rem' }}>Cinzel Regular</div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'serif', marginTop: '10px', opacity: 0.6, fontStyle: 'italic' }}>Cormorant Garamond</div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.2, fontSize: '0.7rem', letterSpacing: '5px' }}>
        &copy; 2026 BETHEL MAJESTY EVENTS | THE HOUSE OF GOD
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        body { margin: 0; background: #0A0A0B; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
