import React from 'react';
import { assets } from '../assets/assets';

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove background <br /> image in seconds
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center mt-16 xl:mt-24 gap-8'>
        
        <div className='flex flex-col items-center gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 w-full max-w-xs'>
          <img className='max-w-9' src={assets.upload_icon} alt="Upload Icon" />
          <div>
            <p className='text-xl font-medium text-center'>Upload Image</p>
          </div>
        </div>
      
        <div className='flex flex-col items-center gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 w-full max-w-xs'>
          <img className='max-w-9' src={assets.remove_bg_icon} alt="Remove Background Icon" />
          <div>
            <p className='text-xl font-medium text-center'>Remove Background</p>
          </div>
        </div>
      
        <div className='flex flex-col items-center gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 w-full max-w-xs'>
          <img className='max-w-9' src={assets.download_icon} alt="Download Icon" />
          <div>
            <p className='text-xl font-medium text-center'>Download Image</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Steps;
