import React from 'react'
import star from '../assets/icon/star.svg'

const ProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full'>
        <a href='#'>
      <div>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]'   />
      </div>
        <div className='flex mt-8 justify-start gap-2.5'>
          <img src={star}  alt='rating' className='' width={24} height={24} />
        <span className='text-xl font-serif text-gray-400 leading-normal'>(4.7)</span>
        </div>
        <h3 className='text-2xl font-sans leading-normal font-semibold mt-2'>{name}</h3>
        <p className='text-2xl mt-2 text-red-300 leading-normal font-semibold font-mono'>{price}</p>
        </a>
    </div>
  )
}

export default ProductCard