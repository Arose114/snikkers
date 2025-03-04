import React from 'react'
import { reviews } from '../constants/index'
import ReviewsCard from '../Components/ReviewsCard'

const CustomerReviews = () => {
  return (
    
    <section id='revews' className='max-container'>
      <h3 className='text-center text-4xl font-sans font-bold'>
        What Our <span className='text-red-400'>Customers</span> say?
      </h3>
      <p className='mt-6 max-w-lg m-auto text-center text-gray-400'>Hear genueue stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review,index)=>(
          <ReviewsCard key={index} imgURL={review.imgURL} name={review.customerName} ratings={review.rating} feedback={review.feedback}/>
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews
