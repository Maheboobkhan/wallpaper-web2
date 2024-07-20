// // CartItemPage.js
// "use client";
// import { useEffect, useState } from "react";
// import { useCart } from "../../components/CartContext";
// import CartItem from "../../components/CartItem";

// const CartItemPage = () => {
//   const { cart, setCart, removeFromCart } = useCart();
//   // const [cart, setCart] = useState([]);
//   const loadCartFromLocalStorage = () => {
//     const localCart = localStorage.getItem("cart");
//     if (localCart) {
//       try {
//         const parsedCart = JSON.parse(localCart);
//         // Ensure parsedCart is an array
//         if (Array.isArray(parsedCart)) {
//           setCart(parsedCart);
//         } else {
//           console.error("Parsed cart is not an array");
//         }
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//       }
//     } else {
//       console.log("No data found in local storage under key 'cart'");
//     }
//   };

//   useEffect(() => {
//     loadCartFromLocalStorage();
//   }, []);

//   const handleIncrement = (productId) => {
//     // Handle increment logic here
//   };

//   const handleDecrement = (productId) => {
//     // Handle decrement logic here
//   };
//   console.log("length" + cart.length);
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <CartItem
//               key={item?.id}
//               item={item}
//               onIncrement={handleIncrement}
//               onDecrement={handleDecrement}
//               //   onRemove={removeFromCart}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItemPage;
