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
    // const message = `Check out this product: ${shareUrl}`;
    // const encodedimage = encodeURIComponent(image);
    // console.log('endo', encodedimage);

    // const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}&media=${encodedimage}`;


    const message = `${image}\nCheck out this product: ${shareUrl}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Order via WhatsApp
        </a>
    );
}

export default WhatsAppButton;
