import React from 'react'
import { products } from '../constants/index'
import ProductCard from '../Components/ProductCard'

const PopularProducts = () => {
  return (
   <section id='products' className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h1 className='text-4xl font-bold font-sans'>Our <span className='text-red-400'>Popular </span>products</h1>
      <p className='text-gray-400 lg:max-w-lg mt-2 font-serif'>Experience top notch quality and style with our sought after selections. Discover a world of confort, design and value</p>
    </div>
    <div className='grid mt-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14'>
      {products.map((product, index)=>(
        <div key={index} className=''>
        <ProductCard  imgURL={product.imgURL} name={product.name} price={product.price}/>
        </div>
      ))}
    </div>
   </section>
  )
}

export default PopularProducts

