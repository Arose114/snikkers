import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import { services } from '../constants/index'

const Services = () => {
  return (
    <section id='about-us' className='flex  justify-between max-container flex-wrap gap-9'>
      
                {services.map((icon,index)=>(
                    <div key={index}>
                        <ServicesCard iconURL={icon.imgURL} label={icon.label} subtext={icon.subtext}/>
                        </div>
                ))}
            
    </section>
  )
}

export default Services
