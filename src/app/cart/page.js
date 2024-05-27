// CartItemPage.js
'use client';
import { useEffect, useState } from 'react';
import { useCart } from '../../components/CartContext';
import CartItem from '../../components/CartItem';

const CartItemPage = () => {
//   const { cart, removeFromCart } = useCart();
const [cart, setCart] = useState([]); 
  const loc = () => {
    const local = localStorage.getItem('productToAdd');
  const obj = JSON.parse(local);
  setCart([...cart, obj]);
    console.log(typeof obj);
  }

  useEffect(()=>{
    loc();
  },[])
  const handleIncrement = (productId) => {
    // Handle increment logic here
  };

  const handleDecrement = (productId) => {
    // Handle decrement logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            //   onRemove={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItemPage;
