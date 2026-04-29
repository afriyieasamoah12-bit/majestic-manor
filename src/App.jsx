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

        {/* --- HOME VIEW --- */}
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

        {/* --- ABOUT US --- */}
        {view === 'about' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE STEWARDSHIP" subtitle="OUR STORY & DIVINE PURPOSE" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div style={{ padding: '50px', border: '1px solid #C9A86A', background: 'rgba(201,168,106,0.02)' }}>
                <h3 style={{ color: '#C9A86A', letterSpacing: '3px' }}>The Vision</h3>
                <p style={{ lineHeight: '2.2' }}>Inspired by the biblical "House of God," B.M.E reflects a standard of purity, honor, and divine elegance. We believe every event is a sacred trust. Our goal is to create unforgettable experiences that uplift and celebrate life’s greatest blessings.</p>
              </div>
              <div style={{ lineHeight: '2.2' }}>
                <p>Founded on the principles of excellence and heart-centered service, Bethel Majesty Events transforms your vision into a breathtaking reality. We are stewards of your legacy, ensuring every detail is "Crowned in Majesty."</p>
              </div>
            </div>
          </div>
        )}

        {/* --- WEDDINGS --- */}
        {view === 'weddings' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="ROYAL UNIONS" subtitle="WHERE COVENANTS ARE CELEBRATED" />
            <div style={{ background: '#111', padding: '60px', borderBottom: '2px solid #C9A86A', marginBottom: '40px' }}>
              <h3 style={{ color: '#C9A86A' }}>THE PILLAR CEREMONY</h3>
              <p>Experience an outdoor processional framed by ivory pillars and the rolling Cincinnati landscape, designed for a union that feels timeless and sacred.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ background: '#0A0A0B', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A' }}>Bridal Sanctuary</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>A 1,500 sq. ft. private estate suite with vanity stations, champagne service, and sanctuary views.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A' }}>Groom's Lounge</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Featuring a terrace, billiards, and private tailoring services for the ultimate preparation.</p>
              </div>
            </div>
          </div>
        )}

        {/* --- CORPORATE --- */}
        {view === 'corporate' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="VISIONARY GALAS" subtitle="CORPORATE EXCELLENCE & IMPACT" />
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
              <div>
                <h3 style={{ color: '#C9A86A' }}>High-Impact Summits</h3>
                <p>Designed for organizations that lead with intention. Our venue features immersive projection mapping, executive boardroom suites, and a grand hall for up to 800 guests.</p>
              </div>
              <div style={{ background: '#111', padding: '40px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}>• Immersive Brand Mapping</li>
                  <li style={{ marginBottom: '15px' }}>• Executive Boardroom Suites</li>
                  <li style={{ marginBottom: '15px' }}>• Global Hybrid Connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* --- SOCIAL --- */}
        {view === 'social' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="MILESTONE HONORS" subtitle="CELEBRATING LIFE'S LEGACY" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {['Legacy Birthdays', 'Prestige Graduations', 'Divine Soirées'].map(item => (
                <div key={item} style={{ padding: '40px', border: '1px solid #333', textAlign: 'center' }}>
                  <h4 style={{ color: '#C9A86A' }}>{item.toUpperCase()}</h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Curated milestone celebrations with legacy storytelling and interactive media reveals.</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- FOOD --- */}
        {view === 'food' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="COVENANT DINING" subtitle="A TASTE OF THE DIVINE" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>THE ESTHER FEAST</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Pomegranate-glazed lamb, gold-leafed figs, and ancient grain pilaf sourced from local organic farms.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>LEVANTINE HARVEST</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Artisanal honeys, rare Mediterranean spices, and sea-salt crusted bass representing the bounty of the harvest.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>EDENIC SWEETS</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Hand-crafted chocolates with 24k gold leaf and sacred spice-infused creams.</p>
              </div>
            </div>
          </div>
        )}

        {/* --- COLLECTIONS --- */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE MAJESTY COLLECTION" subtitle="TIERED BIBLICAL PACKAGES" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {[
                { name: 'THE GENESIS', price: '$8k+', icon: '🕊️', specs: ['50 Guest Intimacy', 'Scented Sanctuary'] },
                { name: 'THE ROYAL PSALMS', price: '$15k+', icon: '📜', specs: ['Full Planning', 'Live Harpist'] },
                { name: 'THE ESTHER', price: '$30k+', icon: '👑', specs: ['Gold Catering', 'All-Day Estate'] },
                { name: 'THE SOLOMON', price: '$50k+', icon: '🏛️', specs: ['Castle Lodging', 'Drone Escort'] }
              ].map(pkg => (
                <div key={pkg.name} onClick={triggerCelebration} style={{ background: '#111', padding: '50px 30px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{pkg.icon}</div>
                  <h3 style={{ color: '#C9A86A' }}>{pkg.name}</h3>
                  <div style={{ fontSize: '1.2rem', color: '#C9A86A', fontWeight: 'bold' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- ROI DASHBOARD --- */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="FINANCIAL ENGINE" subtitle="ROI & LOGISTICAL DIMENSIONS" />
            <div style={{ background: '#111', padding: '60px', border: '1px solid #C9A86A' }}>
              <label style={{ color: '#C9A86A' }}>GUEST CAPACITY: {guests}</label>
              <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '20px' }} />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '50px' }}>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #222' }}>
                  <small style={{ opacity: 0.5 }}>GROSS REVENUE</small>
                  <div style={{ fontSize: '1.5rem', color: '#C9A86A' }}>${grossRevenue.toLocaleString()}</div>
                </div>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #222' }}>
                  <small style={{ opacity: 0.5 }}>EXPENSES</small>
                  <div style={{ fontSize: '1.5rem', color: '#ff4d4d' }}>-${totalExpenses.toLocaleString()}</div>
                </div>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #C9A86A' }}>
                  <small style={{ color: '#C9A86A' }}>NET PROFIT</small>
                  <div style={{ fontSize: '1.5rem' }}>${netProfit.toLocaleString()}</div>
                </div>
                <div style={{ padding: '25px', background: '#050505', textAlign: 'center', border: '1px solid #C9A86A' }}>
                  <small style={{ color: '#C9A86A' }}>MARGIN</small>
                  <div style={{ fontSize: '1.5rem' }}>{profitMargin}%</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '100px 50px', background: '#000', borderTop: '1px solid #222', marginTop: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', fontSize: '0.7rem', opacity: 0.4 }}>
          <div><h4 style={{ color: '#C9A86A' }}>B.M.E GROUP</h4><p>Careers</p><p>Blog</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>ESTATE</h4><p>Cincinnati, OH</p><p>Architecture</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>LEGAL</h4><p>© 2026 DIVINE EXCELLENCE</p></div>
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
