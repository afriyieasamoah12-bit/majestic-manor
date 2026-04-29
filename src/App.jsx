import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const revenuePerGuest = 250;
  const grossRevenue = guests * revenuePerGuest;
  const expenses = grossRevenue * 0.45;
  const profit = grossRevenue - expenses;

  const triggerCelebration = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#C9A86A', '#F8F4EC'] });
  };

  const SectionHeader = ({ title, subtitle }) => (
    <div style={{ textAlign: 'center', marginBottom: '60px', animation: 'fadeIn 1s' }}>
      <h2 style={{ fontSize: '3rem', color: '#C9A86A', marginBottom: '10px', letterSpacing: '8px' }}>{title}</h2>
      <div style={{ height: '1px', width: '100px', background: '#C9A86A', margin: '0 auto 20px' }}></div>
      <p style={{ opacity: 0.6, letterSpacing: '3px', fontSize: '0.8rem' }}>{subtitle}</p>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif", lineHeight: '1.6' }}>
      
      {/* NAVIGATION BAR */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(5,5,5,0.98)', borderBottom: '1px solid rgba(201,168,106,0.2)', backdropFilter: 'blur(15px)' }}>
        <div style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '5px', cursor: 'pointer' }}>B.M.E</div>
          <button onClick={() => setView('tour')} style={{ background: '#C9A86A', color: '#050505', border: 'none', padding: '12px 25px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px', borderRadius: '2px' }}>BOOK A TOUR</button>
        </div>
        <div style={{ padding: '10px 50px', display: 'flex', gap: '25px', fontSize: '0.65rem', letterSpacing: '2px', borderTop: '1px solid #111', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {['HOME', 'ABOUT', 'WEDDINGS', 'CORPORATE', 'SOCIAL', 'FOOD', 'COLLECTIONS', 'DASHBOARD'].map(item => (
            <span key={item} onClick={() => setView(item.toLowerCase())} style={{ cursor: 'pointer', color: view === item.toLowerCase() ? '#C9A86A' : '#777', transition: '0.3s' }}>{item}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* HOME VIEW */}
        {view === 'home' && (
          <section style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '7rem', color: '#C9A86A', margin: '0', textShadow: '0 0 40px rgba(201,168,106,0.1)' }}>MAJESTY</h1>
            <p style={{ letterSpacing: '20px', opacity: 0.6, fontSize: '1.2rem' }}>ESTABLISHED IN EXCELLENCE</p>
            <p style={{ maxWidth: '600px', margin: '40px auto', fontStyle: 'italic', opacity: 0.8, fontSize: '1.1rem' }}>
              "The premier biblical-inspired luxury estate in Cincinnati. A sanctuary where your most blessed moments are elevated to majesty."
            </p>
          </section>
        )}

        {/* ABOUT VIEW */}
        {view === 'about' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="THE STEWARDSHIP" subtitle="OUR STORY & DIVINE PURPOSE" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '100px' }}>
              <div style={{ padding: '40px', border: '1px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>The Visionary</h3>
                <p>Founded by Afriyie Asamoah, B.M.E was born from a desire to blend the highest standards of professional event planning with the spiritual depth of biblical hospitality. We believe every event is a testament to a person's journey and deserves a setting of absolute honor.</p>
              </div>
              <div style={{ lineHeight: '2' }}>
                <p>At Bethel Majesty, we don’t just book dates; we curate legacies. Our $7M Cincinnati estate project is designed to be more than a venue—it is a "House of God" for celebrations, a sanctuary of elegance where the rush of life slows down to make room for majesty.</p>
              </div>
            </div>
            <div style={{ height: '400px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #222' }}>
              <p style={{ letterSpacing: '5px', opacity: 0.3 }}>[ ESTATE ARCHITECTURE VISUAL ]</p>
            </div>
          </div>
        )}

        {/* FOOD VIEW (The Gastronomy Section) */}
        {view === 'food' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="COVENANT DINING" subtitle="A TASTE OF THE DIVINE" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div style={{ background: '#0A0A0A', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>THE FIRST COVENANT</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>A Mediterranean-inspired spread featuring rare olives from the Levant, hand-pressed oils, and artisanal breads baked at dawn.</p>
              </div>
              <div style={{ background: '#0A0A0A', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>THE ROYAL FEAST</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Prime cuts of meat encrusted in ancient spices, served with honey-glazed roots and pomegranate reductions.</p>
              </div>
              <div style={{ background: '#0A0A0A', padding: '40px', borderBottom: '4px solid #C9A86A' }}>
                <h3 style={{ color: '#C9A86A' }}>EDENIC SWEETS</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Hand-crafted chocolates with 24k gold leaf, fig compotes, and rose-water infused creams.</p>
              </div>
            </div>
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
              <h4 style={{ color: '#C9A86A' }}>THE B.M.E KITCHEN STANDARD</h4>
              <p style={{ maxWidth: '800px', margin: '20px auto', opacity: 0.6 }}>Our culinary team sources 85% of ingredients from local Cincinnati organic farms, ensuring that "freshness" is a part of our covenant to you.</p>
            </div>
          </div>
        )}

        {/* WEDDINGS VIEW */}
        {view === 'weddings' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="ROYAL UNIONS" subtitle="WHERE COVENANTS ARE CELEBRATED" />
            <div style={{ background: '#111', padding: '60px', marginBottom: '40px' }}>
              <h3>THE PILLAR CEREMONY</h3>
              <p>Our flagship outdoor altar, framed by ivory pillars and overlooking the rolling hills of our Northern Kentucky/Cincinnati estate. Designed for a processional that feels like a walk through history.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ background: '#0A0A0A', padding: '40px' }}>
                <h4 style={{ color: '#C9A86A' }}>The Bridal Sanctuary</h4>
                <p style={{ fontSize: '0.85rem' }}>A 1,500 sq. ft. suite with private vanity stations, a champagne bar, and direct sanctuary access.</p>
              </div>
              <div style={{ background: '#0A0A0A', padding: '40px' }}>
                <h4 style={{ color: '#C9A86A' }}>The Groom’s Lounge</h4>
                <p style={{ fontSize: '0.85rem' }}>Leather-bound luxury featuring a cigar terrace, billiards, and private tailoring services.</p>
              </div>
            </div>
          </div>
        )}

        {/* ROI DASHBOARD VIEW */}
        {view === 'dashboard' && (
          <div style={{ animation: 'fadeIn 1s' }}>
            <SectionHeader title="FINANCIAL ENGINE" subtitle="OPERATIONAL INTELLIGENCE" />
            <div style={{ background: '#111', padding: '50px', border: '1px solid #C9A86A' }}>
              <label style={{ color: '#C9A86A', display: 'block', marginBottom: '20px' }}>GUEST CAPACITY: {guests}</label>
              <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A' }} />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '60px' }}>
                <div style={{ padding: '30px', background: '#050505', textAlign: 'center' }}>
                  <small style={{ color: '#999' }}>GROSS REVENUE</small>
                  <div style={{ fontSize: '2rem', color: '#C9A86A' }}>${grossRevenue.toLocaleString()}</div>
                </div>
                <div style={{ padding: '30px', background: '#050505', textAlign: 'center' }}>
                  <small style={{ color: '#999' }}>ESTIMATED OPEX</small>
                  <div style={{ fontSize: '2rem', color: '#ff4d4d' }}>-${expenses.toLocaleString()}</div>
                </div>
                <div style={{ padding: '30px', background: '#050505', textAlign: 'center', border: '1px solid #C9A86A' }}>
                  <small style={{ color: '#C9A86A' }}>NET PROFIT</small>
                  <div style={{ fontSize: '2rem' }}>${profit.toLocaleString()}</div>
                </div>
              </div>
              
              <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ background: '#0A0A0A', padding: '30px' }}>
                  <h4 style={{ color: '#C9A86A' }}>STAFFING LOGISTICS</h4>
                  <ul style={{ fontSize: '0.85rem', opacity: 0.7, paddingLeft: '20px' }}>
                    <li>{Math.ceil(guests/100)} Event Captains (Management)</li>
                    <li>{Math.ceil(guests/12)} Elite Servers (Hospitality)</li>
                    <li>{Math.ceil(guests/50)} Culinary Artisans (Kitchen)</li>
                    <li>4 Drone Security Pilots (Surveillance)</li>
                  </ul>
                </div>
                <div style={{ background: '#0A0A0A', padding: '30px' }}>
                  <h4 style={{ color: '#C9A86A' }}>PROFIT MARGINS</h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Current Model: 55% Net Retention.</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Market positioning: Tier-1 Luxury Cincinnati.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: '100px 50px', background: '#000', borderTop: '1px solid #222', marginTop: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', fontSize: '0.7rem', opacity: 0.6 }}>
          <div><h4 style={{ color: '#C9A86A' }}>COMPANY</h4><p>Careers</p><p>Blog</p><p>Refer A Friend</p><p>Why Us?</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>EVENTS</h4><p>Weddings</p><p>Corporate Galas</p><p>Social Events</p><p>Tour Spaces</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>B.M.E HQ</h4><p>Cincinnati, Ohio</p><p>Northern Kentucky</p><p>Elite@BethelMajesty.com</p></div>
          <div style={{ textAlign: 'right' }}><h2 style={{ color: '#C9A86A' }}>B.M.E</h2><p>© 2026 DIVINE EXCELLENCE</p></div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        body { margin: 0; background: #050505; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #C9A86A; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
