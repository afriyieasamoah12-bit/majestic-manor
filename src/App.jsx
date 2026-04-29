import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416); // Updated to your latest guest count

  const packages = [
    { id: 'genesis', name: 'The Genesis', icon: '🕊️', price: '$8,000+', specs: ['Intimate Curation', '4-Hour Window', 'Lead Planner'] },
    { id: 'psalms', name: 'The Royal Psalms', icon: '📜', price: '$15,000+', specs: ['Full-Service Planning', 'Luxury Florals', 'AV Suite'] },
    { id: 'esther', name: 'The Esther', icon: '👑', price: '$30,000+', specs: ['All-Day Access', 'Royal Catering', 'Bespoke Design'] },
    { id: 'solomon', name: 'The Solomon', icon: '🏛️', price: '$50,000+', specs: ['Multi-Day Planning', 'Castle Lodging', 'Elite Security'] }
  ];

  const colors = [
    { name: 'Majestic Gold', hex: '#C9A86A', use: 'Primary Brilliance' },
    { name: 'Deep Onyx', hex: '#1B1B1D', use: 'Sophistication' },
    { name: 'Ivory White', hex: '#F8F4EC', use: 'Purity & Elegance' },
    { name: 'Royal Plum', hex: '#4C2A63', use: 'Biblical Royalty' }
  ];

  const triggerCelebration = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#C9A86A', '#F8F4EC'] });
  };

  return (
    <div style={{ backgroundColor: '#0A0A0B', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif" }}>
      
      {/* Premium Fixed Navigation */}
      <nav style={{ padding: '25px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,168,106,0.3)', position: 'sticky', top: 0, backgroundColor: 'rgba(10,10,11,0.95)', zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div style={{ color: '#C9A86A', fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '6px' }}>B.M.E</div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '0.75rem', letterSpacing: '3px', alignItems: 'center' }}>
          {['VISION', 'COLLECTIONS', 'ROI DASHBOARD', 'BRAND KIT'].map((item) => (
            <span key={item} onClick={() => setView(item.toLowerCase().replace(' ', ''))} style={{ cursor: 'pointer', color: view === item.toLowerCase().replace(' ', '') ? '#C9A86A' : '#F8F4EC', transition: '0.3s' }}>{item}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* VIEW: HOME / VISION */}
        {view === 'vision' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
            <h1 style={{ fontSize: '5rem', color: '#C9A86A', marginBottom: '0px' }}>MAJESTY</h1>
            <p style={{ letterSpacing: '12px', opacity: 0.7, fontSize: '0.9rem' }}>BLESSED • MOMENTS • ELEVATED</p>
            <div style={{ height: '1px', width: '150px', background: 'linear-gradient(to right, transparent, #C9A86A, transparent)', margin: '40px auto' }}></div>
            <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '2.2', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: '300' }}>
              "Transforming visions into breathtaking realities through heart-centered service and luxury execution."
            </p>
            <button onClick={triggerCelebration} style={{ marginTop: '60px', padding: '20px 50px', background: 'transparent', border: '1px solid #C9A86A', color: '#C9A86A', cursor: 'pointer', letterSpacing: '4px' }}>INITIALIZE GALA</button>
          </section>
        )}

        {/* VIEW: COLLECTIONS */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 0.8s' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
              {packages.map(pkg => (
                <div key={pkg.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', transition: '0.4s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
                  <h3 style={{ color: '#C9A86A', marginBottom: '15px', letterSpacing: '2px' }}>{pkg.name}</h3>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '20px' }}>{pkg.specs[0]}</p>
                  <div style={{ fontWeight: 'bold', color: '#C9A86A', fontSize: '1.2rem' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: ROI DASHBOARD */}
        {view === 'roidashboard' && (
          <div style={{ animation: 'fadeIn 0.8s', background: '#111', padding: '60px', border: '1px solid #C9A86A' }}>
            <h2 style={{ color: '#C9A86A', letterSpacing: '3px' }}>MARKET ANALYSIS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginTop: '40px' }}>
              <div>
                <label style={{ color: '#C9A86A', fontSize: '0.8rem' }}>GUEST CAPACITY: {guests}</label>
                <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '20px' }} />
                <div style={{ marginTop: '50px' }}>
                  <small style={{ opacity: 0.5 }}>PROJECTED REVENUE</small>
                  <div style={{ fontSize: '3.5rem', color: '#C9A86A' }}>${(guests * 200).toLocaleString()}</div>
                </div>
              </div>
              <div style={{ borderLeft: '1px solid #333', paddingLeft: '40px' }}>
                <h4 style={{ color: '#C9A86A' }}>CINCINNATI LOGISTICS</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Recommended Staffing for {guests} Guests:</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                  <div style={{ background: '#0A0A0B', padding: '15px', flex: 1 }}>{Math.ceil(guests/100)} Captains</div>
                  <div style={{ background: '#0A0A0B', padding: '15px', flex: 1 }}>{Math.ceil(guests/12)} Servers</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: BRAND KIT */}
        {view === 'brandkit' && (
          <div style={{ animation: 'fadeIn 0.8s' }}>
            <h2 style={{ textAlign: 'center', color: '#C9A86A', marginBottom: '60px' }}>B.M.E IDENTITY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div style={{ background: '#111', padding: '40px' }}>
                <h4 style={{ color: '#C9A86A', marginBottom: '30px' }}>PALETTE</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {colors.map(c => (
                    <div key={c.hex} style={{ textAlign: 'center' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: c.hex, margin: '0 auto 10px', border: '1px solid #333' }}></div>
                      <small style={{ fontSize: '0.6rem' }}>{c.name}</small>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#111', padding: '40px' }}>
                <h4 style={{ color: '#C9A86A', marginBottom: '20px' }}>TYPOGRAPHY</h4>
                <div style={{ fontSize: '2rem' }}>Cinzel Regular</div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'serif', marginTop: '10px', opacity: 0.6 }}>Cormorant Garamond</div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '80px', textAlign: 'center', opacity: 0.2, fontSize: '0.7rem', letterSpacing: '5px' }}>
        ESTABLISHED 2026 | B.M.E EXCELLENCE
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        body { margin: 0; background: #0A0A0B; cursor: crosshair; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
