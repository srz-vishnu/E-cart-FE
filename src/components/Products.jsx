// import React from 'react';
// import { Link } from 'react-router-dom';

// const Products = ({ category, setCategory }) => {
//   const allProducts = [
//     { id: 1, name: "Laptop 1", category: "laptop", price: "$820", image: "../../computer.jpg" },
//     { id: 2, name: "Watch 1", category: "watch", price: "$300", image: "../../smartwatch.jpg" },
//     { id: 3, name: "HeadSet 2", category: "headset", price: "$70", image: "../../headset2.jpg" },
//     { id: 4, name: "Phone 1", category: "phone", price: "$70", image: "../../phones1.jpg" },
//     { id: 5, name: "Laptop 2", category: "laptop", price: "$820", image: "../../laptop.jpg" },
//     { id: 6, name: "Watch 2", category: "watch", price: "$300", image: "../../watch_cover.jfif" },
//     { id: 7, name: "HeadSet 1", category: "headset", price: "$310", image: "../../headset.jpg" },
//     { id: 8, name: "Phone 2", category: "phone", price: "$70", image: "../../phone10.webp" },
//     { id: 9, name: "Laptop 3", category: "laptop", price: "$70", image: "../../mac.jpg" },
//     { id: 10, name: "HeadSet 2", category: "headset", price: "$70", image: "../../headset2.jpg" },
//     { id: 11, name: "Watch 3", category: "watch", price: "$70", image: "../../smartwatch.jpg" },
//     { id: 13, name: "Laptop 4", category: "laptop", price: "$820", image: "../../lap1.png" },
//     { id: 14, name: "Laptop 5", category: "laptop", price: "$820", image: "../../lap2.jpg" },
//     { id: 15, name: "Phone 4", category: "phone", price: "$820", image: "../../phone13.png" },
//     { id: 16, name: "Laptop 7", category: "laptop", price: "$820", image: "../../lap5.jpg" },
//     { id: 17, name: "Laptop 8", category: "laptop", price: "$820", image: "../../lap6.jpg" },
//     { id: 18, name: "Laptop 9", category: "laptop", price: "$820", image: "../../lap3.jpg" },
//     { id: 19, name: "Phone 5", category: "phone", price: "$820", image: "../../phone11.webp" },
//     { id: 20, name: "Phone 6", category: "phone", price: "$820", image: "../../phone12.jpg" },
//     { id: 21, name: "Phone 7", category: "phone", price: "$820", image: "../../phone8.webp" },
//     { id: 22, name: "Phone 8", category: "phone", price: "$820", image: "../../phone9.jpg" },
//     { id: 23, name: "Phone 9", category: "phone", price: "$820", image: "../../phone14.jpg" },
//   ];

//   // Show all if category is 'all', otherwise filter
//   const filteredProducts = category === 'all'
//     ? allProducts.slice(0, 12)
//     : allProducts.filter(product => product.category === category);

//   return (
//     <div className="w-4/5 m-auto space-y-10">

//       {/* Category Tabs */}
//       <div className="flex space-x-4 mt-6">
//         {['all', 'laptop', 'phone', 'watch', 'headset'].map(cat => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`text-gray-700 capitalize border-b-2 ${
//               category === cat ? 'border-black font-semibold' : 'border-transparent'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
//         {filteredProducts.map(product => (
//           <div key={product.id} className='h-[350px] space-y-2'>
//             <Link to={`/product/${product.id}`}>
//             <img
//               className='w-full h-4/5 object-cover rounded-xl cursor-pointer'
//               src={product.image}
//               alt={product.name}
//             />
//             </Link>
//             <p className='text-gray-600'>{product.name}</p>
//             <h1 className='text-xl font-semibold'>{product.price}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllBranchDetails } from '../api/Api';

// const Products = ({ category, setCategory }) => {
  
//     const[brandList,setBrandList] = useState([]);

//     useEffect(() => {



//       getProductList();
//     },[]);

//     const getProductList = async() => {
//       try {
//         const response = await getAllBranchDetails();
//         if(response){
//           const filteredProducts = category === 'all'
//     ? response.slice(0, 24)
//     : response.filter(product => product.category === category);
//         console.log('filteredProducts',filteredProducts)

//           setBrandList(filteredProducts || []);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }

//   return (
//     <div className="w-4/5 m-auto space-y-10">

//       {/* Category Tabs */}
//       <div className="flex space-x-4 mt-6">
//         {['all', 'laptop', 'phone', 'watch', 'headset'].map(cat => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`text-gray-700 capitalize border-b-2 ${
//               category === cat ? 'border-black font-semibold' : 'border-transparent'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
//         {brandList.map(product => (
//           <div key={product.brandid} className='h-[350px] space-y-2'>
//             <Link to={`/product/${product.brandid}`}>
//             <img
//               className='w-full h-4/5 object-cover rounded-xl cursor-pointer'
//               src={product?.PicLink}
//               alt={product.brandname}
//             />
//             </Link>
//             <p className='text-gray-600'>{product.brandname} - {product.model}</p>
//             <h1 className='text-xl font-semibold'>${product.price}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

///////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBranchDetails } from '../api/Api';

const Products = ({ category, setCategory }) => {
  const [brandList, setBrandList] = useState([]);

  // Map frontend labels to backend category names
  const categoryMap = {
    all: 'all',
    laptop: 'laptop',
    phone: 'mobile',      //  Phone maps to "mobile", backend njn mobile ane so match avan
    watch: 'watch',
    headset: 'headset',
  };

  useEffect(() => {
    getProductList();
  }, [category]);

  const getProductList = async () => {
    try {
      const response = await getAllBranchDetails();
      if (response) {
        const filteredProducts =
          category === 'all'
            ? response.slice(0, 24)
            : response.filter(
                product =>
                  product.categoryname.toLowerCase() === categoryMap[category].toLowerCase()
              );

        console.log('filteredProducts', filteredProducts);
        setBrandList(filteredProducts || []);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="w-4/5 m-auto space-y-10">
      {/* Category Tabs */}
      <div className="flex space-x-4 mt-6">
        {['all', 'laptop', 'phone', 'watch', 'headset'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-gray-700 capitalize border-b-2 ${
              category === cat ? 'border-black font-semibold' : 'border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {brandList.map(product => (
          <div key={product.brandid} className="h-[350px] space-y-2">
            <Link to={`/product/${product.brandid}`}>
              <img
                className="w-full h-4/5 object-cover rounded-xl cursor-pointer"
                src={product?.PicLink}
                alt={product.brandname}
              />
            </Link>
            <p className="text-gray-600">
              {product.brandname} - {product.model}
            </p>
            <h1 className="text-xl font-semibold">${product.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
