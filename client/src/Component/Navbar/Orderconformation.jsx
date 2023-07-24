import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';
import { useParams } from 'react-router-dom';

const Orderconformation = () => {
  const id=localStorage.getItem('login_id')
  
  const [order,setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payment/view-order/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrder(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <Shopnavbar />
      <div className="bg-light py-3">
        {/* ... */}
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="icon-check_circle display-3 text-success" />
              <h2 className="display-3 text-black">Thank you!</h2>
                <div style={{marginTop:'20px'}}>
                  <h2>Order ID: {order.order_id}</h2>
                  {/* <h4>Order Medicine Name</h4> */}
                  {/* ... */}
                  <p>
                    {/* Displaying payment details */}
                    Payment Method: {order.paymentMethod}<br />
                    Total Amount: {order.totalAmount}<br />
                    Order Date: {order.date}<br />
                  </p>
                </div>
           

              <p>
                <a
                  href="Ecommerce"
                  className="btn btn-md height-auto px-4 py-3 btn-primary"
                >
                  Back to store
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Orderconformation;
