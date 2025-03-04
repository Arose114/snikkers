import React from 'react'
import shoe8 from '../assets/image/shoe8.svg'
import Button from '../Components/Button'
import arrowRight from '../assets/icon/arrowRight.svg'


const SuperQuality = () => {
  return (
    <section id='about-us' className='max-container w-full flex justify-between items-center max-lg:flex-col gap-10'>
    
     <div className='flex flex-1 flex-col'>
      <h2 className='text-4xl capitalize font-bold font-sans lg:max-w-lg'>We provide you <span className='text-red-400'>super Quality </span>Shoes</h2>
      <p className='mt-6 text-gray-400 lg:max-w-lg leading-7'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
      <p className='mt-6 text-gray-400 lg:max-w-lg leading-normal '>Our dedication to details and excellence ensures your satisfaction </p>
      <div className='w-2/4 mt-12'>

      <Button label='view Details' iconURL={arrowRight} className=""/>
      </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt='superQuality' className='object-contain' width={570} height={522} />
      </div>
   
    </section>
  )
}

export default SuperQuality
