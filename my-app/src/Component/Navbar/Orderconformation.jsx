import React from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Orderconformation = () => {
  // Placeholder for payment details
  const paymentDetails = {
    paymentMethod: 'Credit Card',
    totalAmount: '$50.00',
    transactionID: '1234567890',
  };

  // Placeholder for ecommerce model
  const ecommerceModel = {
    // Ecommerce model properties here
  };

  return (
    <>
      <Shopnavbar />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Thank You</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="icon-check_circle display-3 text-success" />
              <h2 className="display-3 text-black">Thank you!</h2>
              <h2>Order ID is 123</h2>
              <h4>Order Medicine Name</h4>
              <p className="lead mb-5">Your order was successfully completed.</p>
              <p>
                {/* Displaying payment details */}
                Payment Method: {paymentDetails.paymentMethod}<br />
                Total Amount: {paymentDetails.totalAmount}<br />
                Transaction ID: {paymentDetails.transactionID}<br />
              </p>
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
