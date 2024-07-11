// // components/WhatsAppButton.js

// function WhatsAppButton({ phoneNumber, shareUrl, image }) {
//     const whatsappMessage = encodeURIComponent('Check out this product: ');
//     const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}${encodeURIComponent(shareUrl)}`;

//     return (
//         <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
//             Order via WhatsApp
//         </a>
//     );
// }

// export default WhatsAppButton;










// components/WhatsAppButton.js

import React from 'react';

function WhatsAppButton({ phoneNumber, shareUrl, image }) {
    const message = `Check out this product: ${shareUrl}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}&media=${encodeURIComponent(image)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Order via WhatsApp
        </a>
    );
}

export default WhatsAppButton;
