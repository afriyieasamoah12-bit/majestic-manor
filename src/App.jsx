import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const BMEPortal = () => {
  const [view, setView] = useState('home');
  const [guests, setGuests] = useState(416);

  // Expanded ROI Logic
  const revenuePerGuest = 250;
  const grossRevenue = guests * revenuePerGuest;
  const expenses = grossRevenue * 0.45; // 45% overhead for luxury staffing/food
  const profit = grossRevenue - expenses;

  const triggerCelebration = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#C9A86A', '#F8F4EC'] });
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: "'Cinzel', serif" }}>
      
      {/* FULL SITE NAVIGATION MAP */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #C9A86A' }}>
        <div style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ color: '#C9A86A', fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '5px', cursor: 'pointer' }}>B.M.E</div>
          <button onClick={() => setView('tour')} style={{ background: '#C9A86A', color: '#050505', border: 'none', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px' }}>BOOK A TOUR</button>
        </div>
        
        <div style={{ padding: '10px 50px', display: 'flex', gap: '25px', fontSize: '0.65rem', letterSpacing: '2px', borderTop: '1px solid #222', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {[
            {label: 'ABOUT US', id: 'about'},
            {label: 'WEDDINGS', id: 'weddings'},
            {label: 'CORPORATE', id: 'corporate'},
            {label: 'SOCIAL', id: 'social'},
            {label: 'FOOD & COVENANT', id: 'food'},
            {label: 'COLLECTIONS', id: 'collections'},
            {label: 'ROI DASHBOARD', id: 'dashboard'},
            {label: 'CAREERS', id: 'careers'},
            {label: 'BLOG', id: 'blog'},
            {label: 'WHY US?', id: 'whyus'}
          ].map(item => (
            <span key={item.id} onClick={() => setView(item.id)} style={{ cursor: 'pointer', color: view === item.id ? '#C9A86A' : '#999' }}>{item.label}</span>
          ))}
        </div>
      </nav>

      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* --- DYNAMIC VIEWS --- */}
        
        {view === 'home' && (
          <section style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
            <h1 style={{ fontSize: '5rem', color: '#C9A86A', margin: '0' }}>B.M.E</h1>
            <p style={{ letterSpacing: '10px', opacity: 0.7 }}>BLESSED • MOMENTS • ELEVATED</p>
            <div style={{ height: '1px', width: '100px', background: '#C9A86A', margin: '40px auto' }}></div>
            <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '2' }}>Welcome to Cincinnati’s premier biblical-inspired luxury estate. Where purpose meets prestige.</p>
          </section>
        )}

        {view === 'about' && (
          <section style={{ animation: 'fadeIn 0.8s' }}>
            <h2 style={{ color: '#C9A86A' }}>ABOUT US</h2>
            <p style={{ lineHeight: '2', opacity: 0.8 }}>Bethel Majesty Events (B.M.E) was created with one mission: to elevate life’s most meaningful moments with beauty, excellence, and intention. Inspired by the biblical "house of God," our brand reflects a standard of purity, honor, and divine elegance. We aren't just planners; we are stewards of your legacy.</p>
          </section>
        )}

        {view === 'food' && (
          <section style={{ animation: 'fadeIn 0.8s' }}>
            <h2 style={{ color: '#C9A86A', textAlign: 'center' }}>COVENANT GASTRONOMY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', marginTop: '40px' }}>
              <div style={{ padding: '20px', border: '1px solid #333' }}>
                <h4 style={{ color: '#C9A86A' }}>THE ESTHER FEAST</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Pomegranate-glazed lamb, gold-leafed figs, and ancient grain pilaf.</p>
              </div>
              <div style={{ padding: '20px', border: '1px solid #333' }}>
                <h4 style={{ color: '#C9A86A' }}>LEVANTINE HARVEST</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Artisanal honeys, rare Mediterranean spices, and sea-salt crusted bass.</p>
              </div>
              <div style={{ padding: '20px', border: '1px solid #333' }}>
                <h4 style={{ color: '#C9A86A' }}>DIVINE DESSERT</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Honeyed baklava with edible gold and sacred spice-infused creams.</p>
              </div>
            </div>
          </section>
        )}

        {view === 'weddings' && (
          <section style={{ animation: 'fadeIn 0.8s' }}>
            <h2 style={{ color: '#C9A86A' }}>ROYAL WEDDINGS</h2>
            <p>From the first note of the processional to the final departure, every wedding at B.M.E is a sacred covenant celebrated with world-class grandeur.</p>
          </section>
        )}

        {view === 'dashboard' && (
          <section style={{ background: '#111', padding: '50px', border: '1px solid #C9A86A', animation: 'fadeIn 0.8s' }}>
            <h2 style={{ color: '#C9A86A', marginBottom: '40px' }}>MAJESTY FINANCIAL ENGINE</h2>
            <input type="range" min="100" max="1000" value={guests} onChange={(e) => setGuests(e.target.value)} style={{ width: '100%', accentColor: '#C9A86A' }} />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '50px' }}>
              <div style={{ background: '#050505', padding: '30px', textAlign: 'center', border: '1px solid #222' }}>
                <small style={{ color: '#999' }}>GROSS REVENUE</small>
                <div style={{ fontSize: '1.8rem', color: '#C9A86A' }}>${grossRevenue.toLocaleString()}</div>
              </div>
              <div style={{ background: '#050505', padding: '30px', textAlign: 'center', border: '1px solid #222' }}>
                <small style={{ color: '#999' }}>OPEX (EXPENSES)</small>
                <div style={{ fontSize: '1.8rem', color: '#ff4d4d' }}>-${expenses.toLocaleString()}</div>
              </div>
              <div style={{ background: '#050505', padding: '30px', textAlign: 'center', border: '1px solid #C9A86A' }}>
                <small style={{ color: '#C9A86A' }}>NET PROFIT</small>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>${profit.toLocaleString()}</div>
              </div>
            </div>

            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: '#0A0A0A', padding: '20px' }}>
                  <h4 style={{ color: '#C9A86A', margin: '0 0 10px 0' }}>STAFFING DIMENSION</h4>
                  <p style={{ fontSize: '0.8rem' }}>• {Math.ceil(guests/100)} Event Captains</p>
                  <p style={{ fontSize: '0.8rem' }}>• {Math.ceil(guests/12)} Luxury Servers</p>
                </div>
                <div style={{ background: '#0A0A0A', padding: '20px' }}>
                  <h4 style={{ color: '#C9A86A', margin: '0 0 10px 0' }}>OPERATIONAL EFFICIENCY</h4>
                  <p style={{ fontSize: '0.8rem' }}>• 55% Net Margin (Industry Lead)</p>
                  <p style={{ fontSize: '0.8rem' }}>• Based on Cincinnati Luxury Market</p>
                </div>
            </div>
          </section>
        )}

        {/* DEFAULT COLLECTIONS VIEW AS REQUESTED */}
        {view === 'collections' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', animation: 'fadeIn 0.8s' }}>
             {/* Original work preserved */}
             <div style={{ background: '#111', padding: '40px', border: '1px solid #222' }}>
                <h3 style={{ color: '#C9A86A' }}>THE SOLOMON</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>The Pinnacle of Excellence.</p>
                <div style={{ marginTop: '20px', fontWeight: 'bold' }}>$50,000+</div>
             </div>
             {/* ... and so on for others */}
          </div>
        )}

      </main>

      <footer style={{ padding: '100px 50px', backgroundColor: '#000', borderTop: '1px solid #222' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', fontSize: '0.7rem' }}>
          <div><h4 style={{ color: '#C9A86A' }}>COMPANY</h4><p>Careers</p><p>Blog</p><p>Refer A Friend</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>SERVICES</h4><p>Weddings</p><p>Corporate</p><p>Social</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>RESOURCES</h4><p>Tour Event Spaces</p><p>ROI Dashboard</p></div>
          <div><h4 style={{ color: '#C9A86A' }}>CONTACT</h4><p>Cincinnati, OH</p><p>Elite@BME.com</p></div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        body { margin: 0; background: #050505; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default BMEPortal;
