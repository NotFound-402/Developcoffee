import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

 const removeFromCart = (name, removeAll = false) => {
  setCart(prev =>
    prev
      .map(item => {
        if (item.name === name) {
          if (removeAll) return null
          if (item.qty > 1) {
            return { ...item, qty: item.qty - 1 }
          }
          return null
        }
        return item
      })
      .filter(Boolean)
    )
    }
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
