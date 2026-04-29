import React, { useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import confetti from 'canvas-confetti';

const BMEExperience = () => {
  const [loading, setLoading] = useState(true);

  const triggerWelcome = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#C9A86A', '#ffffff']
    });
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Cinzel', serif" }}>
      
      {/* Cinematic Overlay Header */}
      <div style={{ 
        position: 'absolute', top: 0, width: '100%', zxIndex: 10, 
        padding: '40px', textAlign: 'center', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)' 
      }}>
        <h1 style={{ fontSize: '4rem', color: '#C9A86A', margin: 0, letterSpacing: '12px', textShadow: '0 0 20px rgba(201,168,106,0.5)' }}>B.M.E</h1>
        <p style={{ letterSpacing: '5px', fontSize: '1rem', opacity: 0.8 }}>BETHEL MAJESTY EVENTS</p>
      </div>

      {/* The 3D World */}
      <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        <Suspense fallback={<div style={{ textAlign: 'center', paddingTop: '45vh' }}>ENTERING THE HOUSE OF GOD...</div>}>
          <Spline 
            scene="https://prod.spline.design/6Wq1Q7n6vD9T77Wl/scene.splinecode" 
            onLoad={() => setLoading(false)}
          />
        </Suspense>
        
        {/* Interaction Prompt */}
        {!loading && (
          <div style={{ 
            position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)',
            textAlign: 'center', animation: 'fadeInOut 3s infinite'
          }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.6 }}>DRAG TO EXPLORE THE MANOR  •  SCROLL TO ENTER</p>
          </div>
        )}
      </div>

      {/* Floating Action Section */}
      <section style={{ 
        padding: '100px 20px', background: '#050505', 
        borderTop: '1px solid #C9A86A', position: 'relative', zIndex: 5 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: '#C9A86A', marginBottom: '30px' }}>YOUR VISION, CROWNED.</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2', opacity: 0.8, marginBottom: '50px' }}>
            Bethel Majesty Events is more than a planning service. It is a divine architecture of moments. 
            Step inside our 3D digital twin to visualize your Genesis, Esther, or Solomon-tier gala.
          </p>
          
          <button 
            onClick={triggerWelcome}
            style={{ 
              padding: '25px 60px', background: 'transparent', color: '#C9A86A', 
              border: '2px solid #C9A86A', cursor: 'pointer', fontSize: '1.2rem',
              fontWeight: 'bold', transition: 'all 0.3s', borderRadius: '50px'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(201,168,106,0.1)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            INITIALIZE DIVINE CONSULTATION
          </button>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.3, fontSize: '0.7rem' }}>
        &copy; 2026 B.M.E | CINCINNATI | POWERED BY MAJESTY
      </footer>

      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default BMEExperience;
