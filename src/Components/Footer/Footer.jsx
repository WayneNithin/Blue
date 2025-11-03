import React from 'react';
import './Footer.css';
import { footerData, contactInfo } from './footerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
// import darkLogo from '../../assets/logo-dark.png';
import androidBadge from '../../assets/android.png';
import appleBadge from '../../assets/apple.png';


const companyInfo = {
  logo,
  // darkLogo,
  description:
    'BlueBerry is the biggest market of grocery products. Get your daily needs from our store.',
  appBadges: [
    { img: androidBadge, alt: 'android', href: '#' },
    { img: appleBadge, alt: 'apple', href: '#' },
  ],
};

const iconMap = {
  map: faMapMarkerAlt,
  phone: faPhone,
  email: faEnvelope,
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info Block */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="bb-footer-widget bb-footer-company">
              <img className="bb-footer-logo" src={logo} alt="footer logo" />
                {/* <img className="bb-footer-dark-logo" src={darkLogo} alt="footer dark logo" /> */}
              <p className="bb-footer-detail">{companyInfo.description}</p>
              <div className="bb-app-store d-flex gap-2">
                {companyInfo.appBadges.map((badge, index) => (
                  <a key={index} href={badge.href} className="app-img">
                    <img
                      className={badge.alt.toLowerCase()}
                      alt={badge.alt}
                      src={badge.img}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Data Columns */}
          {footerData.map((section, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2">
              <h5>{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {typeof link === 'string' ? (
                      <span>{link}</span>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={iconMap[item.iconKey]} className="me-2" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
