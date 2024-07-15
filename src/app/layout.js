import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '../components/CartContext';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // open
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://res.cloudinary.com/ddvtafbjt/image/upload/c_thumb,w_200,g_face/v1721060437/nature-02_ctarzc.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/* <head> */}

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