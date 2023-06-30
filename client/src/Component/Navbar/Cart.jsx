import React, { useState } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", quantity: 1 },
    { id: 2, name: "Product 2", quantity: 1 },
    // Add more products as needed
  ]);

  const handleDecrement = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      // Update the products array with the updated quantities
      return updatedProducts;
    });
  };

  const handleIncrement = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      // Update the products array with the updated quantities
      return updatedProducts;
    });
  };

  // Render the products and their quantities
  const renderProducts = () => {
    return products.map((product) => (
      <tr key={product.id}>
        <td className="product-thumbnail">
          <img src="images/product_01.png" alt="Image" className="img-fluid" />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">{product.name}</h2>
        </td>
        <td>$55.00</td>
        <td>
          <div className="input-group mb-3" style={{ width: '200px' }}>
            <div className="input-group-prepend">
              <button
                className="btn btn-danger btn-md btn-block js-btn-minus"
                type="button"
                style={{ height: '33px' }}
                onClick={() => handleDecrement(product.id)}
              >
                −
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              value={product.quantity}
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <div className="input-group-append">
              <button
                className="btn btn-success btn-md btn-block js-btn-plus"
                type="button"
                style={{ height: '33px' }}
                onClick={() => handleIncrement(product.id)}
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td>$49.00</td>
        <td>
          <a href="#" className="btn btn-primary height-auto btn-sm">
            X
          </a>
        </td>
      </tr>
    ));
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
                  <tbody>{renderProducts()}</tbody>
                </table>
              </div>
            </form>
          </div>
          {/* Rest of the code */}
        
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
            {/* <div className="col-md-6">
              <button className="btn btn-outline-primary btn-md btn-block">
                Continue Shopping
              </button>
            </div> */}
          </div>
          <div className="row">
            {/* <div className="col-md-12">
              <label className="text-black h4" htmlFor="coupon">
                Coupon
              </label>
              <p>Enter your coupon code if you have one.</p>
            </div>
            <div className="col-md-8 mb-3 mb-md-0">
              <input
                type="text"
                className="form-control py-3"
                id="coupon"
                placeholder="Coupon Code"
              />
            </div> */}
            {/* <div className="col-md-4">
              <button className="btn btn-primary btn-md px-4">
                Apply Coupon
              </button>
            </div> */}
          </div>
        </div>
        <div className="col-md-6 pl-5">
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 text-right border-bottom mb-5">
                  <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">$230.00</strong>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <span className="text-black">Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">$230.00</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onclick="window.location='checkout.html'"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart