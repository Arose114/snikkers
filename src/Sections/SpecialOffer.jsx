import React from 'react'
import arrowRight from '../assets/icon/arrowRight.svg'
import Button from '../Components/Button'
import offer from '../assets/image/offer.svg'

const SpecialOffer = () => {
  return (
    <section id='specialOffer' className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 flex'>
        <img src={offer} alt='offer' className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className='text-4xl capitalize font-bold font-sans lg:max-w-lg'>Special <span className='text-red-400'> Offer </span></h2>
      <p className='mt-6 text-gray-400 lg:max-w-lg leading-7'>Embark on a shopping journey that redefines your experience unbetable orders. From premium selections to incredible savings, we offer unparalled value that sets us apart .</p>
      <p className='mt-6 text-gray-400 lg:max-w-lg leading-normal '>Navogate a realm of designs to fulfil your unique desires surpassing your expectations. Your journey with us is nothing short of exceptional.</p>
      <div className='mt-10 flex flex-wrap gap-14'>

      <Button label='Shop now' iconURL={arrowRight} className=""/>
      <Button label='Learn more' backgroundColor='bg-white' borderColor='border-gray-300' textColor='text-gray-400' />

      </div>
      </div>
      

    </section>
  )
}

export default SpecialOffer
