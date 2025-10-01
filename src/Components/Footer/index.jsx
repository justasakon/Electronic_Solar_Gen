import React from 'react';
import "./Footer.css";
import { footer } from '../../data';
import { Link } from 'react-scroll';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          {
            footer.map((list, index) => (
              <div className="column" key={index}>
                <h3 className="routes_name">{list.group}</h3>
                <div className="routes_container">
                  {
                    list.routes.map((route, i) => (
                      <Link to={route.id || "#"} className='route_item' key={i}>
                        <p className="name">{route.name}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <div className="column">
            <Logo/>
            <div className="newsletter">
              <h3>Get weekly update</h3>
              <div className="control_containers">
                <input type="email" placeholder='Enter your email address' className="control" />
                <button className="btn">Subscribe</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h3>copyright &copy; All right reserved -| 2025</h3>
          <p className="text_muted">Belt by Engineer justasAkon</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;