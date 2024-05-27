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

"use client";
import { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import books from "../../../data/books";
import { useCart } from "../../../components/CartContext";

const ProductDetails = ({ params }) => {
  const { addToCart, cart } = useCart();

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      description: product.description,
      image: mainImage,
      // Add any other necessary fields
    };

    // Retrieve the existing cart from local storage
    let existingCart = JSON.parse(localStorage.getItem("cart"));

    // If existingCart is not an array (e.g., it's null), initialize it as an empty array
    if (!Array.isArray(existingCart)) {
      existingCart = [];
    }

    // Add the new product to the existing cart array
    existingCart.push(productToAdd);

    // Store the updated cart array back into local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };
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

  useEffect(() => {
    if (product) {
      // const initialSampleId = query.sampleId || product.samples[0].id;
      const initialSampleId = search || product.samples[0].id;
      console.log("id " + initialSampleId);
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

  if (!product) return <div>Product not found</div>;

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
    imageRef.current.style.backgroundSize = "500%";
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    imageRef.current.style.backgroundSize = "cover";
    imageRef.current.style.backgroundPosition = "center";
  };

  const handleSampleClick = (sampleId, image) => {
    setMainImage(image);
    setActiveSample(sampleId);
    router.push(`/product-details/${id}?sampleId=${sampleId}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <div
            ref={imageRef}
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${mainImage})`, height: "500px" }}
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
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  activeSample === sample.id ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => handleSampleClick(sample.id, sample.image)}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enquire Now
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
