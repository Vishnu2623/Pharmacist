import React from 'react'
import Shopnavbar from './Shopnavbar'
import Publicuserfooter from '../Footer/Publicuserfooter'

const Wishlist = () => {
  return (
    <>
    <Shopnavbar/>
 
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h2 className='text-center'>
        Wishlist
      </h2>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval={0}
      >
        {/* Carousel indicators */}
       
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="item active">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Chanca Piedra</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>$400.00</strike> <b>$369.00</b>
                    </p>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Umcka Cold Care</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>$25.00</strike> <b>$23.99</b>
                    </p>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Cetyl Pure</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>$899.00</strike> <b>$649.00</b>
                    </p>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>CLA Core</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>$315.00</strike> <b>$250.00</b>
                    </p>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Poo Pourri</h4>
                    <p className="item-price">
                      <strike>$289.00</strike> <span>$269.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Poo Pourri</h4>
                    <p className="item-price">
                      <strike>$1099.00</strike> <span>$869.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_04.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Poo Pourri</h4>
                    <p className="item-price">
                      <strike>$109.00</strike> <span>$99.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="addcart" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="images2/product_05.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Bioderma</h4>
                    <p className="item-price">
                      <strike>$109.00</strike> <span>$99.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
             </div>
             </div>
        </div>
        {/* Carousel controls */}
        <a
          className="carousel-control left"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="carousel-control right"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
        
      </div>
    </div>
  </div>
</div>
<Publicuserfooter/>
</>

  )
}

export default Wishlist