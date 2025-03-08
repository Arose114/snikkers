import React, { useState } from 'react'
import Button from '../Components/Button'
import arrowRight from '../assets/icon/arrowRight.svg'
import { statistics} from '../constants/index'
import bigShoe1 from '../assets/image/bigShoe1.png'
import { shoes } from '../constants/index'
import ShoeCard from '../Components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg]=useState(bigShoe1)
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>

        <p className='text-xl font-mono text-red-300 '>Our summer collections</p>
        <h1 className='mt-10 text-8xl font-sans max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap md:relative md:z-10 pr-10'>The New Arrival</span><br>
          </br>
          <span className='mt-3 text-red-400 inline-block'>Nike</span> Shoes
        </h1>
        <p className='text-gray-400 font-mono leading-8 text-lg mt-8 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality<br/>
        comfort and innovations for your active life.
        </p>
        <Button label='shop now' iconURL={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full gap-16 mt-20'>
        {statistics.map((stat,index)=>(
          <div key={index}>
            <p className='text-4xl font-bold font-sans'>{stat.value}</p>
            <p className='leading-7 text-gray-400 font-sans'> {stat.label}</p>
          </div> 
        ))}
      </div>
      </div>
      <div className='flex-1 flex justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-gray-200 bg-cover bg-center'>
        <img src={bigShoeImg} alt='Shoe collection' width={610} height={500} className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]'>

          {shoes.map((shoe, index)=>(
            <div key={index} className=''>
            <ShoeCard imgURL={shoe} bigShoeImage={bigShoeImg} changeBigShoe={(shoe)=>{setBigShoeImg(shoe)}} />
            </div>
          ))}
          </div>
        </div>
      
    </section>
  )
}

export default Hero
