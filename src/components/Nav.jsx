import React, { useEffect, useState, useRef  } from 'react'
import {AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  // console.log("path is", location.pathname)

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // closing the dropdown when clicking outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserName("");
    navigate('/');
  };

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
           {/* {userName && (location.pathname !== "/profile" && location.pathname !== "/update-profile") && (
           <div className="flex items-center space-x-1.5">
               <Link to="/profile">
                  <FaUserCircle size="1.5rem" className="text-gray-600" />
              </Link>
              <span className="text-sm font-medium -mt-[1px]">{userName}</span>
           </div>
           )} */}
            {userName && (location.pathname !== "/profile" && location.pathname !== "/update-profile") && (
              <div className="relative" ref={dropdownRef}>
                <FaUserCircle size="1.5rem" className="text-gray-600 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
                {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 font-medium border-b">{userName}</div>
                   <Link 
                    to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowDropdown(false)}>
                    Profile
                  </Link>
                  <button 
                  onClick={handleLogout} 
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Logout
                  </button>
               </div>
               )}
              </div>
        )}
         </div>
    </nav>
  )
}

export default Navbar