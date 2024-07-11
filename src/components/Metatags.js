// components/MetaTags.js

import Head from 'next/head';

const MetaTags = ({ title, description, image, url }) => (
    <Head>
        <title>{title}</title>
        {/* <meta name="description" content={description} /> */}

        {/* Open Graph tags */}
        {/* <meta property="og:type" content="product" /> */}
        <meta property="og:title" content='proodd' />
        <meta property="og:description" content='this is product' />
        <meta property="og:url" content='wallpaper-web2.vercel.com' />
        <meta property="og:image" content='https://cdn.pixabay.com/photo/2014/07/24/12/57/boy-400946_1280.jpg' />
        {/* <meta property="og:image:width" content="1200" /> */}
        {/* <meta property="og:image:height" content="1129" /> */}
        <meta property="og:image:alt" content='product' />

        {/* Twitter tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
    </Head>
);

export default MetaTags;
