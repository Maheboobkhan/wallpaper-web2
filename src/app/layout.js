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
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Jordi_El_Ni%C3%B1o_Polla_2019_by_Glenn_Francis.jpg',
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