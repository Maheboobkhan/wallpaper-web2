import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '../components/CartContext';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   // open
//   openGraph: {
//     title: 'Next.js',
//     description: 'The React Framework for the Web',
//     siteName: 'Next.js',
//     images: [
//       {
//         url: 'https://res.cloudinary.com/ddvtafbjt/image/upload/c_thumb,w_200,g_face/v1721060437/nature-02_ctarzc.jpg',
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// };


export default function RootLayout({ children }) {
  // const [getProducts, setProducts] 

  return (
    <html lang="en">
      <head>

        <meta property="og:locale" content="en" />
        <meta property="og:image" content="public\nature\nature-01.jpg" />
        <meta property="og:url" content="your value" />
        <meta property="og:type" content="your value" />
        <meta property="og:title" content="your value" />
        <meta property="og:description" content="your value" />
        <meta property="og:logo" content="your value" />

      </head>

      <CartProvider>
        {/* </head> */}
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>

      </CartProvider>
    </html>
  );
}