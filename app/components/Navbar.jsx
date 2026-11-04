import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({setIsDarkMode, isDarkMode}) => {

    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }

    const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} className='w-full' alt='backgound-image'/>
    </div>
        <nav className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition ${
  isScroll
    ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20'
    : ''
}`}>
            <a href="#top">
                <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14' />
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
  text-black dark:text-white ${
  isScroll
    ? 'dark:bg-white/50'
    : 'bg-white/50 shadow-sm dark:bg-transparent dark:shadow-white/20 dark:border dark:border-white/50 '
}`}>
  <li><a href="#top" className='font-ovo'>Home</a></li>
  <li><a href="#About" className='font-ovo'>About Me</a></li>
  <li><a href="#services" className='font-ovo'>Services</a></li>
  <li><a href="#work" className='font-ovo'>My Work</a></li>
  <li><a href="#contact" className='font-ovo'>Contact Me</a></li>
</ul>

            <div className='flex items-center gap-4'>
                <button onClick={()=>setIsDarkMode(prev=>!prev)}>
                    <Image src={ isDarkMode? assets.sun_icon : assets.moon_icon} alt='moon icon' className='w-6' />
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5
                 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50 '> Contact
                    <Image src={isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} alt='logo' className='w-3' />
                </a>
                 <button onClick={openMenu} className='block md:hidden ml-3'>
                    <Image src={ isDarkMode? assets.menu_white : assets.menu_black} className='w-6' alt='menu icon' />
                </button>
            </div>
            {/* ---Mobile Menu--- */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
  w-64 z-50 h-screen bg-rose-50 text-black transition duration-500
  dark:bg-dark-hover dark:text-white'>
  <div className='absolute right-6 top-6' onClick={closeMenu}>
    <Image src={isDarkMode ? assets.close_white  : assets.close_black} alt='close icon' className='w-5 cursor-pointer' />
  </div>
  <li><a href="#top" className='font-ovo' onClick={closeMenu}>Home</a></li>
  <li><a href="#About" className='font-ovo' onClick={closeMenu}>About Me</a></li>
  <li><a href="#services" className='font-ovo' onClick={closeMenu}>Services</a></li>
  <li><a href="#work" className='font-ovo' onClick={closeMenu}>My Work</a></li>
  <li><a href="#contact" className='font-ovo' onClick={closeMenu}>Contact Me</a></li>
</ul>
        </nav>
    </>
  )
}

export default Navbar