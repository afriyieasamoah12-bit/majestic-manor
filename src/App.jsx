import React, { useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import confetti from 'canvas-confetti';

const BMEExperience = () => {
  const [hasError, setHasError] = useState(false);

  const triggerWelcome = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C9A86A', '#ffffff']
    });
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F8F4EC', minHeight: '100vh', fontFamily: 'serif' }}>
      
      {/* Absolute Header - Always Visible */}
      <header style={{ 
        position: 'absolute', top: 0, width: '100%', zIndex: 100, 
        padding: '30px', textAlign: 'center',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)' 
      }}>
        <h1 style={{ fontSize: '3rem', color: '#C9A86A', margin: 0, letterSpacing: '8px' }}>B.M.E</h1>
        <p style={{ letterSpacing: '4px', fontSize: '0.9rem', opacity: 0.8, color: '#C9A86A' }}>BETHEL MAJESTY EVENTS</p>
      </header>

      {/* 3D Scene Container */}
      <div style={{ height: '80vh', width: '100%', position: 'relative', background: '#000' }}>
        {!hasError ? (
          <Suspense fallback={<div style={{ color: '#C9A86A', textAlign: 'center', paddingTop: '40vh' }}>PREPARING THE MANOR...</div>}>
            <Spline 
              scene="https://prod.spline.design/6Wq1Q7n6vD9T77Wl/scene.splinecode" 
              onError={() => setHasError(true)}
            />
          </Suspense>
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '30vh', color: '#C9A86A' }}>
            <h2>Welcome to Bethel Majesty</h2>
            <p>Experience Luxury in Cincinnati</p>
          </div>
        )}
      </div>

      {/* Brand & Content Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: '#050505', borderTop: '2px solid #C9A86A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#C9A86A' }}>BLESSED • MOMENTS • ELEVATED</h2>
          <p style={{ lineHeight: '2', fontSize: '1.2rem', margin: '30px 0', opacity: 0.9 }}>
            At Bethel Majesty Events, every celebration is designed with the belief that every moment can carry majesty, purpose, and unforgettable impact. 
            We blend luxury event planning with heart-centered service.
          </p>
          
          <button 
            onClick={triggerWelcome}
            style={{ 
              padding: '20px 50px', background: '#C9A86A', color: '#000', 
              border: 'none', cursor: 'pointer', fontSize: '1.1rem',
              fontWeight: 'bold', borderRadius: '5px'
            }}
          >
            INITIALIZE DIVINE CONSULTATION
          </button>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.4 }}>
        &copy; 2026 B.M.E | CINCINNATI | POWERED BY MAJESTY
      </footer>
    </div>
  );
};

export default BMEExperience;
