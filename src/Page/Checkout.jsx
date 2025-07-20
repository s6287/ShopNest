import React, { useContext, useState, useEffect } from 'react';
import { CartContext, AuthContext } from '../Page/Context';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { message: 'Please login to proceed to checkout.' } });
    }
  }, [user, navigate]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => navigate('/'), 3000); // Redirect after 3s
  };

  if (cart.length === 0 && !submitted) {
    return <div className="checkout-page"><h2>Your cart is empty.</h2></div>;
  }

  if (submitted) {
    return (
      <div className="checkout-page">
        <h2>Thank you for your order!</h2>
        <p>Order confirmation sent to <b>{form.email}</b>.</p>
        <p>Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Address
          <textarea name="address" value={form.address} onChange={handleChange} required />
        </label>
        <h3>Order Summary</h3>
        <ul className="order-summary">
          {cart.map(item => (
            <li key={item.id}>{item.title} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}</li>
          ))}
        </ul>
        <div className="checkout-total">Total: <b>${total.toFixed(2)}</b></div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout; 