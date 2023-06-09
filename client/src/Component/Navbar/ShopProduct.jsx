import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import { Link, useParams } from 'react-router-dom';

const ShopProduct = () => {
  const { id } = useParams();
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
  useEffect(() => {
    fetch(`http://localhost:5000/addmedicine/view-medicine/${id}`)
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
    
    const cartData = {
      medicine_id: medicine._id,
      medicinename: medicine.medicinename,
      medicineimage: medicine.medicineimage,
      medicinequantity: 1,
      medicineprice: medicine.medicineprice,
    };
  
    const wishlistData = {
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
      <Shopnavbar />
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="index.html">Home</a>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Store</strong>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Search"
          style={{
            maxWidth: "100%",
            backgroundColor: "antiquewhite",
            height: 100,
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "100%", color: "#D9230F", marginTop: "40px" }}
          >
            <div className="row">
              <div className="col-12">
                <div id="custom-search-input">
                  <div className="input-group">
                    <input
                      type="text"
                      className="search-query form-control"
                      placeholder="Search Medicines"
                    />
                    <span className="input-group-btn">
                      <button type="button" disabled="">
                        <span className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {medicines.map((medicine, index) => (
              <div className="col-sm-6 col-lg-4 text-center item mb-4" key={index}>
                <span className="tag">Sale</span>
                <div className="product-image">
                  <Link to={`/addcart/${medicine.id}`}>
                    <img src={medicine.medicineimage} alt="Image" />
                  </Link>
                  {/* <a href="#" className="wishlist-icon">
                    <i className="fas fa-heart" />
                  </a> */}



<Link to="" className="wishlist-icon" onClick={() => handleAddToCart(medicine)}>
  <i className="fas fa-heart" />
</Link>

                 
                </div>
                <h3 className="text-dark">
                <Link
  to={`/addcart/${medicine.id}?description=${medicine.medicinedescription}&medicine=${medicine.medicinename}&image=${medicine.medicineimage}`}
>
  {medicine.medicinename}
</Link>


</h3>

                <p className="price">Rs{medicine.medicineprice}</p>
                <Link
                  to={`/Ecart/${medicine.id}`}
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(medicine)}
                >
                  ADD TO CART
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">&gt;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;