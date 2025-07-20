import React, { useState, useContext } from 'react';
import { AuthContext } from '../Page/Context';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>
      {message && <div className="auth-error">{message}</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Password
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </label>
        {error && <div className="auth-error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login; 