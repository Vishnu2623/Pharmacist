import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const id = localStorage.getItem('login_id');
  const [inputs, setInputs] = useState({
    login_id:id,
   
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addcart/view-cart/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCartItems(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  console.log('value==>', inputs);
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  const registersubmit = (event) => {
    event.preventDefault();
    window.location.href = event.target.href;

    const cartItemsData = cartItems.map((item) => ({
      medicinename: item.medicinename,
      quantity: item.medicinequantity,
      amount: item.medicinequantity * item.medicineprice,
    }));
  
    const subtotal = calculateSubtotal();
    const totalamount = calculateTotal();
  
    const updatedInputs = { ...inputs, cartItems: cartItemsData, totalamount };
  
    axios
      .post(`http://localhost:5000/payment/save-order/${id}`,updatedInputs)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <tr key={item._id}>
        <td>
          {item.medicinename} <strong className="mx-2">x</strong> {item.medicinequantity}
        </td>
        <td>${item.medicinequantity * item.medicineprice}</td>
      </tr>
    ));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.medicinequantity * item.medicineprice;
    });
    return subtotal;
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  return (
    <>
      <>
        <Shopnavbar />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Checkout</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                <div className="p-3 p-lg-5 border">
                  <div className="form-group">
                    <label htmlFor="c_country" className="text-black">
                      State <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-control"
                      name="state"
                      value={inputs.state || ""}
                      onChange={setRegister}
                    >
                      <option value="Select a State">Select a State</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnadaka">Karnadaka</option>
                      <option value="Andra Pradesh">Andra Pradesh</option>
                      <option value="Hydrabad">Hydrabad</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                  </div>
                  <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='firstname'
                  value={inputs.firstname || ""}
                onChange={setRegister}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_lname" className="text-black">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='lastname'
                  value={inputs.lastname || ""}
                onChange={setRegister}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="c_companyname" className="text-black">
                  House Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='housename'
                  value={inputs.housename || ""}
                  onChange={setRegister}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="c_address" className="text-black">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='address'
                  value={inputs.address || ""}
                  onChange={setRegister}
                  placeholder="Street address"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, suite, unit etc. (optional)"
                name='addressline'
                value={inputs.addressline || ""}
                onChange={setRegister}
              />
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="c_state_country" className="text-black">
                  District / City <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='city'
                  value={inputs.city || ""}
                  onChange={setRegister}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_postal_zip" className="text-black">
                 Pincode <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='pincode'
                  value={inputs.pincode || ""}
                  onChange={setRegister}
                />
              </div>
            </div>
            <div className="form-group row mb-5">
              <div className="col-md-6">
                <label htmlFor="c_email_address" className="text-black">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='email'
                  value={inputs.email || ""}
                onChange={setRegister}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_phone" className="text-black">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name='phone'
                  value={inputs.phone || ""}
                onChange={setRegister}
                  placeholder="Phone Number"
                />
              </div>
            </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                    <div className="p-3 p-lg-5 border">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {renderCartItems()}
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Cart Subtotal</strong>
                            </td>
                            <td className="text-black">${calculateSubtotal()}</td>
                          </tr>
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Order Total</strong>
                            </td>
                            <td className="text-black font-weight-bold">
                              <strong>${calculateTotal()}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="border mb-3">
  <h3 className="h6 mb-0">
    <a
      className="d-block"
      data-toggle="collapse"
      href="#collapsebank"
      role="button"
      aria-expanded="false"
      aria-controls="collapsebank"
    >
      Direct Bank Transfer
    </a>
  </h3>
  <div className="collapse" id="collapsebank">
    <div className="py-2 px-4">
      <p className="mb-0">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
      </p>
    </div>
  </div>
</div>
<div className="border mb-3">
  <h3 className="h6 mb-0">
    <a
      className="d-block"
      data-toggle="collapse"
      href="#collapsecheque"
      role="button"
      aria-expanded="false"
      aria-controls="collapsecheque"
    >
      Cheque Payment
    </a>
  </h3>
  <div className="collapse" id="collapsecheque">
    <div className="py-2 px-4">
      <p className="mb-0">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
      </p>
    </div>
  </div>
</div>
<div className="border mb-5">
  <h3 className="h6 mb-0">
    <a
      className="d-block"
      data-toggle="collapse"
      href="#collapsepaypal"
      role="button"
      aria-expanded="false"
      aria-controls="collapsepaypal"
    >
      Paypal
    </a>
  </h3>
  <div className="collapse" id="collapsepaypal">
    <div className="py-2 px-4">
      <p className="mb-0">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
      </p>
    </div>
  </div>
</div>

                      <div className="form-group">
                      <Link to="/thanks" className="btn btn-primary btn-sm btn-block" onClick={registersubmit}>
  Place Order
</Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Publicuserfooter />
      </>
    </>
  );
};

export default Payment;