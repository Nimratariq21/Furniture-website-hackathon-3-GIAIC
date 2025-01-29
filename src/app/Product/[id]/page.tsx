// import { client } from "@/sanity/lib/client";
// import ProductPage from "@/app/components/ProductPage"; // Client component import karo

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page


// type Props = {
//   params: {
//     id: string;
//   };
// };

// // Make sure the function is properly typed to handle async and Next.js data fetching.
// const Product = async ({ params }: Props) => {
//   const query = `*[ _type == "product" && _id == $id]{
//     name,
//     "id": _id,
//     price,
//     description,
//     category,
//     "image": image.asset._ref
//   }[0]`;

//   // Fetch the product data based on the id in params
//   const product = await client.fetch(query, { id: params.id });

//   // If no product is found, show a message
//   if (!product) {
//     return <h1 className="text-center mt-10">Product not found</h1>;
//   }

//   // Return the product page component
//   return <ProductPage product={product} />;
// };

// export default Product;



