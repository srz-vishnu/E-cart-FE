// import React from 'react'
// import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

// const Products = () => {
//   return (
//     <div className='w-4/5 m-auto space-y-10'>
//         <div className='flex justify-between items-center p-2'>
//             <ul className='flex items-center space-x-8'>
//                 <li>Collections</li>
//                 <li>Laptop</li>
//                 <li>Phones</li>
//                 <li>Watches</li>
//             </ul>
//             <div className='flex items-center space-x-5'>
//                 <button><BsArrowLeft size={"1.5rem"}/></button>
//                 <button className='bg-rose-300 rounded-full p-2 text-white drop-shadow-2xl-xl'><BsArrowRight size={"1.5rem"}/></button>
//             </div>
//         </div>
//         <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 content-center'>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/computer.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$820</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/smartwatch.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$70</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/mac.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$900</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/watch119.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$60</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/computer.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$820</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/smartwatch.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$70</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/mac.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$900</h1>
//             </div>
//             <div className='product h-[350px] space-y-2'>
//                 <img className='w-full h-4/5 object-cover rounded-xl' src="../assets/watch119.jpg" alt="" />
//                 <p className='font-semibold text-gray-600'>price in dolor,</p>
//                 <h1 className='text-xl font-semibold'>$60</h1>
//             </div>
//         </div>
//         <div className='w-full h-[300px] relative'>
//             <img className='w-full h-full object-cover absolute top-0 rounded-xl' src='../assets/mac.jpg' alt=''/>
//                 <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
//                    <h1 className='text-4xl font-semibold'>only best products</h1>
//                    <p>think what u want</p>
//             <button className='w-28 bg-rose-400 p-2 rounded-md'>See More</button>
//                 </div>
//         </div>
//     </div>
//   )
// }

// export default Products

import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ category, setCategory }) => {
  const allProducts = [
    { id: 1, name: "Laptop 1", category: "laptop", price: "$820", image: "../../computer.jpg" },
    { id: 2, name: "Watch 1", category: "watch", price: "$300", image: "../../smartwatch.jpg" },
    { id: 3, name: "HeadSet 2", category: "headset", price: "$70", image: "../../headset2.jpg" },
    { id: 4, name: "Phone 1", category: "phone", price: "$70", image: "../../phones1.jpg" },
    { id: 5, name: "Laptop 2", category: "laptop", price: "$820", image: "../../laptop.jpg" },
    { id: 6, name: "Watch 2", category: "watch", price: "$300", image: "../../watch_cover.jfif" },
    { id: 7, name: "HeadSet 1", category: "headset", price: "$310", image: "../../headset.jpg" },
    { id: 8, name: "Phone 2", category: "phone", price: "$70", image: "../../phone10.webp" },
    { id: 9, name: "Laptop 3", category: "laptop", price: "$70", image: "../../mac.jpg" },
    { id: 10, name: "HeadSet 2", category: "headset", price: "$70", image: "../../headset2.jpg" },
    { id: 11, name: "Watch 3", category: "watch", price: "$70", image: "../../smartwatch.jpg" },
    { id: 13, name: "Laptop 4", category: "laptop", price: "$820", image: "../../lap1.png" },
    { id: 14, name: "Laptop 5", category: "laptop", price: "$820", image: "../../lap2.jpg" },
    { id: 15, name: "Phone 4", category: "phone", price: "$820", image: "../../phone13.png" },
    { id: 16, name: "Laptop 7", category: "laptop", price: "$820", image: "../../lap5.jpg" },
    { id: 17, name: "Laptop 8", category: "laptop", price: "$820", image: "../../lap6.jpg" },
    { id: 18, name: "Laptop 9", category: "laptop", price: "$820", image: "../../lap3.jpg" },
    { id: 19, name: "Phone 5", category: "phone", price: "$820", image: "../../phone11.webp" },
    { id: 20, name: "Phone 6", category: "phone", price: "$820", image: "../../phone12.jpg" },
    { id: 21, name: "Phone 7", category: "phone", price: "$820", image: "../../phone8.webp" },
    { id: 22, name: "Phone 8", category: "phone", price: "$820", image: "../../phone9.jpg" },
    { id: 23, name: "Phone 9", category: "phone", price: "$820", image: "../../phone14.jpg" },
  ];

  // Show all if category is 'all', otherwise filter
  const filteredProducts = category === 'all'
    ? allProducts.slice(0, 12)
    : allProducts.filter(product => product.category === category);

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
      <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
        {filteredProducts.map(product => (
          <div key={product.id} className='h-[350px] space-y-2'>
            <Link to={`/product/${product.id}`}>
            <img
              className='w-full h-4/5 object-cover rounded-xl cursor-pointer'
              src={product.image}
              alt={product.name}
            />
            </Link>
            <p className='text-gray-600'>{product.name}</p>
            <h1 className='text-xl font-semibold'>{product.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
