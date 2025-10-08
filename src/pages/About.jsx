import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10  flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>A hospital is a vital part of any hospital is a vital part of any community, serv to maternity care, diagnostics, and community, serv to maternity care, diagnostics, and outpatient ed equipment and staffed by trained professionals, ensuring that patients receive timely and effective care.</p>
          <p>Beyond treating illness, hospitals play an important role in health education and dis, cont hospital is a vital part of any community, serv to maternity care, diagnostics, andributing to the overall advancement of medicine.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Modern hospitals are evolving to include teTheseuce wait times, and make healthcare more accessible. Whether for routine check-ups or critical eme hospital is a vital part of any community, serv to maternity care, diagnostics, andrgencies,</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-row md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text=[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer' >
          <b>EFFICIENCY</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text=[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text=[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Tailored recommendations and reminders to help you stay on top oof your health.</p>
        </div>
     </div>
    </div>
     
  )
}

export default About
