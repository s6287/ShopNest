import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../1.css'; // External CSS file
import { CartContext } from '../Page/Context';
import { AuthContext } from '../Page/Context';
import { ThemeContext } from '../Page/ThemeContext';

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{display:'flex', alignItems:'center', gap:8}}>
          <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="20" width="44" height="28" rx="8" fill="#1a73e8"/>
            <rect x="16" y="12" width="28" height="28" rx="6" fill="#4caf50"/>
            <circle cx="30" cy="26" r="8" fill="#fff"/>
          </svg>
          <span style={{fontSize:'1.5rem', fontWeight:600, color:'#1a73e8', letterSpacing:'-1px'}}>ShopNest</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <button onClick={toggleTheme} className="theme-toggle-btn" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbc02d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
            )}
          </button>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li>
          <Link to="/cart" className="cart-icon-wrapper" style={{ position: 'relative' }}>
            {/* SVG and cart count */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="7" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
            </svg>
            {cart.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                {cart.length}
              </span>
            )}
          </Link>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li style={{fontWeight:'bold', color:'#1a73e8'}}>{user.email}</li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><button onClick={() => navigate('/login')} className="login-btn">Login</button></li>
            <li><button onClick={() => navigate('/register')} className="register-btn">Register</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
