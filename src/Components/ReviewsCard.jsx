import React from 'react'
import star from '../assets/icon/star.svg'

const ReviewsCard = ({imgURL, name, feedback, ratings}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={imgURL} alt='review' className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='mt-6 max-w-sm text-center text-gray-400 '>{feedback}</p>
        <div className='flex justify-start items-center gap-2.5 mt-4'>
            <img src={star} alt='star' className='object-contain m-0' width={24} height={24} />
            <p className='text-gray-400 font-sans text-xl'>({ratings})</p>
        </div>
        <h3 className='font-bold text-3xl font-sans mt-1 text-center'>{name}</h3>
    
    </div>
  )
}

export default ReviewsCard