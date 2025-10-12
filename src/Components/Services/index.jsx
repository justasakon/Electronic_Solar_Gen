import React, { useState } from 'react';
import "./Services.css";
import { services } from '../../data';
import { Link } from 'react-scroll';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to manage selected image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id='services'>
      <div className="container">
        <h1 className="title">Our <span className="g-text">Services</span></h1>
        <h3 className="sub_title text_muted">
          We are trailblazers in the realm of renewable energy.
        </h3>
        <div className="services_container">
          {
            services.map((service, index) => (
              <div className="service" key={index}>
                <div className="picture">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="details">
                  <h3>{service.name}</h3>
                  <p className="text_muted description">
                    {service.description}
                  </p>
                </div>
                <div className="btn btn_primary btn-view-image">
                  <button className="btn">Read More</button>
                  <Link to='contact' className='btn btn_primary'>Get Started</Link>
                  <button 
                    className="btn btn_primary" 
                    onClick={() => handleImageClick(service.image)}
                  >
                    View Image
                  </button>
                </div>
              </div>
            ))
          }
        </div>

        {selectedImage && (
          <div className="full-image-modal" onClick={closeImage}>
            <img src={selectedImage} alt="Full View" className="full-image" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;