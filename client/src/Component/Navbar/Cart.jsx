import React, { useState, useEffect } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';

const Cart = () => {  
 const id=localStorage.getItem('login_id')
  const navigate = useNavigate()
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


  const handleRemove = (productId) => {
    fetch(`http://localhost:5000/addcart/delete-cart/${productId}`, {
      method: 'DELETE',
    });
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item._id === itemId) {
          return {
            ...item,
            medicinequantity: item.medicinequantity > 1 ? item.medicinequantity - 1 : 1,
          };
        }
        return item;
      })
    );
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item._id === itemId) {
          return {
            ...item,
            medicinequantity: parseInt(item.medicinequantity, 10) + 1,
          };
        }
        return item;
      })
    );
  };

  const renderCartItems = () => {
    
    return cartItems.map((item) => (
      <tr key={item._id}>
        <td className="product-thumbnail">
          <img src={`/upload/${item.medicineimage}`} alt="Image" className="img-fluid" />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">{item.medicinename}</h2>
        </td>
        <td>{item.medicineprice}</td>
        <td>
          <div className="input-group mb-3" style={{ width: '200px' }}>
            <div className="input-group-prepend">
              <button
                className="btn btn-danger btn-md btn-block js-btn-minus"
                type="button"
                style={{ height: '33px' }}
                onClick={() => handleDecrement(item._id)}
              >
                −
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={item.medicinequantity}
            />
            <div className="input-group-append">
              <button
                className="btn btn-success btn-md btn-block js-btn-plus"
                type="button"
                style={{ height: '33px' }}
                onClick={() => handleIncrement(item._id)}
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td>{item.medicinequantity * item.medicineprice}</td>
        <td>
          <button className="btn btn-primary height-auto btn-sm" onClick={() => handleRemove(item._id)}>
            X
          </button>
        </td>
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
    <div className="site-wrap">
      <div className="site-navbar py-2">
      <div className="search-wrap">
      <div className="container">
        <a href="#" className="search-close js-search-close">
          <span className="icon-close2" />
        </a>
        <form action="#" method="post">
          <input
            type="text"
            className="form-control"
            placeholder="Search keyword and hit enter..."
          />
        </form>
      </div>
    </div>
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
          <div className="site-logo">
            <a href="index.html" className="js-logo-clone">
              Nostrum Pharma
            </a>
          </div>
        </div>
        
        <div className="icons">
          <a href="#" className="icons-btn d-inline-block js-search-open">
            <span className="icon-search" />
          </a>
          <a href="Ecart" className="icons-btn d-inline-block bag">
            <span className="icon-shopping-bag" />
            <span className="number">2</span>
          </a>
          <a
            href="#"
            className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
          >
            <span className="icon-menu" />
          </a>
        </div>
      </div>
    </div>
      </div>
      <div className="bg-light py-3">
      <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
          <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
          <strong className="text-black">Cart</strong>
        </div>
      </div>
    </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>{renderCartItems()}</tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-md btn-block">
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-md btn-block">
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="row">
                {/* Coupon code input */}
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                  <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">{calculateSubtotal()}</strong>
                </div>
                  </div>
                  <div className="row mb-5">
                  <div className="col-md-6">
                  <span className="text-black">Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">{calculateTotal()}</strong>
                </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="col-md-12">
                      <Link to="/pay" className="btn btn-primary btn-lg btn-block">
  Proceed To Checkout
</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
