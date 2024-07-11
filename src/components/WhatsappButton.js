// components/WhatsAppButton.js

function WhatsAppButton({ shareUrl }) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this product: ')}${encodeURIComponent(shareUrl)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Order via WhatsApp
        </a>
    );
}

export default WhatsAppButton;
