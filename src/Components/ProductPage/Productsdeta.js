import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiStarFill, RiStarLine, RiHeartLine, RiEyeLine } from 'react-icons/ri';
import image from '../../assets/5.jpg'
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import Slider from 'react-slick';


const productImages = [img1, img2, img3, img4 ,img5];

const Productsdeta = () => {
const product = {
  name: 'Blueberry Jam',
  image: image, 
  rating: 4.5,
  price: 299,
  weight: '500g',
};
  const [quantity, setQuantity] = useState(1);

   const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center main-wrap">
        <Col md={6} className="text-center">
          <div  className="zoom-box"
    style={{
      backgroundImage: `url(${product.image})`,
      backgroundPosition: `${position.x}% ${position.y}%`,
      backgroundSize: zoom ? '200%' : 'cover',
      transform: zoom ? 'scale(1.02)' : 'scale(1)',
    }}
    onMouseEnter={() => setZoom(true)}
    onMouseLeave={() => setZoom(false)}
    onMouseMove={handleMouseMove} />
              <Slider
            dots={false}
            infinite
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            arrows
            className="mt-3"
            >
            {productImages.map((img, idx) => (
            <div key={idx} className="px-2">
            <img
            src={img}
            alt={`Thumb ${idx}`}
            className="img-fluid"
            style={{ height: '80px', objectFit: 'cover', borderRadius: '5px' }}
            />
            </div>
            ))}
            </Slider>

        </Col>
        {/* Product Info */}
        <Col md={6}>
          <div className="bb-single-pro-contact">
            <div className="bb-sub-title">
              <h4>Ground Nuts Oil Pack 52g</h4>
            </div>

            {/* Ratings */}
            <div className="bb-single-rating d-flex align-items-center mb-2">
              <span className="bb-pro-rating">
                {[...Array(4)].map((_, i) => <RiStarFill key={i} color="#ffc107" />)}
                <RiStarLine color="#ccc" />
              </span>
              <span className="bb-read-review ms-3">
                |&nbsp;&nbsp;<a href="#bb-spt-nav-review">992 Ratings</a>
              </span>
            </div>

            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil laboriosam voluptatem ab consectetur dolorum id, soluta sunt at culpa commodi totam quod natus qui!
            </p>

            {/* Pricing */}
            <div className="bb-single-price-wrap mb-3">
              <div className="bb-single-price d-flex justify-content-between">
                <div className="price">
                  <h5>₹923.00 <span className="text-danger">-78%</span></h5>
                </div>
                <div className="mrp">
                  <p>M.R.P. : <span className="text-muted text-decoration-line-through">₹1,999.00</span></p>
                </div>
              </div>

              <div className="bb-single-price d-flex justify-content-between">
                <div className="sku">
                  <h5>SKU#: WH12</h5>
                </div>
                <div className="stock">
                  <span className="text-success">In stock</span>
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div className="bb-single-list mb-3">
              <ul>
                <li><span>Closure :</span> Hook &amp; Loop</li>
                <li><span>Sole :</span> Polyvinyl Chloride</li>
                <li><span>Width :</span> Medium</li>
                <li><span>Outer Material :</span> A-Grade Standard Quality</li>
              </ul>
            </div>

            {/* Weights */}
            <div className="bb-single-pro-weight mb-3">
              <div className="pro-title">
                <h4>Weight</h4>
              </div>
              <div className="bb-pro-variation-contant">
                <ul className="d-flex gap-2">
                  <li className="active-variation"><span>250g</span></li>
                  <li><span>500g</span></li>
                  <li><span>1kg</span></li>
                  <li><span>2kg</span></li>
                </ul>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="bb-single-qty d-flex align-items-center justify-content-between">
              <div className="qty-plus-minus  border-style d-flex align-items-center">
                <div className="bb-qtybtn me-2" onClick={decrement}>-</div>
                <input readOnly className="qty-input text-center" type="text" value={quantity} name="gi-qtybtn" style={{ width: '50px' }} />
                <div className="bb-qtybtn ms-2" onClick={increment}>+</div>
              </div>

              <div className="buttons">
                <a className="bb-btn-2 btn btn-primary" href="/cart/">View Cart</a>
              </div>

              <ul className="bb-pro-actions d-flex gap-3 list-unstyled m-0">
                <li className="bb-btn-group">
                  <a href="#"><RiHeartLine size={20} /></a>
                </li>
                <li className="bb-btn-group">
                  <a href="#" title="Quick view">
                    <RiEyeLine size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Productsdeta;
