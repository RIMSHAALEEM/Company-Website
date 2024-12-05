
"use client";
import React, { useState } from "react";
import logo from "@/app/public/logo.png"
import Image from "next/image";

const Navbar = () : JSX.Element => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void => {
        setisClick(!isClick);
    };
  return (
    <div >
        <nav className=' '>
            <div className='  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                        <div className='flex items-center space-x-2 mb-4 sm:mb-0 '>
                        <Image className='mt-6 w-20 h-13 rounded-full' src={logo} alt="logo"></Image>
                            <a href="/home" className='text-[#FFA726] font-serif font-bold text-3xl mt-6'>CODERS
                            </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4 '>
                            <a href="/home" className='text-[#FFA726] block hover:bg-white hover:text-[#FFA726] hover:rounded-full hover:border-2 border-[#FFA726]  p-2'>Home
                            </a>

                            <a href="/about-us" className='text-[#FFA726] block hover:bg-white hover:text-[#FFA726] hover:rounded-full hover:border-2 border-[#FFA726]  p-2'>About
                            </a>

                            <a href="/blogs" className='text-[#FFA726] block hover:bg-white hover:text-[#FFA726] hover:rounded-full hover:border-2 border-[#FFA726]  p-2'>Blogs
                            </a>

                            <a href="/services" className='text-[#FFA726] block hover:bg-white hover:text-[#FFA726] hover:rounded-full hover:border-2 border-[#FFA726]  p-2'>Services
                            </a>

                            <a href="/contact" className='text-[#FFA726] block hover:bg-white hover:text-[#FFA726] hover:rounded-full hover:border-2 border-[#FFA726]  p-2'>Contact
                            </a>


                            <button><a href="/contact" className='text-[white] block bg-[#FFA726] rounded-full hover:border-2 hover:bg-transparent hover:text-[#FFA726] border-[#FFA726]  p-2'>SignUp
                            </a></button> 
                            <button><a href="/signin" className='text-[white] block bg-[#FFA726]  rounded-full hover:border-2 hover:bg-transparent hover:text-[#FFA726] border-[#FFA726]  p-2'>LogIn
                            </a></button>                            
                        </div>
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#FFA726" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
                            ) :(
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#FFA726">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  ">
                   <a href="/home" className='text-[#FFA726] block   hover:bg-[#FFA726] hover:text-white   border-[#FFA726] border-2  p-2'>Home
                            </a>

                            <a href="/about-us" className='text-[#FFA726] block hover:bg-[#FFA726] hover:text-white    border-[#FFA726] border-2  p-2'>About
                            </a>

                            <a href="/blogs" className='text-[#FFA726] block hover:bg-[#FFA726] hover:text-white   border-[#FFA726] border-2  p-2'>Blogs
                            </a>

                            <a href="/services" className='text-[#FFA726] block hover:bg-[#FFA726] hover:text-white   border-[#FFA726] border-2  p-2'>Services
                            </a>

                            <a href="/contact" className='text-[#FFA726] block hover:bg-[#FFA726] hover:text-white    border-[#FFA726] border-2  p-2'>Contact
                            </a>


                            <button className="mr-4"><a href="/contact" className='text-[white] block  hover:bg-transparent hover:text-[#FFA726] bg-[#FFA726]   border-[#FFA726] border-2 p-2'>SignUp
                            </a></button> 
                            <button><a href="/signin" className='text-[white] block hover:bg-transparent hover:text-[#FFA726]  bg-[#FFA726]     border-[#FFA726] border-2  p-2'>LogIn
                            </a></button>  
                        

                    </div>
                </div>
            )}
        </nav>
      
    </div>
  );
};

export default Navbar;

