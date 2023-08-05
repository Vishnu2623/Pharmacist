import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const id = localStorage.getItem('login_id');
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/view-wishlist/${id}`)
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

  const handleAddToCart = (medicine) => {
    const cartData = {
      login_id: id,
      medicine_id: medicine._id,
      medicinename: medicine.medicinename,
      medicineimage: medicine.medicineimage,
      medicinequantity: 1,
      medicineprice: medicine.medicineprice,
    };

    fetch('http://localhost:5000/addcart/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Item added to cart successfully');
        } else {
          console.log('Failed to add item to cart');
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
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
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
                            <img className="img-responsive" alt="" src={`/upload/${category.medicineimage}`} />
                          </div>
                          <div className="thumb-content">
                            <h4>{category.medicinename}</h4>
                            <p className="item-price">
                              <b>Rs.{category.medicineprice}</b>
                            </p>
                            <Link to={`/Ecart/${category._id}`} className="btn btn-primary" onClick={() => handleAddToCart(category)}>
                              ADD TO CART
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left" />
              </a>
              <a className="carousel-control right" href="#myCarousel" data-slide="next">
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
