import React from 'react'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const Products = () => {
  return (
    <div className='w-4/5 m-auto space-y-10'>
        <div className='flex justify-between items-center p-2'>
            <ul className='flex items-center space-x-8'>
                <li>Collections</li>
                <li>Laptop</li>
                <li>Phones</li>
                <li>Watches</li>
            </ul>
            <div className='flex items-center space-x-5'>
                <button><BsArrowLeft size={"1.5rem"}/></button>
                <button className='bg-rose-300 rounded-full p-2 text-white drop-shadow-2xl-xl'><BsArrowRight size={"1.5rem"}/></button>
            </div>
        </div>
        <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 content-center'>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../computer.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$820</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../smartwatch.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$70</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../mac.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$900</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../watch119.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$60</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../computer.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$820</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../smartwatch.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$70</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../mac.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$900</h1>
            </div>
            <div className='product h-[350px] space-y-2'>
                <img className='w-full h-4/5 object-cover rounded-xl' src="../../watch119.jpg" alt="" />
                <p className='font-semibold text-gray-600'>price in dolor,</p>
                <h1 className='text-xl font-semibold'>$60</h1>
            </div>
        </div>
        <div className='w-full h-[300px] relative'>
            <img className='w-full h-full object-cover absolute top-0 rounded-xl' src='../../mac.jpg' alt=''/>
                <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
                   <h1 className='text-4xl font-semibold'>only best products</h1>
                   <p>think what u want</p>
            <button className='w-28 bg-rose-400 p-2 rounded-md'>See More</button>
                </div>
        </div>
    </div>
  )
}

export default Products