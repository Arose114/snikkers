import React from 'react'

const ServicesCard = ({iconURL, label, subtext}) => {
  return (
  
        <div className='card rounded-[20px] flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16'>
            <div className='w-11 h-11 flex justify-center items-center rounded-full bg-red-400 p-3'>
           <img src={iconURL} alt='icon' className='' width={24} height={24} />
            </div>
        <h2 className='text-3xl leading-normal font-bold mt-5'>{label}</h2>
        <p className='text-gray-400 mt-6 break-words'>{subtext}</p>
    </div>

  )
}

export default ServicesCard