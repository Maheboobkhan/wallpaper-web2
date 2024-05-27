// CartItem.js
import { useState } from 'react';
import { useCart } from '../components/CartContext';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
    const {cart} = useCart();
  const [quantity, setQuantity] = useState(item?.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onIncrement(item?.id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onDecrement(item?.id);
    }
  };

  
  return (
    <div className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4">
      <img src={item?.image} alt={item?.title} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md" />
      <div className="flex-1 md:ml-4">
        <h2 className="text-lg font-semibold">{item?.title}</h2>
        <p className="text-gray-600">{item?.description}</p>
        <div className="mt-2 flex items-center">
          <button onClick={handleDecrement} className="p-2 bg-gray-200 rounded-md mr-2">-</button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button onClick={handleIncrement} className="p-2 bg-gray-200 rounded-md ml-2">+</button>
        </div>
      </div>
      <button onClick={() => onRemove(item?.id)} className="text-red-600 font-semibold ml-auto">Remove</button>
    </div>
  );
};

export default CartItem;
