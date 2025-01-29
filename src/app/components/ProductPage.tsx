// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// };

// const ProductPage = ({ product }: { product: Product }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to the cart!`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <p className="mt-2">{product.description}</p>
//       <p className="mt-4 text-lg font-semibold text-green-600">$ {product.price}</p>
//       <div className="mt-6">
//         <Image
//           src={urlFor(product.image).url()}
//           alt={product.name}
//           width={400}
//           height={400}
//           className="rounded-lg shadow-md"
//         />
//       </div>
//       <button
//         onClick={() => addToCart(product)}
//         className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg"
//       >
//         Add to Cart
//       </button>

//       {/* ✅ Cart ko use karo taake error na aaye */}
//       {cart.length > 0 && (
//         <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Cart Items:</h2>
//           <ul className="mt-2">
//             {cart.map((item, index) => (
//               <li key={index} className="text-gray-700">
//                 {item.name} - ${item.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductPage;
