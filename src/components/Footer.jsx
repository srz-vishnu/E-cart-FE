import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl'
import{AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-4/5 m-auto p-10'>
        <div className='md:flex grid grid-cols-2 gap justify-between items-start my-10'>
            <div className='space-y-5 py-5 border-b'>
                <h1>E-commerce</h1>
                <div className="flex space-x-4">
                    <AiOutlineInstagram size={"1.5rem"} className="cursor-pointer hover:text-pink-500" />
                    <AiOutlineYoutube size={"1.5rem"} className="cursor-pointer hover:text-red-600" />
                    <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer hover:text-green-500" />
                </div>
            </div>
            <div className='flex flex-col space-y-3'>
                <h1>Company</h1>
                <a className='text-5m text-gray-400' href='/'>About us</a>
                <a className='text-5m text-gray-400' href='/'>Contact</a>
                <a className='text-5m text-gray-400' href='/'>Services</a>
                <a className='text-5m text-gray-400' href='/'>Blog</a>
            </div>
            <div className='flex flex-col space-y-3'>
                <h1>Company</h1>
                <a className='text-5m text-gray-400' href='/'>About us</a>
                <a className='text-5m text-gray-400' href='/'>Contact</a>
                <a className='text-5m text-gray-400' href='/'>Services</a>
                <a className='text-5m text-gray-400' href='/'>Blog</a>
            </div>
            <div className='flex flex-col space-y-3'>
                <h1>Company</h1>
                <a className='text-5m text-gray-400' href='/'>About us</a>
                <a className='text-5m text-gray-400' href='/'>Contact</a>
                <a className='text-5m text-gray-400' href='/'>Services</a>
                <a className='text-5m text-gray-400' href='/'>Blog</a>
            </div>
        </div>
        <div className='border-t py-2'>
            <p>copy &copy;2022 <span className='font-bold'>E-commerce</span>All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer