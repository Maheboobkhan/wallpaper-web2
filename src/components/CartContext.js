// // components/CartContext/CartContext.js
// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// MyContext.js
"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [product, setProduct] = useState('');

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // const removeFromCart = (productId) => {
  //   setCart(cart.filter((item) => item.id !== productId));
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };

  const value = {product, setProduct}

  return (
    <CartContext.Provider
      // value={{ cart, setCart, addToCart, removeFromCart, clearCart }}
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
