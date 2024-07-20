// import { Inter } from "next/font/google";
// import "./globals.css";
// import { CartProvider } from '../components/CartContext';
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <CartProvider>
//       <html lang="en">
//         <head>

//           <meta property="og:locale" content="en" />
//           <meta property="og:image" content="https://res.cloudinary.com/ddvtafbjt/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1721062342/nature-03_y1nptp.jpg" />
//           <meta property="og:url" content="your value" />
//           <meta property="og:type" content="your value" />
//           <meta property="og:title" content="your value" />
//           <meta property="og:description" content="your value" />
//           <meta property="og:logo" content="your value" />

//         </head>

//         {/* <CartProvider> */}
//         <body className={inter.className}>
//           <Navbar />
//           {children}
//           <Footer />
//         </body>
//         {/* </CartProvider> */}
//       </html>
//     </CartProvider>
//   );
// }













import { Inter } from "next/font/google";
import "./globals.css";
// import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from '../components/CartContext';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children, ogImage }) => {
  console.log('o: ',ogImage)

  // useEffect(() => {
  //   const metaImageTag = document.querySelector('meta[property="og:image"]');
  //   if (metaImageTag) {
  //     metaImageTag.setAttribute('content', ogImage);
  //   }
  // }, [ogImage]);

  return (
    <CartProvider>
      <html lang="en">
        <head>
          <meta property="og:locale" content="en" />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content="your value" />
          <meta property="og:type" content="your value" />
          <meta property="og:title" content="your value" />
          <meta property="og:description" content="your value" />
          <meta property="og:logo" content="your value" />
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
};

export default RootLayout;
