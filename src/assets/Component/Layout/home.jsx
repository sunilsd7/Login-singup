import React from 'react'
import Navbar from './Navbar'
import Service from './Services'

import Footer from './Footer'

const home = () => {

  return (
    
    <div>
       <Navbar/>
       <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: 'url("https://www.sutterhealth.org/images/health-topics/pregnancy/pediatrician-with-baby-600x300.jpg")' }}
    >
      <div className="text-center">
        <h1 className='font-bold text-3xl text-blue-800'>Welcome to MediMitra</h1>
        <h2>Your trusted partner in healthcare</h2>
      </div>
      </div>
      <Service/>
      <Footer/>

      
    </div>
   
  )
}

export default home
