import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{textAlign: 'center', marginTop: '80px'}}>
      <h1 style={{fontSize: '3rem', color: '#e74c3c'}}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button style={{marginTop: '20px', padding: '10px 24px', fontSize: '1rem', borderRadius: '6px', background: '#1a73e8', color: '#fff', border: 'none', cursor: 'pointer'}} onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default NotFound; 