import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '../components/CartContext';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://loremflickr.com/cache/resized/65535_53044203699_1d9ed2a58e_z_640_480_nofilter.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://loremflickr.com/cache/resized/65535_53044203699_1d9ed2a58e_z_640_480_nofilter.jpg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
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