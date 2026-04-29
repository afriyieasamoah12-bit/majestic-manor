import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (view === 'tour') {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#C9A86A', '#ffffff'] });
    }
  }, [view]);

  // Financial Engine Logic
  const revPerGuest = 250;
  const gross = guests * revPerGuest;
  const opex = gross * 0.45; // 45% Operational (Staff/Food)
  const capex = gross * 0.10; // 10% Reserve for Build-out
  const netProfit = gross - opex - capex;

  const packages = [
    { id: 'genesis', name: 'The Genesis', icon: '🕊️', price: '$8k+', desc: 'Intimate. Sacred. Purposeful.', specs: ['4-Hour Sanctuary Access', 'Intimate Decor Suite', 'Lead Planner'] },
    { id: 'psalms', name: 'The Royal Psalms', icon: '📜', price: '$15k+', specs: ['6-Hour Window', 'Premium Floral Design', 'Full AV Suite'] },
    { id: 'esther', name: 'The Esther', icon: '👑', price: '$30k+', specs: ['Full-Service Planning', 'Royal Catering', 'Bespoke Styling'] },
    { id: 'solomon', name: 'The Solomon', icon: '🏛️', price: '$50k+', specs: ['Multi-Day Access', 'Castle Lodging', 'Elite Security'] }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif" }}>
      
      {/* NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(5,5,5,0.95)', borderBottom: '1px solid #C9A86A', backdropFilter: 'blur(10px)' }}>
        <div style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '5px', cursor: 'pointer' }}>B.M.E</div>
          <button onClick={() => setView('tour')} style={{ background: '#C9A86A', color: '#050505', border: 'none', padding: '12px 25px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px' }}>BOOK A TOUR</button>
        </div>
        <div style={{ padding: '10px 50px', display: 'flex', gap: '25px', fontSize: '0.65rem', letterSpacing: '2px', borderTop: '1px solid #111', overflowX: 'auto' }}>
          {['HOME', 'ABOUT', 'WEDDINGS', 'CORPORATE', 'SOCIAL', 'FOOD', 'COLLECTIONS', 'DASHBOARD'].map(item => (
            <span key={item} onClick={() => setView(item.toLowerCase())} style={{ cursor: 'pointer', color: view === item.toLowerCase() ? '#C9A86A' : '#777' }}>{item}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>

        {view === 'home' && (
          <section style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '7rem', color: '#C9A86A', margin: '0' }}>MAJESTY</h1>
            <p style={{ letterSpacing: '15px', opacity: 0.6 }}>BLESSED • MOMENTS • ELEVATED</p>
          </section>
        )}

        {view === 'corporate' && (
          <div style={{ animation: 'fadeIn 1s' }}>
             <h2 style={{ color: '#C9A86A', fontSize: '3rem', textAlign: 'center' }}>KINGDOM COMMERCE</h2>
             <p style={{ textAlign: 'center', opacity: 0.6, letterSpacing: '3px', marginBottom: '60px' }}>EXECUTIVE RETREATS & GALAS</p>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div style={{ padding: '40px', background: '#111', borderLeft: '4px solid #C9A86A' }}>
                   <h3>The Earth Elegance Gala</h3>
                   <p>A zero-waste, immersive dining experience featuring biophilic design, 360-degree projection mapping, and a menu sourced entirely from Cincinnati regenerative farms.</p>
                </div>
                <div style={{ padding: '40px', background: '#111', borderLeft: '4px solid #C9A86A' }}>
                   <h3>Innovation Sprints</h3>
                   <p>High-tech retreats for executive boards. Includes digital detox hours, forest bathing in our estate woods, and AI-assisted strategic workshops.</p>
                </div>
             </div>
          </div>
        )}

        {view === 'social' && (
          <div style={{ animation: 'fadeIn 1s' }}>
             <h2 style={{ color: '#C9A86A', fontSize: '3rem', textAlign: 'center' }}>MAJESTIC MILESTONES</h2>
             <p style={{ textAlign: 'center', opacity: 0.6, letterSpacing: '3px', marginBottom: '60px' }}>LIFE'S MOST SACRED MOMENTS</p>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div style={{ background: '#0A0A0A', padding: '30px', border: '1px solid #222' }}>
                   <h4 style={{ color: '#C9A86A' }}>Legacy Anniversaries</h4>
                   <p style={{ fontSize: '0.85rem' }}>A multi-event weekend celebration honoring decades of commitment with custom "Covenant Documentary" screenings.</p>
                </div>
                <div style={{ background: '#0A0A0A', padding: '30px', border: '1px solid #222' }}>
                   <h4 style={{ color: '#C9A86A' }}>Coming-of-Age</h4>
                   <p style={{ fontSize: '0.85rem' }}>Quinceañeras and Bar Mitzvahs transformed into Royal Court experiences with choreographed drone light shows.</p>
                </div>
                <div style={{ background: '#0A0A0A', padding: '30px', border: '1px solid #222' }}>
                   <h4 style={{ color: '#C9A86A' }}>Themed Soirées</h4>
                   <p style={{ fontSize: '0.85rem' }}>From Amalfi Coast brunches to "Luxe Galactic Noir" birthdays, we bring world-class concepts to life.</p>
                </div>
             </div>
          </div>
        )}

        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 1s' }}>
             <h2 style={{ color: '#C9A86A', textAlign: 'center', marginBottom: '60px' }}>THE MAJESTY COLLECTION</h2>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
                {packages.map(pkg => (
                   <div key={pkg.id} style={{ background: '#111', padding: '40px', border: '1px solid #333', textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{pkg.icon}</div>
                      <h3 style={{ color: '#C9A86A' }}>{pkg.name}</h3>
                      <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.8rem', opacity: 0.6, margin: '20px 0' }}>
                         {pkg.specs.map((s, i) => <li key={i}>• {s}</li>)}
                      </ul>
                      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#C9A86A' }}>{pkg.price}</div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {view === 'tour' && (
          <div style={{ animation: 'fadeIn 1s' }}>
             <h2 style={{ color: '#C9A86A', textAlign: 'center' }}>VIRTUAL MANOR EXPERIENCE</h2>
             <div style={{ 
                height: '500px', width: '100%', marginTop: '40px', background: 'radial-gradient(circle, #2a2a2a 0%, #050505 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden',
                boxShadow: 'inset 0 0 100px #C9A86A'
             }}>
                <div style={{ 
                  width: '200px', height: '400px', border: '1px solid rgba(201,168,106,0.5)',
                  background: 'linear-gradient(to top, #C9A86A, transparent)', filter: 'blur(2px)',
                  animation: 'glow 3s infinite alternate', opacity: 0.4
                }}></div>
                <div style={{ position: 'absolute', textAlign: 'center', zIndex: 10 }}>
                   <h3 style={{ letterSpacing: '5px' }}>ESTATE BALLROOM GLOW</h3>
                   <p style={{ opacity: 0.6 }}>Interactive Lighting Enabled</p>
                </div>
             </div>
          </div>
        )}

        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 1s' }}>
             <h2 style={{ color: '#C9A86A', textAlign: 'center', marginBottom: '40px' }}>MAJESTY FINANCIAL ENGINE</h2>
             <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A' }} />
             
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '50px' }}>
                <div style={{ background: '#111', padding: '30px', textAlign: 'center' }}>
                   <small>GROSS REVENUE</small>
                   <div style={{ fontSize: '2rem', color: '#C9A86A' }}>${gross.toLocaleString()}</div>
                </div>
                <div style={{ background: '#111', padding: '30px', textAlign: 'center' }}>
                   <small>OPEX (45%)</small>
                   <div style={{ fontSize: '2rem', color: '#ff4d4d' }}>-${opex.toLocaleString()}</div>
                </div>
                <div style={{ background: '#111', padding: '30px', textAlign: 'center', border: '1px solid #C9A86A' }}>
                   <small>NET PROFIT</small>
                   <div style={{ fontSize: '2rem' }}>${netProfit.toLocaleString()}</div>
                </div>
             </div>
             
             <div style={{ marginTop: '40px', padding: '20px', background: '#0A0A0A', textAlign: 'center', border: '1px dashed #333' }}>
                <h4 style={{ color: '#C9A86A' }}>CAPITAL RESERVE (10%): ${capex.toLocaleString()}</h4>
                <p style={{ fontSize: '0.8rem' }}>Allocated for $7M Construction Maintenance and Aerial Fleet Upgrades.</p>
             </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #222' }}>
         <p style={{ opacity: 0.3 }}>B.M.E | CINCINNATI | BLESSED MOMENTS ELEVATED</p>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { from { box-shadow: 0 0 10px #C9A86A; } to { box-shadow: 0 0 50px #4C2A63; } }
        body { margin: 0; background: #050505; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
