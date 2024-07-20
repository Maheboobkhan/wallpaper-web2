// components/WhatsappButton.js
import { useCart } from '../components/CartContext';
const WhatsappButton = ({ shareUrl, image }) => {
  const {setProduct} = useCart();
    const handleClick = () => {
      setProduct(image);
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this product: ${shareUrl}\n${image}`)}`;
      window.open(whatsappUrl, '_blank');
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Share on WhatsApp
      </button>
    );
  };
  
  export default WhatsappButton;