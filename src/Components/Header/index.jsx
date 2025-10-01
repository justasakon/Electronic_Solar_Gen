import React from 'react'
import "./Header.css"
import {Link} from 'react-scroll'
import { solar__skyscraper } from '../../assets'
import SolarSystem from '../SolarSystem/indext'

const Header = () => {
  return (
    <header id='header'>
        <div className="system_wrapper">
            <SolarSystem/>
        </div>
      <div className="container full_height blur-effect">
        <div className='column'>
            <h1 className='title'>
                IMAGO-DEL <span className='g-text'>ELECTRONIC SOLAR GENERATORS</span>
            </h1>
            <p className="text_muted">
                At IMAGO-DEL, we specialize in advanced solar solutions that empower you to harness the power of renewable energy. Our premium solar panels and electronic generators are designed for efficiency and reliability, providing you with sustainable energy options that lower your bills and reduce your carbon footprint. Embrace a smarter, greener future with us—explore our innovative products today.


            </p>
            <div className="buttons_container">
                <Link to='services' className='btn'> Our Services</Link>
                <Link to='contact' className='btn btn_primary'> Contact Us</Link>
            </div>
        </div>
        <div className='column'>
            <div className="image_container primary-effect">
                <img src={solar__skyscraper} alt='Solarix' /> 
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header