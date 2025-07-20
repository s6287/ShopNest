import React from 'react';

function About() {
  return (
    <div className="about-hero" style={{minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #e3f0ff 0%, #f8fafc 100%)', padding: '40px 0'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18}}>
        {/* Modern logo SVG */}
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="20" width="44" height="28" rx="8" fill="#1a73e8"/>
          <rect x="16" y="12" width="28" height="28" rx="6" fill="#4caf50"/>
          <circle cx="30" cy="26" r="8" fill="#fff"/>
        </svg>
        <h1 style={{fontSize: '2.2rem', fontWeight: 700, color: '#1a73e8', letterSpacing: '-1px'}}>About ShopNest</h1>
      </div>
      <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(30,80,180,0.08)', padding: 32, maxWidth: 600, margin: '0 auto'}}>
        <p style={{fontSize: '1.1rem', color: '#333', marginBottom: 18}}>
          <b>ShopNest</b> is your trusted destination for quality products at unbeatable prices. Our mission is to make online shopping easy, affordable, and enjoyable for everyone.
        </p>
        <p style={{fontSize: '1.1rem', color: '#333', marginBottom: 18}}>
          We carefully curate our product selection to ensure you get the best value and the latest trends, all in one place. Whether you're shopping for electronics, fashion, home goods, or gifts, ShopNest is here to help you shop smarter.
        </p>
        <div style={{margin: '24px 0'}}>
          <h3 style={{color: '#4caf50', marginBottom: 10}}>Why Shop With Us?</h3>
          <ul style={{paddingLeft: 20, color: '#222', fontSize: '1.05rem'}}>
            <li>Wide selection of top-rated products</li>
            <li>Fast, reliable shipping</li>
            <li>Secure checkout and customer data protection</li>
            <li>Friendly customer support</li>
            <li>100% satisfaction guarantee</li>
          </ul>
        </div>
        <p style={{marginTop: 24, color: '#555', fontStyle: 'italic', fontSize: '1.05rem'}}>
          Thank you for choosing ShopNest. We’re passionate about making your shopping experience the best it can be!
        </p>
      </div>
    </div>
  );
}

export default About;