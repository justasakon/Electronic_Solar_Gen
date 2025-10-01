import React from 'react'
import "./About.css"
import {company__photo} from "../../assets"
import {FaCheck} from 'react-icons/fa'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <section id='about'>
        <div className="container">
            <div className="column company_photo">
                <img src={company__photo} alt="solarix" />
            </div>
            <div className="column">
                <h3 className='sub_title'> With 7+ Years Experience</h3>
                
                <h1 className="sub_title">
                    Turning your <span className='g-text'>vission</span> into reality by focusing on the basics 
                </h1>
                <p className="text_muted description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere natus aliquid provident sunt vero voluptate unde mollitia dolores? Qui hic eligendi illum quidem ab quas aspernatur facilis similique optio?
                </p>
                <div className="group">

                    {/*Start row*/}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text_muted">Consultations</p>
                            <h3>Free</h3>
                        </div>
                    </div>
                    {/*End row */}

                    
                    {/*Start row*/}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text_muted">Expert</p>
                            <h3>Engineers</h3>
                        </div>
                    </div>
                    {/*End row */}

                    
                    {/*Start row*/}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text_muted">Customer</p>
                            <h3>Support</h3>
                        </div>
                    </div>
                    {/*End row */}

                    
                    {/*Start row*/}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text_muted">Quality</p>
                            <h3>Services</h3>
                        </div>
                    </div>
                    {/*End row */}
                </div>{/*End group */}

                <div className="buttons_container">
                    <Link to='project' smooth={true} className='btn'>Explore</Link>
                    <Link to='contact' smooth={true} className='btn btn_primary'>Get a quote</Link>
                </div>
                </div>


            </div>

    </section>
  )
}

export default About