import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/wishlist/view-wishlist')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const handleRemoveFromWishlist = (itemId) => {
    fetch(`http://localhost:5000/wishlist/delete-from-wishlist/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Item deleted successfully, update the wishlist state
          setCategories(categories.filter((category) => category._id !== itemId));
          console.log('Item deleted from wishlist successfully');
        } else {
          console.log('Failed to delete item from wishlist');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <>
      <Shopnavbar />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Wishlist</h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval={0}
            >
              <div className="carousel-inner">
                <div className="item active">
                  <div className="row">
                    {categories.map((category, index) => (
                      <div className="col-sm-3" key={index}>
                        <div className="thumb-wrapper">
                          <span className="wish-icon">
                            <i
                              className="fa fa-heart-o"
                              onClick={() => handleRemoveFromWishlist(category._id)}
                            />
                          </span>
                          <div className="img-box">
                            <img
                              className="img-responsive"
                              alt=""
                              src={category.medicinemimage}
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{category.medicinename}</h4>
                            {/* <div className="star-rating">
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
                            </div> */}
                            <p className="item-price">
                              <strike>$400.00</strike> <b>$369.00</b>
                            </p>
                            <Link to={`/Ecart/:id`} className="btn btn-primary"> Add to Cart</Link>
                            {/* <a href="addcart" className="btn btn-primary">
                              Add to Cart
                            </a> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
      <Publicuserfooter />
    </>
  );
};

export default Wishlist;
