import React from 'react'

const Homenav = () => {
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
            placeholder="Sesrch Medicines & Health Products"
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
        <div className="main-nav d-none d-lg-block">
          <nav
            className="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul className="site-menu js-clone-nav d-none d-lg-block">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              {/* <li><a href="shop.html">Store</a></li> */}
              <li>
                <a href="About">About</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
              <li className="has-children">
                <a href="#">Register</a>
                <ul className="dropdown">
                  <li>
                    <a href="Medicalreg">Medical Store</a>
                  </li>
                  <li>
                    <a href="Userreg">User</a>
                  </li>
                  <li>
                    <a href="Deliveryboy">Delivery Boy</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="icons">
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
  <div
    className="site-blocks-cover"
    style={{ backgroundImage: 'url("images2/hero_1.jpg")' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
          <div className="site-block-cover-content text-center">
            <h2 className="sub-title" style={{ fontWeight: "bold" }}>
              "Stay Healthy, Stay Informed,Online Pharmacy for Medical Needs"
            </h2>
            <h1>Welcome To Nostrum</h1>
            <p>
              <a href="Login" className="btn btn-primary px-5 py-3">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row align-items-stretch section-overlap">
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="banner-wrap bg-primary h-100">
            <img src="./images2/delivery2.jpg" width="100%" />
            <a href="#" className="h-100">
              <h5>
                Free Home <br /> Delivery
              </h5>
              <p>
                Get Your Prescription Medicines
                <strong>Conveniently Delivered Right At Your Doorstep</strong>
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="banner-wrap h-100">
            <img src="./images2/ba.jpg" width="100%" />
            <a href="#" className="h-100">
              <h5>
                Medicines <br /> Up To 30% Off
              </h5>
              <p>
                Health &amp; Wellness Products<br/><br/>
                <button type="button" className="btn btn-warning">
                  Order Now
                </button>{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="banner-wrap bg-warning h-100">
            <img src="./images2/cod.jpg" width="100%" />
            <a href="#" className="h-100">
              <h5>
                Cash On Delivery <br /> Available
              </h5>
              <p>
                Order Now.Pay On Delivery
                {/* <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong> */}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Homenav