import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav className=' w-full  shadow-lg py-6'>
            <div className="flex justify-between mx-auto item-center max-w-screen-xl px-6">
              <div>
              <h2 className='navbar-brand font-bold italic text-3xl'> Medi-mitra</h2></div>

              <div className="list">
                <ul className="flex space-x-6 px-6">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About us</Link></li>
                  <li><Link to='/service'>Service</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                  <li><Link to='/signup'>Profile</Link></li>
                </ul>
              </div>
              </div>

        </nav>
      
    </div>
  )
}

export default Navbar
