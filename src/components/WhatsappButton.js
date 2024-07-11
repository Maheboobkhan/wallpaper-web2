// components/WhatsAppButton.js

function WhatsAppButton({ phoneNumber, shareUrl }) {
    const whatsappMessage = encodeURIComponent('Check out this product: ');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}${encodeURIComponent(shareUrl)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Order via WhatsApp
        </a>
    );
}

export default WhatsAppButton;
