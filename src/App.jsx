import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Apex ROI Logic
  const revPerGuest = 250;
  const grossRevenue = guests * revPerGuest;
  const opexRate = 0.45; // 45% operational overhead
  const totalExpenses = grossRevenue * opexRate;
  const netProfit = grossRevenue - totalExpenses;
  const profitMargin = ((netProfit / grossRevenue) * 100).toFixed(1);

  const triggerConfetti = () => {
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
      
      {/* ATMOSPHERIC LIGHTING BACKGROUND */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        background: 'radial-gradient(circle at 50% 20%, rgba(201,168,106,0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      {/* LUXURY NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(5,5,5,0.96)', borderBottom: '1px solid rgba(201,168,106,0.3)', backdropFilter: 'blur(20px)' }}>
        <div style={{ padding: '25px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '8px', cursor: 'pointer' }}>B.M.E</div>
          <button onClick={() => { setView('dashboard'); triggerConfetti(); }} style={{ background: '#C9A86A', color: '#050505', border: 'none', padding: '14px 30px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '3px', transition: '0.3s' }}>BOOK THE VISION</button>
        </div>
        <div style={{ padding: '12px 50px', display: 'flex', gap: '30px', fontSize: '0.7rem', letterSpacing: '2.5px', borderTop: '1px solid #111', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {['HOME', 'ABOUT', 'WEDDINGS', 'CORPORATE', 'SOCIAL', 'FOOD', 'COLLECTIONS', 'DASHBOARD'].map(item => (
            <span key={item} onClick={() => setView(item.toLowerCase())} style={{ cursor: 'pointer', color: view === item.toLowerCase() ? '#C9A86A' : '#777', transition: '0.4s' }}>{item}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '100px 20px', maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* HOME VIEW */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '8rem', color: '#C9A86A', margin: '0', animation: 'glow 3s infinite alternate' }}>B.M.E</h1>
            <p style={{ letterSpacing: '25px', opacity: 0.6, fontSize: '1.4rem' }}>MAJESTY REDEFINED</p>
            <div style={{ marginTop: '60px' }}>
               <img src="http://googleusercontent.com/image_collection/image_retrieval/3405295415805918751" alt="Estate Architecture" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', border: '1px solid #C9A86A', boxShadow: '0 0 50px rgba(201,168,106,0.2)' }} />
               <p style={{ marginTop: '20px', color: '#C9A86A', fontStyle: 'italic' }}>Artist Rendering: The Pillar Entrance at Night</p>
            </div>
          </section>
        )}

        {/* CORPORATE VIEW */}
        {view === 'corporate' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="VISIONARY GALAS" subtitle="CORPORATE EXCELLENCE & IMPACT" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', marginBottom: '80px' }}>
              <img src="http://googleusercontent.com/image_collection/image_retrieval/17368850904874088217" alt="Corporate Gala" style={{ width: '100%', borderRadius: '4px', border: '1px solid #333' }} />
              <div>
                <h3 style={{ color: '#C9A86A', fontSize: '2rem' }}>High-Impact Summits</h3>
                <p>B.M.E provides a sophisticated backdrop for companies that lead with purpose. Our Cincinnati estate features ultra-high-definition immersive projection mapping, global satellite connectivity for hybrid boardrooms, and a grand ballroom capable of hosting up to 800 executive guests with white-glove service.</p>
                <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ background: '#111', padding: '20px' }}>• Immersive Brand Mapping</div>
                  <div style={{ background: '#111', padding: '20px' }}>• Executive Boardroom Suites</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SOCIAL VIEW */}
        {view === 'social' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="MILESTONE HONORS" subtitle="LEGACY BIRTHDAYS & GRADUATIONS" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
              <div style={{ border: '1px solid #222', padding: '40px' }}>
                <img src="http://googleusercontent.com/image_collection/image_retrieval/11428743731315163553" alt="Social Setting" style={{ width: '100%', marginBottom: '20px' }} />
                <h4 style={{ color: '#C9A86A' }}>LEGACY BIRTHDAYS</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Multi-generational storytelling through interactive video walls, custom family heritage scenting, and a legacy-tiered menu.</p>
              </div>
              <div style={{ border: '1px solid #222', padding: '40px' }}>
                <h4 style={{ color: '#C9A86A' }}>PRESTIGE GRADUATIONS</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Academic excellence celebrated with future-focused tech, personalized diploma reveals, and professional network lounges.</p>
              </div>
              <div style={{ border: '1px solid #222', padding: '40px' }}>
                <h4 style={{ color: '#C9A86A' }}>DIVINE SOIRÉES</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Intimate garden gatherings with live harpists, twilight lighting, and farm-to-table biblical gastronomy.</p>
              </div>
            </div>
          </div>
        )}

        {/* COLLECTIONS VIEW */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE MAJESTY COLLECTION" subtitle="TIERED BIBLICAL PACKAGES" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {[
                { id: 'gen', name: 'THE GENESIS', price: '$8,000+', specs: ['Scented Sanctuary', '50 Guest Intimacy', 'Lead Designer'] },
                { id: 'psa', name: 'THE ROYAL PSALMS', price: '$15,000+', specs: ['Live Harpist', 'Luxury Florals', 'AV Sound Suite'] },
                { id: 'est', name: 'THE ESTHER', price: '$30,000+', specs: ['7-Course Feast', '24k Gold Catering', 'All-Day Estate'] },
                { id: 'sol', name: 'THE SOLOMON', price: '$50,000+', specs: ['Castle Lodging', 'Drone Escort', 'VIP Concierge'] }
              ].map(pkg => (
                <div key={pkg.id} onClick={triggerConfetti} style={{ background: '#111', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer', transition: '0.3s' }}>
                  <h3 style={{ color: '#C9A86A', letterSpacing: '4px' }}>{pkg.name}</h3>
                  <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.8rem', opacity: 0.6, margin: '20px 0' }}>
                    {pkg.specs.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                  <div style={{ fontWeight: 'bold', color: '#C9A86A', fontSize: '1.2rem' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DASHBOARD VIEW */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE APEX ENGINE" subtitle="ROI & LOGISTICAL DIMENSIONS" />
            <div style={{ background: '#111', padding: '60px', border: '1px solid #C9A86A' }}>
              <label style={{ color: '#C9A86A', letterSpacing: '3px' }}>GUEST COUNT CAPACITY: {guests}</label>
              <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '20px' }} />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '60px' }}>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #222' }}>
                  <small style={{ color: '#999' }}>GROSS REVENUE</small>
                  <div style={{ fontSize: '1.8rem', color: '#C9A86A' }}>${grossRevenue.toLocaleString()}</div>
                </div>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #222' }}>
                  <small style={{ color: '#999' }}>OPEX (EXPENSES)</small>
                  <div style={{ fontSize: '1.8rem', color: '#ff4d4d' }}>-${totalExpenses.toLocaleString()}</div>
                </div>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #C9A86A' }}>
                  <small style={{ color: '#C9A86A' }}>NET PROFIT</small>
                  <div style={{ fontSize: '1.8rem' }}>${netProfit.toLocaleString()}</div>
                </div>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #C9A86A' }}>
                  <small style={{ color: '#C9A86A' }}>MARGIN</small>
                  <div style={{ fontSize: '1.8rem' }}>{profitMargin}%</div>
                </div>
              </div>
              
              <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ background: '#0A0A0B', padding: '30px' }}>
                  <h4 style={{ color: '#C9A86A' }}>HOSPITALITY LOGISTICS</h4>
                  <p style={{ fontSize: '0.8rem' }}>• {Math.ceil(guests/100)} Event Captains</p>
                  <p style={{ fontSize: '0.8rem' }}>• {Math.ceil(guests/12)} Luxury Servers</p>
                  <p style={{ fontSize: '0.8rem' }}>• {Math.ceil(guests/50)} Culinary Artisans</p>
                </div>
                <div style={{ background: '#0A0A0B', padding: '30px' }}>
                  <h4 style={{ color: '#C9A86A' }}>TECH LOGISTICS</h4>
                  <p style={{ fontSize: '0.8rem' }}>• 2 Drone Surveillance Pilots</p>
                  <p style={{ fontSize: '0.8rem' }}>• 1 Immersive Lighting Director</p>
                  <p style={{ fontSize: '0.8rem' }}>• 1 Network Engineer (Hybrid Events)</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '100px 50px', background: '#000', borderTop: '1px solid #222', marginTop: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', fontSize: '0.7rem', opacity: 0.6 }}>
          <div><h4 style={{ color: '#C9A86A' }}>B.M.E GROUP</h4><p>Careers</p><p>Blog</p><p>Refer A Friend</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>ESTATE</h4><p>Tour Spaces</p><p>Construction Timeline</p><p>Architecture Visuals</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>CONTACT</h4><p>Cincinnati, OH</p><p>Elite@BethelMajesty.com</p></div>
          <div style={{ textAlign: 'right' }}><h2 style={{ color: '#C9A86A' }}>B.M.E</h2><p>© 2026 DIVINE EXCELLENCE</p></div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { from { text-shadow: 0 0 20px rgba(201,168,106,0.3); } to { text-shadow: 0 0 40px rgba(201,168,106,0.6); } }
        body { margin: 0; background: #050505; cursor: default; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #C9A86A; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
