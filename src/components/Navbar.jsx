import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='px-14 h-14 bg-[#212121] flex items-center justify-between  opacity-95 sticky top-0 z-50'>
       <div className='flex gap-8 text-2xl items-center'>
        <div>
         <GiHamburgerMenu className='cursor-pointer'/>
        </div>
        <Link to = "/" >
          <div className='flex items-center justify-between gap-1'>
            <BsYoutube className='text-3xl text-red-600 cursor-pointer' />
            <span className='text-xl font-medium cursor-pointer'>YouTube</span>
          </div>
        </Link>
       </div>
       <div className='flex items-center justify-center gap-5'>
        <form action=''>
         <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
            <div className="flex gap-4 items-center pr-5 ">
                <div>
                    <FaSearch className='text-xl'/>  
                </div>
                <input type='text' className='w-96 bg-zinc-900 focus:outline-none border-none '/>
            {/* <AiOutlineClose className=''/> */}
            <AiOutlineClose  className='text-xl cursor-pointer'/>
            </div>
            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
           <FaSearch className='text-xl'/>
            </button>
         </div>
        </form>
       </div>
    </div>
  )
}

export default Navbar 