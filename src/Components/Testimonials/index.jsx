import React from 'react'
import "./Testimonials.css"
import Slider from 'react-slick'
import { FaStar } from 'react-icons/fa'
import { testimonial } from '../../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:true,
        pauseOnHover:true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:[
            {
                breakpoint:600,
                settings:{

                }
            }
        ]
    }
  return (
    <section id='testimonials'>
        <div className="container">
            <h1 className="title">
                Clients <span className="g_text">Testimonies</span>
            </h1>
            <Slider {...settings} className='clients_container'>
                {
                    testimonial.map((list,index)=>(
                        <React.Fragment key={index}>
                            <div className='stars_container'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                           <p className="text_muted container">{list.review}</p>
                           <div className="user_row">
                            <div className="profile">
                                <img src={list.image} alt={list.name} />
                            </div>
                            <div className="details">
                                <h3 className="name">{list.name}</h3>
                                <small>CEO of benvix</small>
                            </div>
                           </div>
                        </React.Fragment>

                    ))
                }

            </Slider>
        </div>

    </section>
  )
}

export default Testimonials