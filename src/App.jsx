import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(150);

  // Business Logic for ROI Dashboard
  const revenuePerGuest = 150; 
  const totalRevenue = guests * revenuePerGuest;
  const staffNeeded = Math.ceil(guests / 15);
  const captains = Math.ceil(guests / 100);

  const packages = [
    { id: 'genesis', name: 'The Genesis', icon: '🕊️', price: '$8,000+', specs: ['Intimate Curation', '4-Hour Window', 'Genesis Lead Planner'] },
    { id: 'psalms', name: 'The Royal Psalms', icon: '📜', price: '$15,000+', specs: ['Full-Service Planning', 'Luxury Florals', 'AV Suite'] },
    { id: 'esther', name: 'The Esther', icon: '👑', price: '$30,000+', specs: ['All-Day Access', 'Royal Catering', 'Bespoke Design'] },
    { id: 'solomon', name: 'The Solomon', icon: '🏛️', price: '$50,000+', specs: ['Multi-Day Planning', 'Castle Lodging', 'Elite Security'] }
  ];

  const triggerCelebration = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#C9A86A', '#F8F4EC'] });
  };

  return (
    <div style={{ backgroundColor: '#0A0A0B', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif" }}>
      
      {/* Interactive Brand Kit Navigation */}
      <nav style={{ padding: '30px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #C9A86A', position: 'sticky', top: 0, backgroundColor: '#0A0A0B', zIndex: 100 }}>
        <div style={{ color: '#C9A86A', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '5px' }}>B.M.E</div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '0.8rem', letterSpacing: '2px', alignItems: 'center' }}>
          <span onClick={() => setView('home')} style={{ cursor: 'pointer', color: view === 'home' ? '#C9A86A' : '#F8F4EC' }}>VISION</span>
          <span onClick={() => setView('packages')} style={{ cursor: 'pointer', color: view === 'packages' ? '#C9A86A' : '#F8F4EC' }}>COLLECTIONS</span>
          <span onClick={() => setView('dashboard')} style={{ cursor: 'pointer', color: view === 'dashboard' ? '#C9A86A' : '#F8F4EC' }}>ROI DASHBOARD</span>
        </div>
      </nav>

      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* VIEW 1: HOME / VISION */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
            <h1 style={{ fontSize: '4.5rem', color: '#C9A86A', marginBottom: '10px' }}>BETHEL MAJESTY</h1>
            <p style={{ letterSpacing: '10px', opacity: 0.7 }}>BLESSED • MOMENTS • ELEVATED</p>
            <div style={{ height: '2px', width: '80px', background: '#C9A86A', margin: '40px auto' }}></div>
            <p style={{ maxWidth: '750px', margin: '0 auto', lineHeight: '2', fontSize: '1.1rem', fontStyle: 'italic' }}>
              "Inspired by the biblical meaning of Bethel—the house of God—B.M.E reflects a standard of purity, honor, and divine elegance."
            </p>
            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              <div style={{ padding: '20px', border: '1px solid #222' }}><h4>EXCELLENCE</h4><p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Every detail matters.</p></div>
              <div style={{ padding: '20px', border: '1px solid #222' }}><h4>GRACE</h4><p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Service with warmth.</p></div>
              <div style={{ padding: '20px', border: '1px solid #222' }}><h4>MAJESTY</h4><p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Unforgettable impact.</p></div>
            </div>
          </section>
        )}

        {/* VIEW 2: COLLECTIONS */}
        {view === 'packages' && (
          <div style={{ animation: 'fadeIn 0.8s' }}>
            <h2 style={{ textAlign: 'center', color: '#C9A86A', marginBottom: '50px', letterSpacing: '4px' }}>THE MAJESTY COLLECTION</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
              {packages.map(pkg => (
                <div key={pkg.id} onClick={triggerCelebration} style={{ background: '#111', padding: '40px 25px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#C9A86A'} onMouseOut={e => e.currentTarget.style.borderColor = '#222'}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{pkg.icon}</div>
                  <h3 style={{ color: '#C9A86A', marginBottom: '15px' }}>{pkg.name}</h3>
                  <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.85rem', opacity: 0.7, marginBottom: '25px', lineHeight: '2' }}>
                    {pkg.specs.map((s, i) => <li key={i}>+ {s}</li>)}
                  </ul>
                  <div style={{ fontWeight: 'bold', color: '#C9A86A' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: ROI DASHBOARD */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 0.8s', background: '#111', padding: '50px', border: '1px solid #C9A86A' }}>
            <h2 style={{ color: '#C9A86A', marginBottom: '10px' }}>MAJESTY ROI CALCULATOR</h2>
            <p style={{ opacity: 0.6, marginBottom: '40px' }}>Professional Logistics & Revenue Projection for Cincinnati Venue.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '20px', color: '#C9A86A' }}>ESTIMATED GUEST COUNT: {guests}</label>
                <input type="range" min="50" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A' }} />
                <div style={{ marginTop: '40px', padding: '20px', background: '#0A0A0B', borderLeft: '3px solid #C9A86A' }}>
                  <h4 style={{ margin: 0 }}>VENUE REVENUE</h4>
                  <div style={{ fontSize: '2.5rem', color: '#C9A86A' }}>${totalRevenue.toLocaleString()}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '20px', background: '#0A0A0B', textAlign: 'center' }}>
                  <small style={{ opacity: 0.5 }}>EVENT CAPTAINS</small>
                  <div style={{ fontSize: '2rem' }}>{captains}</div>
                </div>
                <div style={{ padding: '20px', background: '#0A0A0B', textAlign: 'center' }}>
                  <small style={{ opacity: 0.5 }}>ELITE SERVERS</small>
                  <div style={{ fontSize: '2rem' }}>{staffNeeded}</div>
                </div>
                <div style={{ gridColumn: 'span 2', padding: '20px', background: '#0A0A0B' }}>
                  <small style={{ opacity: 0.5 }}>MARKET FEASIBILITY</small>
                  <p style={{ fontSize: '0.9rem', color: '#C9A86A' }}>High Demand - Cincinnati/NKY Area</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.3, borderTop: '1px solid #222' }}>
        &copy; 2026 BETHEL MAJESTY EVENTS | BLESSED • MOMENTS • ELEVATED
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default BMEPortal;
