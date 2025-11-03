import React from 'react';
import { banners } from '../../data/banner';
 
const BannerOne = () => {
  return (
    <section className="section-banner-one py-5">
      <div className="container">
        <div className="row g-4">
          {banners.map((banner) => (
            <div key={banner.id} className="col-12 col-md-6">
              <div className={`banner-box shared-banner-style ${banner.bgClass} h-100 d-flex align-items-center`}>
                <div className="row bg-box-color-one align-items-center g-0">
                  <div className="col-5 brg">
                    <img
                      src={banner.image}
                      alt={`banner-${banner.id}`}
                      className="img-fluid w-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-7 p-3">
                    <h5 className="mb-2">{banner.title}</h5>
                    <p className="mb-3">{banner.text}</p>
                    <a className="btn btn-primary" href={banner.link}>
                      Shop Now
                    </a>
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

export default BannerOne;

