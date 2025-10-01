import React from 'react'
import "./Logo.css"
import { PiSolarPanelFill } from 'react-icons/pi'

const Logo = () => {
  return (
    <div className='logo'>
  <PiSolarPanelFill className='icon'/>
     <h1 className='name'>IMAGO-DEL<span className='color_primary'>SOLAR</span></h1>
    </div>
  )
}

export default Logo