import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  const packages = [
    { id: 'genesis', name: 'The Genesis', icon: '🕊️', price: '$8,000+', specs: ['Scented Sanctuary', 'Intimate Curation', '4-Hour Window'] },
    { id: 'psalms', name: 'The Royal Psalms', icon: '📜', price: '$15,000+', specs: ['Live Harpist', 'Luxury Florals', 'Bespoke Menu'] },
    { id: 'esther', name: 'The Esther', icon: '👑', price: '$30,000+', specs: ['Gold-Leaf Catering', 'All-Day Estate Access', 'Concierge Escort'] },
    { id: 'solomon', name: 'The Solomon', icon: '🏛️', price: '$50,000+', specs: ['7-Course Covenant Menu', 'Drone Aerial Escort', 'Castle Lodging'] }
  ];

  const benefits = [
    { title: 'SENSORY BRANDING', desc: 'Custom venue scents (Frankincense & Gold) designed for every event.' },
    { title: 'COVENANT DINING', desc: 'Biblical-inspired gastronomy featuring 24k gold leaf and ancient spices.' },
    { title: 'AERIAL GUARDIAN', desc: 'Drone-assisted security and cinematic arrival coverage for VIP guests.' }
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif" }}>
      
      <nav style={{ padding: '25px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,168,106,0.3)', position: 'sticky', top: 0, backgroundColor: 'rgba(5,5,5,0.9)', zIndex: 100, backdropFilter: 'blur(15px)' }}>
        <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '6px', cursor: 'pointer' }}>B.M.E</div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '0.7rem', letterSpacing: '2px', alignItems: 'center' }}>
          <span onClick={() => setView('home')} style={{ cursor: 'pointer', color: view === 'home' ? '#C9A86A' : '#F8F4EC' }}>VISION</span>
          <span onClick={() => setView('collections')} style={{ cursor: 'pointer', color: view === 'collections' ? '#C9A86A' : '#F8F4EC' }}>COLLECTIONS</span>
          <span onClick={() => setView('benefits')} style={{ cursor: 'pointer', color: view === 'benefits' ? '#C9A86A' : '#F8F4EC' }}>APEX AMENITIES</span>
          <span onClick={() => setView('dashboard')} style={{ cursor: 'pointer', color: view === 'dashboard' ? '#C9A86A' : '#F8F4EC' }}>ROI</span>
        </div>
      </nav>

      <main style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {view === 'home' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
            <h1 style={{ fontSize: '6rem', color: '#C9A86A', marginBottom: '0' }}>MAJESTY</h1>
            <p style={{ letterSpacing: '15px', opacity: 0.8, fontSize: '0.8rem' }}>THE WORLD'S PREMIER BIBLICAL ESTATE</p>
            <p style={{ maxWidth: '600px', margin: '40px auto', lineHeight: '2.2', fontStyle: 'italic', opacity: 0.7 }}>
              "Crafting events with heavenly elegance for those who demand the pinnacle of excellence."
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
              <button onClick={() => setView('benefits')} style={{ padding: '15px 40px', background: '#C9A86A', color: '#050505', border: 'none', cursor: 'pointer', fontWeight: 'bold', letterSpacing: '2px' }}>THE EXPERIENCE</button>
              <button onClick={() => setView('collections')} style={{ padding: '15px 40px', background: 'transparent', color: '#C9A86A', border: '1px solid #C9A86A', cursor: 'pointer', fontWeight: 'bold', letterSpacing: '2px' }}>THE PACKAGES</button>
            </div>
          </section>
        )}

        {view === 'benefits' && (
          <div style={{ animation: 'fadeIn 0.8s' }}>
            <h2 style={{ textAlign: 'center', color: '#C9A86A', letterSpacing: '5px', marginBottom: '60px' }}>WORLD-CLASS INTEGRATION</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ padding: '40px', border: '1px solid #C9A86A', background: 'rgba(201,168,106,0.05)', textAlign: 'left' }}>
                  <h3 style={{ color: '#C9A86A', marginBottom: '20px' }}>{b.title}</h3>
                  <p style={{ opacity: 0.7, lineHeight: '1.8' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'collections' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', animation: 'fadeIn 0.8s' }}>
            {packages.map(pkg => (
              <div key={pkg.id} style={{ background: '#111', padding: '40px 30px', border: '1px solid #222', textAlign: 'center', transition: '0.4s' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
                <h3 style={{ color: '#C9A86A' }}>{pkg.name}</h3>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.8rem', opacity: 0.6, margin: '20px 0' }}>
                  {pkg.specs.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
                <div style={{ fontWeight: 'bold', color: '#C9A86A' }}>{pkg.price}</div>
              </div>
            ))}
          </div>
        )}

        {view === 'dashboard' && (
          <div style={{ background: '#111', padding: '60px', border: '1px solid #C9A86A', animation: 'fadeIn 0.8s' }}>
             <h2 style={{ color: '#C9A86A' }}>MAJESTY ROI</h2>
             <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '40px' }} />
             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                <div><small>PROJECTED GUESTS</small><h3>{guests}</h3></div>
                <div><small>STAFFING REQUIREMENT</small><h3>{Math.ceil(guests/10)} Captains/Servers</h3></div>
                <div><small>GROSS REVENUE</small><h3 style={{color: '#C9A86A'}}>${(guests * 250).toLocaleString()}</h3></div>
             </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.2, fontSize: '0.7rem' }}>B.M.E | GLOBAL EXCELLENCE</footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        body { margin: 0; background: #050505; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
