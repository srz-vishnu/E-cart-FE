import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = ({ category }) => {
  // Map different content for each category
  const contentMap = {
    all: {
      text: "From Work to Workout We’ve Got the Tech for You",
      image: "../../ecart.jfif",
    },
    laptop: {
      text: "Find Your Perfect Laptop – Work Smarter, Game Harder",
      image: "../../lap1.png",
    },
    phone: {
      text: "Stay Connected with the Latest Smartphones",
      image: "../../phone10.webp",
    },
    watch: {
      text: "Stylish Smartwatches for Every Occasion",
      image: "../../watch111.gif",
    },
    headset: {
      text: "Experience Superior Sound with Our Headsets",
      image: "../../headset.jpg",
    },
  };

  // Pick content based on selected category
  const content = contentMap[category] || contentMap["all"];

  return (
    <div className='w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-11/12 xl:w-1/2 p-5 space-y-5'>
          <h1 className='text-4xl font-semibold'>{content.text}</h1> 
          <div className='bg-white flex items-center space-x-2 px-5 py-2 rounded-full'>
            <AiOutlineSearch />
            <input className='outline-0 w-full' type="text" placeholder='Search....' />
          </div>  
        </div>

        <div className='hidden md:flex p-5'>
          <img
            className='w-[450px] h-[250px] border-2 border-gray-500 p-1'
            src={content.image}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;