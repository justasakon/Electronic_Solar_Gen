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
                IMAGO-DEL <span className='g-text'>SOLAR GENERATORS</span>
            </h1>
            <p className="text_muted">
               Imago-del Solar Storage is a cameroon-based enterprises located in Bamenda, specializing in the sales of solar generators and solar panels. Our mission is to provide sustainable energy solutions to a diverse climate, including fatory owners, individuals,churches and bars, there by promoting renewable energy usage accross the region. With the increasing demand for reliable energy sources our business aims to capitalize on the growing trend for solar energy adoption. To facilitate this growth and expand our market reach, we are seeking investment or strategic partnerships that will enable us to enhance our product offering and establish a stronger presence in the renewable energy sector.

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