import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // --- Financial Engine (The ROI Logic) ---
  const revPerGuest = 250;
  const grossRevenue = guests * revPerGuest;
  const opexRate = 0.45; 
  const totalExpenses = grossRevenue * opexRate;
  const netProfit = grossRevenue - totalExpenses;
  const profitMargin = ((netProfit / grossRevenue) * 100).toFixed(1);

  const triggerCelebration = () => {
    confetti({ 
      particleCount: 200, spread: 90, origin: { y: 0.6 }, 
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
      
      {/* ATMOSPHERIC GOLD LIGHTS */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 30%, rgba(201,168,106,0.12) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

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

        {/* 1. HOME */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '7rem', color: '#C9A86A', margin: '0', animation: 'glow 3s infinite alternate' }}>B.M.E</h1>
            <p style={{ letterSpacing: '20px', opacity: 0.6, fontSize: '1.4rem' }}>MAJESTY REDEFINED</p>
            <button onClick={() => setView('thefilm')} style={{ background: 'transparent', border: '1px solid #C9A86A', color: '#C9A86A', padding: '15px 40px', marginTop: '40px', cursor: 'pointer', letterSpacing: '4px' }}>WATCH THE FILM</button>
          </section>
        )}

        {/* 2. THE FILM */}
        {view === 'thefilm' && (
          <div style={{ animation: 'fadeIn 1.5s' }}>
            <SectionHeader title="THE CINEMATIC ESTATE" subtitle="DRAMATIC AERIAL PREVIEW" />
            <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', border: '1px solid #C9A86A', borderRadius: '4px', overflow: 'hidden' }}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UCtYIZ7Genk?autoplay=1&mute=1&loop=1&playlist=UCtYIZ7Genk" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        )}

        {/* 3. ABOUT */}
        {view === 'about' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE STEWARDSHIP" subtitle="OUR STORY & DIVINE PURPOSE" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div style={{ padding: '50px', border: '1px solid #C9A86A', background: 'rgba(201,168,106,0.02)' }}>
                <h3 style={{ color: '#C9A86A' }}>The Vision</h3>
                <p>Inspired by the biblical "House of God," B.M.E reflects a standard of purity, honor, and divine elegance. Every event is treated as a sacred trust.</p>
              </div>
              <div style={{ lineHeight: '2.2', opacity: 0.8 }}>
                <p>Founded by Afriyie Asamoah, our $7M estate project in Cincinnati blends high-energy planning with timeless aesthetics to create a world-class legacy.</p>
              </div>
            </div>
          </div>
        )}

        {/* 4. WEDDINGS */}
        {view === 'weddings' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="ROYAL UNIONS" subtitle="WHERE COVENANTS ARE CELEBRATED" />
            <div style={{ background: '#111', padding: '60px', borderBottom: '2px solid #C9A86A', marginBottom: '40px' }}>
              <h3 style={{ color: '#C9A86A' }}>THE PILLAR CEREMONY</h3>
              <p>An outdoor processional framed by towering ivory pillars, designed for a union that feels timeless and sacred.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ background: '#0A0A0B', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A' }}>Bridal Sanctuary</h4>
                <p>1,500 sq. ft. of luxury featuring private vanity stations and champagne bar.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', border: '1px solid #222' }}>
                <h4 style={{ color: '#C9A86A' }}>Groom's Lounge</h4>
                <p>A leather-bound retreat with private cigar terrace and billiards.</p>
              </div>
            </div>
          </div>
        )}

        {/* 5. CORPORATE (DETAILED) */}
        {view === 'corporate' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="VISIONARY GALAS" subtitle="CORPORATE IMPACT & INNOVATION" />
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#C9A86A' }}>High-Impact Summits</h3>
                <p>Transform your brand message through immersive projection mapping and 360-degree digital storytelling. Our grand hall hosts up to 800 executive guests with Tier-1 white-glove service, ensuring your mission is heard with clarity and prestige.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', borderLeft: '4px solid #C9A86A' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '20px' }}>• 4K Video Wall Integration</li>
                  <li style={{ marginBottom: '20px' }}>• VIP Executive Boardroom Access</li>
                  <li style={{ marginBottom: '20px' }}>• Secure Global Hybrid Stream-ready</li>
                  <li>• Targeted Acoustic Design</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 6. SOCIAL (DETAILED) */}
        {view === 'social' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="MILESTONE HONORS" subtitle="CELEBRATING LIFE'S LEGACY" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              <div style={{ padding: '40px', border: '1px solid #222', background: '#0A0A0B' }}>
                <h4 style={{ color: '#C9A86A' }}>LEGACY BIRTHDAYS</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Multi-generational celebrations featuring curated family history video walls and bespoke banquet seating.</p>
              </div>
              <div style={{ padding: '40px', border: '1px solid #222', background: '#0A0A0B' }}>
                <h4 style={{ color: '#C9A86A' }}>PRESTIGE GRADUATIONS</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Commemorating academic excellence with high-energy staging, lighting effects, and custom catering.</p>
              </div>
              <div style={{ padding: '40px', border: '1px solid #222', background: '#0A0A0B' }}>
                <h4 style={{ color: '#C9A86A' }}>DIVINE SOIRÉES</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Thematic community gatherings and charity galas that require a touch of majesty and seamless execution.</p>
              </div>
            </div>
          </div>
        )}

        {/* 7. FOOD */}
        {view === 'food' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="COVENANT DINING" subtitle="A TASTE OF THE DIVINE" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>THE ESTHER FEAST</h3>
                <p>Pomegranate-glazed lamb and gold-leafed figs sourced from local organic farms.</p>
              </div>
              <div style={{ background: '#0A0A0B', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>EDENIC SWEETS</h3>
                <p>Hand-crafted chocolates with 24k gold leaf and sacred spice creams.</p>
              </div>
            </div>
          </div>
        )}

        {/* 8. COLLECTIONS (DETAILED + CONFETTI) */}
        {view === 'collections' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE MAJESTY COLLECTION" subtitle="TIERED BIBLICAL PACKAGES & PREMIER AMENITIES" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              
              <div onClick={triggerCelebration} style={{ background: '#0A0A0B', padding: '50px 30px', border: '1px solid #222', cursor: 'pointer', transition: '0.3s' }}>
                <h3 style={{ color: '#C9A86A' }}>THE GENESIS</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>The Foundation</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.9rem', opacity: 0.8 }}>
                  <li>• 4-Hour Exclusive Access</li>
                  <li>• Lead Event Architect</li>
                  <li>• Scented Sanctuary Entry</li>
                  <li>• Signature Mediterranean Menu</li>
                </ul>
                <div style={{ fontSize: '1.5rem', color: '#C9A86A', marginTop: '25px' }}>$8,000+</div>
              </div>

              <div onClick={triggerCelebration} style={{ background: '#111', padding: '50px 30px', border: '1px solid #C9A86A', cursor: 'pointer', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#C9A86A', color: '#050505', padding: '5px 15px', fontSize: '0.65rem', fontWeight: 'bold' }}>PREMIER</div>
                <h3 style={{ color: '#C9A86A' }}>THE ESTHER</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>For Such a Time as This</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.9rem', opacity: 0.8 }}>
                  <li>• 5-Course Gold-Leaf Feast</li>
                  <li>• Aerial Drone Film Capture</li>
                  <li>• Full Projection Wall Mapping</li>
                  <li>• Bridal & Groom Luxury Suites</li>
                </ul>
                <div style={{ fontSize: '1.5rem', color: '#C9A86A', marginTop: '25px' }}>$30,000+</div>
              </div>

              <div onClick={triggerCelebration} style={{ background: '#0A0A0B', padding: '50px 30px', border: '1px solid #222', cursor: 'pointer' }}>
                <h3 style={{ color: '#C9A86A' }}>THE SOLOMON</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>The Pinnacle of Abundance</p>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.9rem', opacity: 0.8 }}>
                  <li>• 3-Day Estate Buyout</li>
                  <li>• On-site Castle Lodging (12 Guests)</li>
                  <li>• 7-Course Chef’s Table Tasting</li>
                  <li>• White-Glove Captain Service</li>
                </ul>
                <div style={{ fontSize: '1.5rem', color: '#C9A86A', marginTop: '25px' }}>$50,000+</div>
              </div>

            </div>
          </div>
        )}

        {/* 9. DASHBOARD */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE APEX ENGINE" subtitle="ROI & LOGISTICAL DIMENSIONS" />
            <div style={{ background: '#111', padding: '60px', border: '1px solid #C9A86A' }}>
              <label style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>GUEST CAPACITY: {guests}</label>
              <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A', marginTop: '20px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '50px' }}>
                <div style={{ textAlign: 'center', background: '#050505', padding: '20px' }}><small style={{ opacity: 0.5 }}>GROSS</small><div style={{ color: '#C9A86A', fontSize: '1.3rem' }}>${grossRevenue.toLocaleString()}</div></div>
                <div style={{ textAlign: 'center', background: '#050505', padding: '20px' }}><small style={{ opacity: 0.5 }}>EXPENSES</small><div style={{ color: '#ff4d4d', fontSize: '1.3rem' }}>-${totalExpenses.toLocaleString()}</div></div>
                <div style={{ textAlign: 'center', background: '#050505', padding: '20px' }}><small style={{ opacity: 0.5 }}>NET PROFIT</small><div style={{ fontSize: '1.3rem' }}>${netProfit.toLocaleString()}</div></div>
                <div style={{ textAlign: 'center', background: '#050505', padding: '20px' }}><small style={{ opacity: 0.5 }}>MARGIN</small><div style={{ fontSize: '1.3rem' }}>{profitMargin}%</div></div>
              </div>
            </div>
          </div>
        )}

      </main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { from { text-shadow: 0 0 20px rgba(201,168,106,0.3); } to { text-shadow: 0 0 40px rgba(201,168,106,0.6); } }
        body { margin: 0; background: #050505; }
        input[type=range] { cursor: pointer; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
