import React from 'react'
import Button from '../Components/Button'

const Subscribe = () => {
  return (
   <section id='subscribe' className='max-container'>
    <div className='flex justify-between items-center max-lg:flex-col gap-10'>
      <h2 className='text-4xl  lg:max-w-md font-bold font-sans leading-[68px]'>Sign up for <span className='text-red-400'>updates</span>  & Newsletters</h2>
      <div className='flex items-center w-full max-sm:flex-col lg:max-w-[40%] gap-5 p-2.5 sm:border sm:border-slate-300 rounded-full'>
      <input type='text' placeholder='subscribe to newsletter' className='input' />
      <div className=' flex max-sm:justify-end items-center max-sm:w-full'>
        <Button label='sign up' className='' fullwidth/>
      </div>
      </div>
    </div>
   </section>
  )
}

export default Subscribe
