import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Addcart = () => {
  const { id } = useParams();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addmedicine/view-medicine-details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicines(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/store/view-chinnu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicines(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

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

   
     
      
  };
  return (
    <>
      <Shopnavbar />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <a href="shop.html">Store</a>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">
                {medicines.length > 0 && medicines[0].medicinename}
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            {medicines.map((medicine) => (
              <div className="col-md-5 mr-auto" key={medicine._id}>
                <div className="border text-center">
                  <img
                    src={`/upload/${medicine.medicineimage}`}
                    alt="Image"
                    className="img-fluid p-5"
                  />
                </div>
              </div>
            ))}
            <div className="col-md-6">
              {medicines.map((medicine) => (
                <div key={medicine._id}>
                  <h2 className="text-black">{medicine.medicinename}</h2>
                  <p>{medicine.medicinedescription}</p>
                  <p>Need Prescription?{medicine.needprescription}</p>
                  <p>
                    <strong className="text-primary h4">Amount: {medicine.medicineprice}</strong>
                  </p>
                  {/* <div className="mb-5">
                    <div className="input-group mb-3" style={{ maxWidth: 220 }}>
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-primary js-btn-minus"
                          type="button"
                          style={{ backgroundColor: 'red', height: '38px' }}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        defaultValue={1}
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        style={{ height: '38px' }}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary js-btn-plus"
                          type="button"
                          style={{ backgroundColor: 'green', height: '38px' }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div> */}
                  <p>
                  <Link
                  to={`/Ecart/${medicine._id}`}
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(medicine)}
                >
                  ADD TO CART
                </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Addcart;
