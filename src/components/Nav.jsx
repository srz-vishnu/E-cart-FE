import React, { useEffect, useState } from 'react'
import {AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const navigation = useNavigate();
  const [userName, setUserName] = useState("");
  const location = useLocation();
  console.log("path is", location.pathname)

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <nav className='w-11/12 xl:w-4/5 m-auto flex justify-between py-5'>
        <h1 className='text-2xl font-semibold'>E-<span className='text-rose-400'>Commerce</span></h1>
        <div>
            <ul className='flex space-x-8 text-base hidden md:flex'>
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
            </ul>
        </div>
        <div className='flex space-x-8'>
          <AiOutlineSearch size={"1.5rem"}/>
          <AiFillHeart size={"1.5rem"}/>
            <Link to="/cart"><AiOutlineShoppingCart size={'1.5rem'} /></Link>
            {/* purpose is that it displays name when only its logged , if visit url without login there will be just icon */}
           {userName && (location.pathname !== "/profile" && location.pathname !== "/update-profile") && (
           <div className="flex items-center space-x-1.5">
               <Link to="/profile">
                  <FaUserCircle size="1.5rem" className="text-gray-600" />
              </Link>
              <span className="text-sm font-medium -mt-[1px]">{userName}</span>
           </div>
           )}
         </div>
    </nav>
  )
}

export default Navbar