// // src/app/product-details/[id]/page.js
// 'use client';
// import { useRouter } from 'next/router';
// // import products from '../../../data/data';
// import books from '../../../data/books';

// const ProductDetails = ({ params }) => {
//   const { id } = params;
//   const findProductById = (productId) => {
//     const allProducts = Object.values(books).flat();
//     return allProducts.find(product => product.id === productId);
//   };

//   // Find the product by ID
//   const product = findProductById(id);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="lg:flex">
//         <div className="lg:w-1/2">
//           <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg" />
//         </div>
//         <div className="lg:w-1/2 lg:pl-8">
//           <h1 className="text-2xl font-bold">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <form className="mt-4 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">First Name</label>
//               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Last Name</label>
//               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 Enquire Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// 'use client';
// import { useState } from 'react';
// import books from '../../../data/books';

// const ProductDetails = ({ params }) => {
//   const { id } = params;
//   const findProductById = (productId) => {
//     const allProducts = Object.values(books).flat();
//     return allProducts.find(product => product.id === productId);
//   };

//   // Find the product by ID
//   const product = findProductById(id);
//   const [mainImage, setMainImage] = useState(product ? product.image : '');

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="lg:flex">
//         <div className="lg:w-1/2">
//           <div className="relative">
//             <img
//               src={mainImage}
//               alt={product.title}
//               className="w-full h-auto object-cover rounded-lg transform transition-transform duration-200 hover:scale-110"
//             />
//           </div>
//           <div className="flex mt-4 space-x-4">
//             {product.samples.map((sample, index) => (
//               <img
//                 key={index}
//                 src={sample}
//                 alt={`Sample ${index + 1}`}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${mainImage === sample ? 'ring-2 ring-indigo-500' : ''}`}
//                 onClick={() => setMainImage(sample)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="lg:w-1/2 lg:pl-8">
//           <h1 className="text-2xl font-bold">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <form className="mt-4 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">First Name</label>
//               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Last Name</label>
//               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 Enquire Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// 'use client';
// import "../../../components/Carousel.module.css"

// import { useState, useRef, useEffect } from 'react';
// import books from '../../../data/books';

// const ProductDetails = ({ params }) => {
//   const { id } = params;
//   const findProductById = (productId) => {
//     const allProducts = Object.values(books).flat();
//     return allProducts.find(product => product.id === productId);
//   };

//   const product = findProductById(id);
//   const [mainImage, setMainImage] = useState(product ? product.image : '');
//   const [activeSample, setActiveSample] = useState(product ? product.samples[0].id : '');
//   const imageRef = useRef(null);
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     if (product) {
//       setMainImage(product.image);
//       setActiveSample(product.samples[0].id);
//     }
//   }, [product]);

//   if (!product) return <div>Product not found</div>;

//   const handleMouseMove = (e) => {
//     if (isZoomed) {
//       const { left, top, width, height } = imageRef.current.getBoundingClientRect();
//       const x = ((e.pageX - left) / width) * 100;
//       const y = ((e.pageY - top) / height) * 100;
//       imageRef.current.style.backgroundPosition = `${x}% ${y}%`;
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsZoomed(true);
//     imageRef.current.style.backgroundSize = '200%';
//   };

//   const handleMouseLeave = () => {
//     setIsZoomed(false);
//     imageRef.current.style.backgroundSize = 'cover';
//     imageRef.current.style.backgroundPosition = 'center';
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="lg:flex">
//         <div className="lg:w-1/2">
//           <div
//             ref={imageRef}
//             className="relative bg-cover bg-center"
//             style={{ backgroundImage: `url(${mainImage})`, height: '500px' }}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           ></div>
//           <div className="flex mt-4 space-x-4">
//             {product.samples.map((sample) => (
//               <img
//                 key={sample.id}
//                 src={sample.image}
//                 alt={`Sample ${sample.id}`}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeSample === sample.id ? 'ring-2 ring-indigo-500' : ''}`}
//                 onClick={() => {
//                   setMainImage(sample.image);
//                   setActiveSample(sample.id);
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="lg:w-1/2 lg:pl-8">
//           <h1 className="text-2xl font-bold">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <form className="mt-4 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">First Name</label>
//               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Last Name</label>
//               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div>
//               <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 Enquire Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// "use client";
// import Head from "next/head";
// import { useState, useRef, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import books from "../../../data/books"; // Adjust the path based on your project structure
// import { useCart } from "../../../components/CartContext"; // Adjust the path based on your project structure
// import ProductShareButton from "@/components/WhatsappButton";


// const ProductDetails = ({ params }) => {
//   const { addToCart, cart } = useCart();
//   const searchParams = useSearchParams();
//   const search = searchParams.get("sampleId");
//   const router = useRouter();
//   const { id } = params;

//   const findProductById = (productId) => {
//     const allProducts = Object.values(books).flat();
//     return allProducts.find((product) => product.id === productId);
//   };

//   const product = findProductById(id);
//   const [mainImage, setMainImage] = useState(product ? product.image : "");
//   const [activeSample, setActiveSample] = useState(
//     product ? product.samples[0].id : ""
//   );
//   const imageRef = useRef(null);
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     if (product) {
//       const initialSampleId = search || product.samples[0].id;
//       setMainImage(
//         product.samples.find((sample) => sample.id === initialSampleId).image
//       );
//       setActiveSample(initialSampleId);
//       if (!search) {
//         router.replace(
//           `/product-details/${id}?sampleId=${initialSampleId}`,
//           undefined,
//           { shallow: true }
//         );
//       }
//     }
//   }, [product, search]);

//   if (!product) return <div>Product not found</div>;

//   const handleMouseMove = (e) => {
//     if (isZoomed) {
//       const { left, top, width, height } =
//         imageRef.current.getBoundingClientRect();
//       const x = ((e.pageX - left) / width) * 100;
//       const y = ((e.pageY - top) / height) * 100;
//       imageRef.current.style.backgroundPosition = `${x}% ${y}%`;
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsZoomed(true);
//     imageRef.current.style.backgroundSize = "200%";
//   };

//   const handleMouseLeave = () => {
//     setIsZoomed(false);
//     imageRef.current.style.backgroundSize = "cover";
//     imageRef.current.style.backgroundPosition = "center";
//   };

//   const handleSampleClick = (sampleId, image) => {
//     console.log('mainimage', image)
//     setMainImage(image);
//     setActiveSample(sampleId);
//     router.push(`/product-details/${id}?sampleId=${sampleId}`, undefined, {
//       shallow: true,
//     });
//   };

//   const handleOrderViaWhatsApp = () => {
//     const message = `*Product Title:* ${product.title}\n*Description:* ${product.description}\n*Images:*\n${product.samples.map(sample => sample.image).join('\n')}`;
//     const whatsappUrl = `https://wa.me/9921079337?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };
//   const productx = {
//     id: 'https://wallpaper-web2.vercel.app/product-details/nat02?sampleId=nat-01',
//     title: 'Awesome Product',
//     // image: 'https://yourwebsite.com/images/product.jpg',
//     image:'https://eef458be.rocketcdn.me/blog/wp-content/uploads/2022/04/How-an-image-CDN-works-4-major-steps-Source-Imagify.png'
//   };
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* <MetaTags
//                 title={product.title}
//                 description={product.description}
//                 image={mainImage}
//                 url={`/product-details/${id}?sampleId=${search}`}
//             /> */}
//       <div className="lg:flex">
//         <div className="lg:w-1/2">
//           <div
//             ref={imageRef}
//             className="relative bg-cover bg-center"
//             style={{ backgroundImage: `url(${mainImage})`, height: "500px" }}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           ></div>
//           <div className="flex mt-4 space-x-4">
//             {product.samples.map((sample) => (
//               <img
//                 key={sample.id}
//                 src={sample.image}
//                 alt={`Sample ${sample.id}`}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeSample === sample.id ? "ring-2 ring-indigo-500" : ""
//                   }`}
//                 onClick={() => handleSampleClick(sample.id, sample.image)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="lg:w-1/2 lg:pl-8">
//           <h1 className="text-2xl font-bold">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           {/* <button
//             className="bg-orange-400 text-white px-4 py-2 rounded-md mt-4"
//             onClick={handleOrderViaWhatsApp}
//           >
//             Order Via WhatsApp
//           </button> */}

//           {/* <WhatsAppButton shareUrl={`/product-details/${id}?sampleId=${search}`} phoneNumber='9921079337' image={mainImage} /> */}
//           <ProductShareButton product={productx} />
//         </div>
//       </div>
//       <form className="mt-4 space-y-4 w-[35vw] border px-5 py-5 bg-orange-400">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             placeholder="Enter your name"
//             type="text"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             placeholder="Enter your phone number"
//             type="tel"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="w-fit mx-auto">
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Enquire Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductDetails;















// newwwwwww
// "use client";
// import { useState, useRef, useEffect } from "react";
// import RootLayout from "@/app/layout";
// import { useSearchParams, useRouter } from "next/navigation";
// import books from "../../../data/books"; // Adjust the path based on your project structure
// import { useCart } from "../../../components/CartContext"; // Adjust the path based on your project structure
// import ProductShareButton from "@/components/WhatsappButton";

// const ProductDetails = ({ params }) => {
//   const { addToCart, cart } = useCart();
//   const searchParams = useSearchParams();
//   const search = searchParams.get("sampleId");
//   const router = useRouter();
//   const { id } = params;

//   const findProductById = (productId) => {
//     const allProducts = Object.values(books).flat();
//     return allProducts.find((product) => product.id === productId);
//   };

//   const product = findProductById(id);
//   const [mainImage, setMainImage] = useState(product ? product.image : "");
//   const [activeSample, setActiveSample] = useState(
//     product ? product.samples[0].id : ""
//   );
//   const imageRef = useRef(null);
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     if (product) {
//       const initialSampleId = search || product.samples[0].id;
//       setMainImage(
//         product.samples.find((sample) => sample.id === initialSampleId).image
//       );
//       setActiveSample(initialSampleId);
//       if (!search) {
//         router.replace(
//           `/product-details/${id}?sampleId=${initialSampleId}`,
//           undefined,
//           { shallow: true }
//         );
//       }
//     }
//   }, [product, search]);

//   // useEffect(() => {
//   //   if (product) {
//   //     setPreview(product.samples[0].image);
//   //     console.log('prevv: ',preview);
//   //   }
//   // }, [product]); // This useEffect runs only when the component mounts or when the 'product' changes

//   if (!product) return <div>Product not found</div>;

//   const handleMouseMove = (e) => {
//     if (isZoomed) {
//       const { left, top, width, height } =
//         imageRef.current.getBoundingClientRect();
//       const x = ((e.pageX - left) / width) * 100;
//       const y = ((e.pageY - top) / height) * 100;
//       imageRef.current.style.backgroundPosition = `${x}% ${y}%`;
//     }
//   };

//   const handleMouseEnter = () => {
//     setIsZoomed(true);
//     imageRef.current.style.backgroundSize = "200%";
//   };

//   const handleMouseLeave = () => {
//     setIsZoomed(false);
//     imageRef.current.style.backgroundSize = "cover";
//     imageRef.current.style.backgroundPosition = "center";
//   };

//   const handleSampleClick = (sampleId, image) => {
//     setMainImage(image);
//     setActiveSample(sampleId);
//     router.push(`/product-details/${id}?sampleId=${sampleId}`, undefined, {
//       shallow: true,
//     });
//   };

//   // const handleOrderViaWhatsApp = () => {
//   //   const message = `*Product Title:* ${product.title}\n*Description:* ${product.description}\n*Images:*\n${product.samples.map(sample => sample.image).join('\n')}`;
//   //   const whatsappUrl = `https://wa.me/9921079337?text=${encodeURIComponent(message)}`;
//   //   window.open(whatsappUrl, '_blank');
//   // };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="lg:flex">
//         <div className="lg:w-1/2">
//           <div
//             ref={imageRef}
//             className="relative bg-cover bg-center"
//             style={{ backgroundImage: `url(${mainImage})`, height: "500px" }}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           ></div>
//           <div className="flex mt-4 space-x-4">
//             {product.samples.map((sample) => (
              
//               <img
//                 key={sample.id}
//                 src={sample.image}
//                 alt={`Sample ${sample.id}`}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeSample === sample.id ? "ring-2 ring-indigo-500" : ""
//                   }`}
//                 onClick={() => handleSampleClick(sample.id, sample.image)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="lg:w-1/2 lg:pl-8">
//           <h1 className="text-2xl font-bold">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           {/* <button
//             className="bg-orange-400 text-white px-4 py-2 rounded-md mt-4"
//             onClick={handleOrderViaWhatsApp}
//           >
//             Order Via WhatsApp
//           </button> */}
//           <ProductShareButton
//             shareUrl={`https://wallpaper-web2.vercel.app/product-details/${id}?sampleId=${activeSample}`}
//             image={mainImage}
//           />
//         </div>
//       </div>
//       <form className="mt-4 space-y-4 w-[35vw] border px-5 py-5 bg-orange-400">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             placeholder="Enter your name"
//             type="text"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             placeholder="Enter your phone number"
//             type="tel"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="w-fit mx-auto">
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Enquire Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductDetails;

























'use client';
import { useState, useRef, useEffect } from "react";
import RootLayout from "@/app/layout";
import { useSearchParams, useRouter } from "next/navigation";
import books from "../../../data/books"; // Adjust the path based on your project structure
import { useCart } from "../../../components/CartContext"; // Adjust the path based on your project structure
import ProductShareButton from "@/components/WhatsappButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetails = ({ params }) => {
  const { addToCart, cart } = useCart();
  const searchParams = useSearchParams();
  const search = searchParams.get("sampleId");
  const router = useRouter();
  const { id } = params;

  const findProductById = (productId) => {
    const allProducts = Object.values(books).flat();
    return allProducts.find((product) => product.id === productId);
  };

  const product = findProductById(id);
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const [activeSample, setActiveSample] = useState(
    product ? product.samples[0].id : ""
  );
  const imageRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [ogImage, setOgImage] = useState(product.samples.find((sample) => sample.id === search).image); // State to manage og:image

  useEffect(() => {
    if (product) {
      const initialSampleId = search || product.samples[0].id;
      setMainImage(
        product.samples.find((sample) => sample.id === initialSampleId).image
      );
      setActiveSample(initialSampleId);
      if (!search) {
        router.replace(
          `/product-details/${id}?sampleId=${initialSampleId}`,
          undefined,
          { shallow: true }
        );
      }
    }
  }, [product, search]);


  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      imageRef.current.style.backgroundPosition = `${x}% ${y}%`;
    }
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
    imageRef.current.style.backgroundSize = "200%";
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    imageRef.current.style.backgroundSize = "cover";
    imageRef.current.style.backgroundPosition = "center";
  };

  const handleSampleClick = (sampleId, image) => {
    setMainImage(image);
    setActiveSample(sampleId);
    setOgImage(image); // Update ogImage when sample is clicked
    router.push(`/product-details/${id}?sampleId=${sampleId}`, undefined, {
      shallow: true,
    });
  };

  const handleOrderViaWhatsApp = () => {
    const message = `*Product Title:* ${product.title}\n*Description:* ${product.description}\n*Images:*\n${product.samples.map(sample => sample.image).join('\n')}`;
    const whatsappUrl = `https://wa.me/9921079337?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOrder = () => {
    // const imageUrl = product.samples.find(sample => sample.id === activeSample)?.image || "";
    // console.log('img: ',imageUrl)
    // setOgImage(imageUrl); // Update ogImage when ordering
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this product: https://wallpaper-web2.vercel.app/product-details/${id}?sampleId=${activeSample}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!product) return <div>Product not found</div>;

  return (
    <RootLayout ogImage={ogImage}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div
              ref={imageRef}
              className="relative bg-cover bg-center"
              style={{ backgroundImage: `url(${ogImage})`, height: "500px" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></div>
            <div className="flex mt-4 space-x-4">
              {product.samples.map((sample) => (
                <img
                  key={sample.id}
                  src={sample.image}
                  alt={`Sample ${sample.id}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeSample === sample.id ? "ring-2 ring-indigo-500" : ""}`}
                  onClick={() => handleSampleClick(sample.id, sample.image)}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <button
              className="bg-orange-400 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleOrder}
            >
              Order
            </button>
            <ProductShareButton
              shareUrl={`https://wallpaper-web2.vercel.app/product-details/${id}?sampleId=${activeSample}`}
              image={mainImage}
            />
          </div>
        </div>
        <form className="mt-4 space-y-4 w-[35vw] border px-5 py-5 bg-orange-400">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              placeholder="Enter your phone number"
              type="tel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="w-fit mx-auto">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enquire Now
            </button>
          </div>
        </form>
      </div><Footer />
    </RootLayout>
  );
};

export default ProductDetails;
