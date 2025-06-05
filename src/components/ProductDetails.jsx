import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
 
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();  // it gets the id from URL

//       const allProducts = [
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

const allProducts = [
  { id: 1, name: "Laptop 1", category: "laptop", price: "$820", image: "/computer.jpg" },
  { id: 2, name: "Watch 1", category: "watch", price: "$300", image: "/smartwatch.jpg" },
  { id: 3, name: "HeadSet 2", category: "headset", price: "$70", image: "/headset2.jpg" },
  { id: 4, name: "Phone 1", category: "phone", price: "$70", image: "/phones1.jpg" },
  { id: 5, name: "Laptop 2", category: "laptop", price: "$820", image: "/laptop.jpg" },
  { id: 6, name: "Watch 2", category: "watch", price: "$300", image: "/watch_cover.jfif" },
  { id: 7, name: "HeadSet 1", category: "headset", price: "$310", image: "/headset.jpg" },
  { id: 8, name: "Phone 2", category: "phone", price: "$70", image: "/phone10.webp" },
  { id: 9, name: "Laptop 3", category: "laptop", price: "$70", image: "/mac.jpg" },
  { id: 10, name: "HeadSet 2", category: "headset", price: "$70", image: "/headset2.jpg" },
  { id: 11, name: "Watch 3", category: "watch", price: "$70", image: "/smartwatch.jpg" },
  { id: 13, name: "Laptop 4", category: "laptop", price: "$820", image: "/lap1.png" },
  { id: 14, name: "Laptop 5", category: "laptop", price: "$820", image: "/lap2.jpg" },
  { id: 15, name: "Phone 4", category: "phone", price: "$820", image: "/phone13.png" },
  { id: 16, name: "Laptop 7", category: "laptop", price: "$820", image: "/lap5.jpg" },
  { id: 17, name: "Laptop 8", category: "laptop", price: "$820", image: "/lap6.jpg" },
  { id: 18, name: "Laptop 9", category: "laptop", price: "$820", image: "/lap3.jpg" },
  { id: 19, name: "Phone 5", category: "phone", price: "$820", image: "/phone11.webp" },
  { id: 20, name: "Phone 6", category: "phone", price: "$820", image: "/phone12.jpg" },
  { id: 21, name: "Phone 7", category: "phone", price: "$820", image: "/phone8.webp" },
  { id: 22, name: "Phone 8", category: "phone", price: "$820", image: "/phone9.jpg" },
  { id: 23, name: "Phone 9", category: "phone", price: "$820", image: "/phone14.jpg" }
 ];


  const product = allProducts.find(item => item.id === parseInt(id));  // here we finding the product from all_products with product id we got from URL

  const [selectedImage, setSelectedImage] = useState(product.image);

  if (!product) {
    return (
    <div className="text-center my-24 text-xl font-semibold text-gray-700">
        <p className="text-2xl font-bold mb-2">Product not available</p>
        <p>Currently not available — please try again later. Best of luck!</p>
    </div>
    );
  }

  return (
    <div className='w-11/12 xl:w-4/5 m-auto py-10 space-y-6'>
        <div className='flex   md:flex-row items-center space-x-0 md:space-x-10'>
            {/* <div className='w-[50%] h-[400px]'>
                <ReactImageMagnify
                    {...{
                    smallImage: {
                        alt: product.name,
                        isFluidWidth: true,
                        src: product.image,
                    },
                    largeImage: {             // right side lens properties
                        src: product.image,
                        width: 900,
                        height: 900,
                    },
                    enlargedImageContainerStyle: {
                        zIndex: 9,
                        background: "#fff"
                    },
                    enlargedImageContainerDimensions: {    // right side box properties
                        width: '120%',  
                        height: '100%',
                    },
                    lensStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        width: '100px',
                        height: '100px',
                        border: '2px solid #ccc',
                    },
                    shouldUsePositiveSpaceLens: true, // prevents lens from going outside
                    isHintEnabled: true,
                    enlargedImagePosition: 'beside' // optional: shows zoomed image beside
                    }}
                />
            </div> */}
            
            <div className="w-[400px] h-[400px]">
                <ReactImageMagnify
                    {...{
                    smallImage: {
                        alt: product.name,
                        isFluidWidth: false,
                        width: 400,
                        height: 400,
                      //src: product.image,
                        src:selectedImage
                    },
                    largeImage: {
                    //  src: product.image,
                        src:selectedImage,
                        width: 650,
                        height: 700,
                    },
                    enlargedImageContainerStyle: {
                        zIndex: 9,
                        background: "#fff",
                        overflow: "hidden", // to prevent right image overflow
                    },
                    enlargedImageContainerDimensions: {
                        width: 500,
                        height: 400,
                    },
                    lensStyle: {
                        backgroundColor: "rgba(0,0,0,.3)",
                        border: "2px solid #ccc",
                    },
                    shouldUsePositiveSpaceLens: true, // prevents lens going outside
                    isHintEnabled: true,  // will give hint like hover
                    enlargedImagePosition: "beside", // optional: shows zoomed image beside
                    }}
                />
                <div className='flex space-x-3 mt-4'>
                     {[product.image, "/lap1.png", "/lap2.jpg", "/lap3.jpg"].map((img, index) => (
                    <img key={index} src={img} alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 object-cover border rounded-md cursor-pointer ${
                        selectedImage === img ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedImage(img)}
                    />
                    ))}
                </div>
            </div>
            {/* <div className='w-[40%] h-[350px] border rounded-lg overflow-hidden'> 
                <Zoom>
                    <img src={product.image} alt={product.name}
                    className='w-full h-[350px] object-cover cursor-zoom-in' />
                </Zoom>
            </div> */}
            {/* last 2 lines use cheytha img style zoom property supress cheyum so div il add cheythu style  */}
        {/* <zoom> */}
          {/* <img className='w-[450px] h-[350px] border rounded-lg object-cover cursor-zoom-in' src={product.image} alt={product.name}></img> */}
        {/* </zoom> */}
            <div className='space-y-4 mt-4 md:mt-0 w-[60%]'>
                <h1 className='text-3xl font-semibold'>{product.name}</h1>
                <p className='text-xl text-green-600'><strong>Price: </strong>{product.price}</p>
                {/* <div className="flex items-center border rounded-lg overflow-hidden">
                        <p> <strong>Quantity :</strong></p>
                        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            className="px-3 py-1 text-xl bg-gray-100 hover:bg-gray-200">
                            –
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                            onClick={() => setQuantity(prev => prev + 1)}
                            className="px-3 py-1 text-xl bg-gray-100 hover:bg-gray-200">
                            +
                        </button>
                </div> */}
                  <p><strong>Category:</strong> {product.category}</p>
                  <p><strong>Availability:</strong> In Stock</p>
                   <div className="flex items-center border rounded-lg overflow-hidden">
                        <p> <strong>Quantity :</strong></p>
                        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            className="px-3 py-1 text-xl bg-gray-100 hover:bg-gray-300">
                            –
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                            onClick={() => setQuantity(prev => prev + 1)}
                            className="px-3 py-1 text-xl bg-gray-100 hover:bg-gray-300">
                            +
                        </button>
                </div>
                  <p><strong>Delivery:</strong> 3-5 business days</p>
                  <p><strong>Warranty:</strong> 1 Year</p>
                <p className='text-gray-500'>
                    <strong>
                    Product description product description product description product description product description
                    product description product description product description product description product description
                    please dont buy please dont buy please dont buy please dont buy please dont buy please dont buy
                    product description product description product description product description product description
                    product description product description product description product description product description
                    </strong>
                </p>

                <div className='flex space-x-4 pt-4'>
                    <button className='px-4 py-2 bg-rose-400 text-white rounded-xl hover:bg-rose-500'>Add to cart</button>
                    <button className='px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600'>Place order</button> 
                    <button className='px-4 py-2 border border-gray-400 rounded-xl flex items-center space-x-2 hover:bg-gray-100'>
                        <AiOutlineHeart />
                        <span> Like </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;

