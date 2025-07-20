import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-hero" style={{minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #e3f0ff 0%, #f8fafc 100%)', padding: '40px 0'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18}}>
        {/* Modern logo SVG */}
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="20" width="44" height="28" rx="8" fill="#1a73e8"/>
          <rect x="16" y="12" width="28" height="28" rx="6" fill="#4caf50"/>
          <circle cx="30" cy="26" r="8" fill="#fff"/>
        </svg>
        <h1 style={{fontSize: '2.2rem', fontWeight: 700, color: '#1a73e8', letterSpacing: '-1px'}}>Contact ShopNest</h1>
      </div>
      <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(30,80,180,0.08)', padding: 32, maxWidth: 420, width: '100%'}}>
        <p style={{color: '#333', marginBottom: 18}}>Have a question or need help? Fill out the form below and our team will get back to you soon.</p>
        <form className="contact-form" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8}}>
          <label style={{fontWeight: 500}}>Name
            <input name="name" value={form.name} onChange={handleChange} required style={{padding: '10px 12px', border: '1px solid #ccc', borderRadius: 6, fontSize: '1rem', marginTop: 4}} />
          </label>
          <label style={{fontWeight: 500}}>Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required style={{padding: '10px 12px', border: '1px solid #ccc', borderRadius: 6, fontSize: '1rem', marginTop: 4}} />
          </label>
          <label style={{fontWeight: 500}}>Message
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} style={{padding: '10px 12px', border: '1px solid #ccc', borderRadius: 6, fontSize: '1rem', marginTop: 4}} />
          </label>
          <button type="submit" style={{background: 'linear-gradient(90deg, #1a73e8 60%, #4caf50 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: 8, boxShadow: '0 2px 8px rgba(30,80,180,0.08)'}}>Send Message</button>
          {submitted && <div style={{color: '#4caf50', marginTop: 8, fontWeight: 500}}>Thank you! Your message has been sent.</div>}
        </form>
        <div style={{marginTop: 24, color: '#555', textAlign: 'center'}}>
          Or email us at <a href="mailto:support@shopnest.com" style={{color: '#1a73e8'}}>support@shopnest.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;