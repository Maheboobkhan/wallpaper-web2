import React from 'react';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

const ProductShareButton = ({ product }) => {
    const productUrl = product.id; // Replace with your actual product URL
    const productImage = product.image; // URL of the product image
    const productTitle = product.title; // Title of the product

    return (
        <div>
            <h2>{productTitle}</h2>
            <img src={productImage} alt={productTitle} style={{ width: '200px', height: 'auto' }} />
            <WhatsappShareButton
                url={productUrl}
                title={`Check out this product: ${productTitle}`}
                separator=" "
                media={productImage}
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
};

export default ProductShareButton;
