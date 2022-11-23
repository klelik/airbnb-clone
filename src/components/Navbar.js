import React from 'react'
import logo from '../assets/logo.png'
import {FaGlobeEurope,FaUserCircle} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"



const Navbar = () => {
  return (
    <div className='border-b flex items-center justify-between sm:mx-2  '>
        {/*Left */}
        <div className=' flex p-4 w-50 '>
            <img src={logo} alt="logo-big" className=' object-cover' />
        </div>
        {/*Middle */}
    <div className=' hidden md:flex relative items-center justify-center rounded-full shadow-sm shadow-gray-400' >
        <input type="search" placeholder='' className='rounded-full h-9 py-2.5 w-[15rem] w-full outline-none'/>
        <div className='flex justify-between absolute  w-full pr-16 pl-1 font-semibold text-gray-600'>
            <button className='  font-bold w-full mr-2 '>Place</button>
            <button className='  font-bold py-2 border-l border-x px-2'>Time</button>
            <button className=' text-gray-600/60 w-full font-bold pl-0.5 py-2'>Group</button>
        </div>
        <div className=' bg-[#ff5a60] rounded-full p-2 ml-7 mr-2'>
            <BiSearch className='text-white' />
        </div>
    </div>
        {/*Right */}
        <div className='flex  items-center pr-2 gap-4 text-gray-600  '>
            <p className='text-[16px]  ml-2'>Rent House</p>
            <div className='flex items-center mx-2 gap-1'>
            <FaGlobeEurope className='mx-1 text-[16px] hover:text-[#f9787c] duration-200 ease-out' />
            <div className=''>EN</div>
            </div>
            <div className=' flex w-23 items-center gap-3 text-white font-bold bg-[#ff5a60] hover:bg-[#f9787c] duration-200 ease-out border px-1 py-2 rounded-full '>
                <p className='ml-2'>Sign in</p>
                <FaUserCircle className='text-[23px]'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar