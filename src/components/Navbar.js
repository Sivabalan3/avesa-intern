import React, { useState, useEffect, useRef } from 'react';
import { MdContactEmergency } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import logo from "../images/logo.png"
function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  const homeRef = useRef(null);
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

useEffect(() => {
  const onScroll = () => {
    setScrollPos(window.scrollY);
  };
  window.addEventListener('scroll', onScroll);
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}, []);

  return (
   <>
<header className={`sticky  z-50 top-0 flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-700 md:mx-auto md:flex-row md:items-center ${scrollPos > 40 ? 'bg-white' : ''}`}>    
    <a href="#" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
      <span className="mr-2 text-4xl text-blue-500">
<img className='w-16' src={logo} alt='img'/>
      </span>
      Mr. Arun’s 
    </a>
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
      <span className="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li className="font-bold md:mr-12 flex"><a href="#home" className='flex gap-2'><IoHome className='mt-[2.5px]'/>Home</a></li>
        <li  className="md:mr-12"><a  href="#about"  className='flex gap-2'><MdContactEmergency className='mt-[4px]'/>About</a></li>
        <li className="md:mr-12"><a href="#course"  className='flex gap-2'><FaBook className='mt-[4px]' />Course</a></li>
        <li className="md:mr-12"><a href="#contact"  className='flex gap-2'><MdAttachEmail className='mt-[4px]'/>Contact</a></li>
        <li className="md:mr-12">
          <button className="rounded-full border-2 border-blue-700 px-6 py-1 text-blue-700 transition-colors hover:bg-blue-500 hover:text-white">Login</button>
        </li>
      </ul>
    </nav>
  </header>

   </>
  )
}

export default Navbar