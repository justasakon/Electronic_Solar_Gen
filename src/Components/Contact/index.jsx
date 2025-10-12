import React from 'react';
import "./Contact.css";
import { contacts } from '../../data';

const Contact = () => {
  return (
    <section id='contact'> {/* Corrected ID here */}
      <div className="bg_image"></div>
      <div className="overlay"></div>
      <div className="container">
        <div className="column">
          {
            contacts.map((contact, index) => (
              <div className="contact_info" key={index}>
                <div className="icon_container">{contact.icon}</div>
                <div className="details">
                  <p className="text_muted">{contact.name}</p>
                  <h3 className="value">{contact.value}</h3>
                </div>
              </div>
            ))
          }
        </div>
        <div className="column form_container">
          <div className="form_top">
            <h3 className="sub_title g_text">Keep In Touch</h3>
            <p>
              
            </p>
          </div>
          <div className="form_middle">
            <div className="row">
              <input 
                type="text" 
                placeholder='First name' 
                name='firstname' 
                className='control' 
              />
              <input 
                type="text" 
                placeholder='Last name' 
                name='lastname' 
                className='control' 
              />
            </div>
            <div className="row">
              <input 
                type="email" 
                placeholder='Email address' 
                name='email' 
                className='control' 
              />
              <input 
                type="tel" 
                placeholder='Phone number' 
                name='phone' 
                className='control' 
              />
            </div>
            <textarea  
              id="" 
              name="message" 
              cols={30} 
              rows={5} 
              placeholder='Message' 
              className='control' // Corrected class name here
            ></textarea>
          </div>
          <div className="form_bottom">
            <button className="btn btn_primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;