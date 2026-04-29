import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Financial Intelligence
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
    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
      <h2 style={{ fontSize: '3.5rem', color: '#C9A86A', marginBottom: '15px', letterSpacing: '10px' }}>{title}</h2>
      <div style={{ height: '2px', width: '120px', background: 'linear-gradient(to right, transparent, #C9A86A, transparent)', margin: '0 auto 25px' }}></div>
      <p style={{ opacity: 0.6, letterSpacing: '4px', fontSize: '0.9rem', color: '#F8F4EC' }}>{subtitle}</p>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif", lineHeight: '1.8' }}>
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 30%, rgba(201,168,106,0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

      {/* NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(5,5,5,0.96)', borderBottom: '1px solid rgba(201,168,106,0.3)', backdropFilter: 'blur(20px)' }}>
        <div style={{ padding: '25px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '8px', cursor: 'pointer' }}>B.M.E</div>
          <button onClick={() => { triggerCelebration(); setView('dashboard'); }} style={{ background: '#C9A86A', color: '#050505', border: 'none', padding: '14px 30px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '3px' }}>BOOK A TOUR</button>
        </div>
        <div style={{ padding: '12px 50px', display: 'flex', gap: '30px', fontSize: '0.7rem', letterSpacing: '2.5px', borderTop: '1px solid #111', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {['HOME', 'THE FILM', 'ABOUT', 'WEDDINGS', 'CORPORATE', 'SOCIAL', 'FOOD', 'COLLECTIONS', 'DASHBOARD'].map(item => (
            <span key={item} onClick={() => setView(item.toLowerCase().replace(' ', ''))} style={{ cursor: 'pointer', color: view === item.toLowerCase().replace(' ', '') ? '#C9A86A' : '#777', transition: '0.4s' }}>{item}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '100px 20px', maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* --- CINEMATIC FILM VIEW --- */}
        {view === 'thefilm' && (
          <div style={{ animation: 'fadeIn 1.5s' }}>
            <SectionHeader title="THE CINEMATIC ESTATE" subtitle="DRAMATIC AERIAL PREVIEW" />
            <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', border: '1px solid #C9A86A', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 0 50px rgba(201,168,106,0.1)' }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/UCtYIZ7Genk?autoplay=1&mute=1&loop=1&playlist=UCtYIZ7Genk" 
                title="BME Estate Drone Film" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <p style={{ letterSpacing: '3px', opacity: 0.6 }}>CAPTURED IN 4K • THE BETHEL MAJESTY ESTATE</p>
            </div>
          </div>
        )}

        {/* --- HOME VIEW --- */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '7rem', color: '#C9A86A', margin: '0', animation: 'glow 3s infinite alternate' }}>B.M.E</h1>
            <p style={{ letterSpacing: '20px', opacity: 0.6, fontSize: '1.4rem' }}>MAJESTY REDEFINED</p>
            <button onClick={() => setView('thefilm')} style={{ background: 'transparent', border: '1px solid #C9A86A', color: '#C9A86A', padding: '15px 40px', marginTop: '40px', cursor: 'pointer', letterSpacing: '4px', fontSize: '0.8rem' }}>WATCH THE FILM</button>
          </section>
        )}

        {/* --- ABOUT US --- */}
        {view === 'about' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE STEWARDSHIP" subtitle="OUR STORY & DIVINE PURPOSE" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div style={{ padding: '50px', border: '1px solid #C9A86A', background: 'rgba(201,168,106,0.02)' }}>
                <h3 style={{ color: '#C9A86A' }}>The Vision</h3>
                <p>Inspired by the biblical "House of God," B.M.E reflects a standard of purity, honor, and divine elegance. Every event is treated as a sacred trust, elevating hospitality to a form of ministry and art.</p>
              </div>
              <div style={{ lineHeight: '2.2', opacity: 0.8 }}>
                <p>Founded by Afriyie Asamoah, our $7M estate project in Cincinnati is designed to be a sanctuary. We blend high-energy event planning with the timeless beauty of biblical aesthetics to create a world-class legacy.</p>
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
              <p>An outdoor processional framed by towering ivory pillars, designed for a union that feels timeless and sacred. Overlooking the lush landscape of the Ohio Valley.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ background: '#0A0A0B', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A' }}>Bridal Sanctuary</h4>
                <p style={{ fontSize: '0.9rem' }}>1,500 sq. ft. of luxury featuring private vanity stations, champagne bar, and prayer nook.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A' }}>Groom's Lounge</h4>
                <p style={{ fontSize: '0.9rem' }}>A leather-bound retreat with private cigar terrace, billiards, and bespoke tailoring services.</p>
              </div>
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
                <p>Pomegranate-glazed lamb, gold-leafed figs, and ancient grain pilaf sourced from local organic farms.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>LEVANTINE HARVEST</h3>
                <p>Artisanal honeys, rare Mediterranean spices, and sea-salt crusted bass representing the bounty of the harvest.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>EDENIC SWEETS</h3>
                <p>Hand-crafted chocolates with 24k gold leaf and sacred spice-infused creams.</p>
              </div>
            </div>
          </div>
        )}

        {/* --- COLLECTIONS --- */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE MAJESTY COLLECTION" subtitle="TIERED BIBLICAL PACKAGES" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              <div onClick={triggerCelebration} style={{ background: '#111', padding: '40px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer' }}>
                <h3 style={{ color: '#C9A86A' }}>THE GENESIS</h3><p>$8,000+</p>
                <ul style={{ textAlign: 'left', fontSize: '0.8rem', opacity: 0.7 }}><li>• 4-Hour Window</li><li>• Lead Designer</li><li>• Mediterranean Menu</li></ul>
              </div>
              <div onClick={triggerCelebration} style={{ background: '#111', padding: '40px', border: '1px solid #C9A86A', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ color: '#C9A86A', fontSize: '0.6rem', fontWeight: 'bold' }}>MOST POPULAR</div>
                <h3 style={{ color: '#C9A86A' }}>THE ESTHER</h3><p>$30,000+</p>
                <ul style={{ textAlign: 'left', fontSize: '0.8rem', opacity: 0.7 }}><li>• 5-Course Feast</li><li>• Drone Videography</li><li>• Projection Mapping</li></ul>
              </div>
              <div onClick={triggerCelebration} style={{ background: '#111', padding: '40px', border: '1px solid #222', textAlign: 'center', cursor: 'pointer' }}>
                <h3 style={{ color: '#C9A86A' }}>THE SOLOMON</h3><p>$50,000+</p>
                <ul style={{ textAlign: 'left', fontSize: '0.8rem', opacity: 0.7 }}><li>• Weekend Takeover</li><li>• Castle Lodging</li><li>• Private Concierge</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* --- DASHBOARD --- */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE APEX ENGINE" subtitle="ROI & LOGISTICAL DIMENSIONS" />
            <div style={{ background: '#111', padding: '60px', border: '1px solid #C9A86A' }}>
              <label style={{ letterSpacing: '2px' }}>GUEST CAPACITY: {guests}</label>
              <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '20px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '50px' }}>
                <div style={{ textAlign: 'center', padding: '20px', background: '#050505' }}><small>GROSS</small><div style={{ color: '#C9A86A', fontSize: '1.2rem' }}>${grossRevenue.toLocaleString()}</div></div>
                <div style={{ textAlign: 'center', padding: '20px', background: '#050505' }}><small>EXPENSES</small><div style={{ color: '#ff4d4d', fontSize: '1.2rem' }}>-${totalExpenses.toLocaleString()}</div></div>
                <div style={{ textAlign: 'center', padding: '20px', background: '#050505' }}><small>NET PROFIT</small><div style={{ fontSize: '1.2rem' }}>${netProfit.toLocaleString()}</div></div>
                <div style={{ textAlign: 'center', padding: '20px', background: '#050505' }}><small>MARGIN</small><div style={{ fontSize: '1.2rem' }}>{profitMargin}%</div></div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '80px 50px', background: '#000', textAlign: 'center', opacity: 0.4, borderTop: '1px solid #222' }}>
        <h2 style={{ color: '#C9A86A', letterSpacing: '5px' }}>B.M.E</h2>
        <p>© 2026 DIVINE EXCELLENCE • CINCINNATI, OH</p>
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
