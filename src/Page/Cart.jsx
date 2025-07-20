import React, { useContext } from 'react';
import { CartContext } from '../Page/Context';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty.</h2>;
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <button className="clear-cart-btn" onClick={clearCart} style={{marginBottom: '20px'}}>Clear Cart</button>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={product.title} />
            <div className="cart-item-details">
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <div className="quantity-row">
                <label>Qty:</label>
                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={e => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                  style={{width: '60px', marginLeft: '8px'}}
                />
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total:</h2>
        <span>${totalPrice.toFixed(2)}</span>
        <button className="checkout-btn" onClick={() => navigate('/checkout')} style={{marginLeft: '20px'}}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
