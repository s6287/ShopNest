import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-hero" style={{minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #f8fafc 0%, #e3f0ff 100%)', padding: '40px 0'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 24}}>
        {/* Modern logo SVG */}
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="20" width="44" height="28" rx="8" fill="#1a73e8"/>
          <rect x="16" y="12" width="28" height="28" rx="6" fill="#4caf50"/>
          <circle cx="30" cy="26" r="8" fill="#fff"/>
        </svg>
        <h1 style={{fontSize: '2.8rem', fontWeight: 700, color: '#1a73e8', letterSpacing: '-2px'}}>ShopNest</h1>
      </div>
      <h2 style={{fontWeight: 500, color: '#333', fontSize: '1.5rem', marginBottom: 18, textAlign: 'center', maxWidth: 500}}>
        Discover the best products, unbeatable prices, and a smarter way to shop — all in one nest.
      </h2>
      <button
        style={{background: 'linear-gradient(90deg, #1a73e8 60%, #4caf50 100%)', color: '#fff', fontSize: '1.2rem', padding: '16px 40px', border: 'none', borderRadius: 8, fontWeight: 600, boxShadow: '0 2px 8px rgba(30,80,180,0.08)', cursor: 'pointer', marginTop: 10, transition: 'background 0.2s'}}
        onClick={() => navigate('/product')}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Home;