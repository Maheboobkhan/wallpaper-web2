// components/CartContext/useCart.js
import { useContext } from 'react';
import { CartContext } from './CartContext';

export const useCart = () => useContext(CartContext);
