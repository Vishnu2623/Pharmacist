import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const login_id=localStorage.getItem('login_id')
  const [medicines, setMedicines] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addmedicine/view-medicine`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicines(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);


  const handleAddToCart = (medicine) => {
    const login_id = localStorage.getItem('login_id')
    const cartData = {
      login_id: login_id,
      medicine_id: medicine._id,
      medicinename: medicine.medicinename,
      medicineimage: medicine.medicineimage,
      medicinequantity: 1,
      medicineprice: medicine.medicineprice,
    };

    const wishlistData = {
      login_id: login_id,
      medicine_id: medicine._id,
      medicinename: medicine.medicinename,
      medicineimage: medicine.medicineimage,
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

    fetch('http://localhost:5000/wishlist/add-to-wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wishlistData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Item added to wishlist successfully');
          setWishlistData([...wishlistData, wishlistData]); // Update the wishlist data state
        } else {
          console.log('Failed to add item to wishlist');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  return (
    <>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">All Products</h2>
            </div>
          </div>
          <div className="row">
            {medicines.map((medicine) => (
              <div className="col-sm-6 col-lg-4 text-center item mb-4" key={medicine.id}>
                {medicine.onSale && <span className="tag">Sale</span>}
                <div className="product-image">
                  <a href="addcart">
                  <img src={`/upload/${medicine.medicineimage}`} alt="Image" />
                  </a>
                  <Link to="" className="wishlist-icon" onClick={() => handleAddToCart(medicine)}>
                    <i className="fas fa-heart" />
                  </Link>
                </div>
                <h3 className="text-dark">
                  <a href="addcart">{medicine.medicinename}</a>
                </h3>
                <p className="price">
                  {medicine.onSale && <del>{medicine.originalPrice}</del>}  Rs.{medicine.medicineprice}
                </p>
                <Link
                  to={`/Ecart/${medicine._id}`}
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(medicine)}
                >
                  ADD TO CART
                </Link>
              </div>
            ))}
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <a href="shop" className="btn btn-primary px-4 py-3">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
