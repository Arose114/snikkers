import React from 'react'
import footerLogo from '../assets/image/footerLogo.svg'
import { footerLinks } from '../constants/index'
import FooterCard from '../Components/FooterCard'
import { socialMedia } from '../constants/index'
import copyrightSign from '../assets/icon/copyrightSign.svg'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a>
        <img src={footerLogo} alt='Logo' className='' width={150} height={40} /> 
        </a>
        <p className='mt-6 text-white  text-base leading-7 font-sans sm:max-w-sm'>Get ready for the new term at your nearest store. Find your perfect size in store. Get rewards</p> 
        <div className='flex items-center gap-5 mt-8 '>
         {socialMedia.map((socialMedia,index)=>(
          <div key={index} className='flex justify-center items-center bg-white rounded-full w-12 h-12'>
            <img src={socialMedia.src} alt={socialMedia.alt} className='' width={24} height={24}/>
            </div>
         ))}
        </div>
        </div>

       
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>

        {footerLinks.map((footerLink,index)=>(
            <div className='' key={index}>
              <h3 className='text-white'>{footerLink.title}</h3>
              <ul className='text-white'>
                {footerLink.links.map((link)=>(
                  <li key={link.name} className='text-base mt-3 leading-normal font-sans hover:text-gray-400 cursor-pointer'>
                    <a href=''>
                    {link.name}
                    </a>
                    </li>
                ))}
              </ul>
              </div>
            ))}
            </div>
          
      </div>
      <div className='flex justify-between max-sm:items-center text-white mt-24 max-sm:felx-col'>
              <div className='flex justify-start items-center gap-2 font-sans cursor-pointer'>
                <img src={copyrightSign} alt='copyright' className='' />
              <p>Copyright. All rights reserved.</p>

              </div>
              <p className='font-sans cursor-pointer'>Terms & conditions.</p>
            </div>

    </footer>
  )
}

export default Footer
