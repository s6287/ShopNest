import React, { createContext, useState, useEffect } from "react";

// Create Cart Context
export const CartContext = createContext();

// Create Auth Context
export const AuthContext = createContext();

// Create Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add to cart function
  function addToCart(product) {
    setCart(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  // Remove from cart function
  function removeFromCart(productId) {
    setCart(prevItems => prevItems.filter(item => item.id !== productId));
  }

  // Update quantity function
  function updateQuantity(productId, quantity) {
    setCart(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }

  // Clear cart function
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  function login(email, password) {
    // For demo, accept any email/password
    const fakeUser = { email };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));
    return true;
  }

  function register(email, password) {
    // For demo, just login
    return login(email, password);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
