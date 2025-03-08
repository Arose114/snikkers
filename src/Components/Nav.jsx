import React, { useState } from 'react'
import headerLogo from '../assets/image/headerLogo.svg'
import { navLinks } from '../constants/index'
import hamburger from '../assets/icon/hamburger.svg'


const Nav = () => {
  const [open, setOpen] =useState(false)
  return (
   <header className='padding-x py-8 w-full absolute z-10 top-0 left-0'>
    <nav className=' md:flex md:justify-between items-center max-container '>
        <a href='/'>
        <img src={headerLogo}
        alt='Logo'
        width={130}
        height={29}
        /> 
        </a>

        <div  onClick={()=>setOpen(!open)} className='md:hidden cursor-pointer absolute right-8 top-6'>
          { open ?  
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className='text-8xl text-gray-500'>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg> : 
          <img src={hamburger} width={25} height={25} alt='Menu' />
        }
        </div>

        <ul className={`absolute md:static md:z-auto z-1 md:pl-0 pl-12 md:mb-0 mb-30 transition-all duration-500 ease-in max-sm:bg-white text-gray-400 left-0 max-sm:space-y-9 top-0 w-full md:w-auto md:flex-1 md:flex md:pb-0 pb-12 md:justify-center md:items-center md:gap-16 ${open ? 'top-20' : 'top-[-490px]'}`}>
        {navLinks.map((item, index)=>(
            <li key={index} className=' hover:bg-gray-50 hover:text-gray-400'>
                <a href={item.href} className='font-mono leading-normal text-lg text-slate-500'>
                {item.label}
                </a>
                </li>
        )
            )
            }
        </ul>
        
       
        
    </nav>
    </header>
  )
}

export default Nav
