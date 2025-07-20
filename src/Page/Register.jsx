import React, { useState, useContext } from 'react';
import { AuthContext } from '../Page/Context';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const success = register(form.email, form.password);
    if (success) {
      navigate('/');
    } else {
      setError('Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <h1>Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Password
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </label>
        {error && <div className="auth-error">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register; 