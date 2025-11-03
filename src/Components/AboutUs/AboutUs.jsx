import React from 'react';
import  servicesData from '../../data/ServiceData';

const AboutUs = () => {
  return (
    <section className="section-services padding-tb-50">
      <div className="container">
        <div className="row mb-minus-24">
          <div className="col-12">
            <div className="section-title bb-center">
              <h2 className="bb-title">Our <span>Services</span></h2>
              <p>Customer service should not be a department. It should be the entire company.</p>
            </div>
          </div>

          { servicesData.map((servicesData, index) => (
            <div key={index} className="mb-24 col-12 col-lg-3 col-md-6">
              <div className="css-zvi4ix" style={{ animationDelay:  servicesData.delay }}>
                <div className="bb-services-box">
                  <div className="services-img">
                    <img src={ servicesData.image} alt={ servicesData.alt} />
                  </div>
                  <div className="services-contact">
                    <h4>{ servicesData.title}</h4>
                    <p>{ servicesData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
