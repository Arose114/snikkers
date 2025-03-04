import React from 'react'
import headerLogo from '../assets/image/headerLogo.svg'
import { navLinks } from '../constants/index'
import hamburger from '../assets/icon/hamburger.svg'


const Nav = () => {
  return (
   <header className='padding-x py-8 w-full absolute z-10'>
    <nav className='flex justify-between  items-center max-container  '>
        <a href='/'>
        <img src={headerLogo}
        alt='Logo'
        width={130}
        height={29}
        /> 
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((item, index)=>(
            <li key={index}>
                <a href={item.href} className='font-mono leading-normal text-lg text-slate-500'>
                {item.label}
                </a>
                </li>
        )
            )
            }
        </ul>
        <div  className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} alt='Menu' />
        </div>
        
    </nav>
    </header>
  )
}

export default Nav
