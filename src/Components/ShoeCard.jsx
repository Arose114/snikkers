import React from 'react'

const ShoeCard = ( {imgURL, bigShoeImage, changeBigShoe}) => {
    const handleClick=()=>{
        if (bigShoeImage !== imgURL) [
            changeBigShoe(imgURL.bigShoe)
        ]
    }
  return (
    <div className={`border-2 ${bigShoeImage===imgURL.bigShoe?'border-red-300':'border-transparent'} rounded-xl cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div className='flex justify-center items-center card-img sm:h-40 sm:w-40 rounded-xl max-sm:p-4 sm:left-[10%] max-sm:px-6'>
    <img src={imgURL.bigShoe} alt='shoe collection' width={127} height={103} className='object-contain' />
        </div>
    </div>
    
  )
}

export default ShoeCard