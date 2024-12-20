import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10  md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
Customer{" "}
        <span className="underline underline-offset-4 under font-light">
          Testemonials
        </span>
        </h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {
                testimonialsData.map((testimonial , index )=>(
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
                        <h2>{testimonial.title}</h2>
                        <p>{testimonial.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials