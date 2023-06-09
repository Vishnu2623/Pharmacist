import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Publicusernav = () => {
  const navigate = useNavigate()
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const logout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/')
  }
  useEffect(() => {
    const users_id = localStorage.getItem('user_id')
    if (!users_id) {
      navigate('/')
    }
  }, [])
  
  return (
    <>
    <div className="banner_bg_main">
  {/* header top section start */}
  <div className="container">
    <div className="header_section_top">
      <div className="row">
        <div className="col-sm-12">
          <div className="custom_menu"></div>
        </div>
      </div>
    </div>
  </div>
  {/* header top section start */}
  {/* logo section start */}
  <div className="logo_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="ecommerce_logo">
            <p
              className="h1"
              style={{
                filter: "brightness(2000%)",
                color: "white",
                fontWeight: "bold",marginLeft:"400px"
              }}
            >
              Nostrum Pharma
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* logo section end */}
  {/* header section start */}
  <div className="header_section">
    <div className="container">
      <div className="containt_main">
        <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
  ×
</a>

          <a href="index">Home</a>
          <a href="">My Profile</a>
          <a href="Order">My Order</a>
          <a href="Orders">Orders History</a>
          <a href="ordertrack">Track Order</a>
          {/* <a href="">Add Address</a> */}
          {/* <a href="">Payment</a> */}
         
          {/* <a href="">My Reviews</a> */}
          <a href="wishlist">Wishlist</a>
          {/* <a href="">Privacy policy</a>
          <a href="">Terms &amp; Conditions</a> */}
          <a onClick={logout}>Log Out</a>
        </div>
        <span className="toggle_icon" onClick={openNav}>
  <img
    src="images/sidebar-icon-17.jpg"
    style={{ width: "3rem", marginTop: "-7.5px" }}
  />
</span>
<div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={handleButtonClick}
      >
        Choose Stores
      </button>

      {isModalOpen && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{textAlign:"center"}}>
                <h5 className="modal-title">Choose Nearest Medical Store</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
               
                <form>
                <input
                type="text"
                list="choosestore"
                placeholder="Enter Here"
              autoComplete="off"
                />
              <datalist id="choosestore">
              <option value="Store" />slnsk
            <option value="Store2" />
  </datalist>
</form>

              </div>
              <div className="modal-footer">
                
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        <div className="main">
          {/* Another variation with a button */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Medicines"
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                style={{ backgroundColor: "#f26522", borderColor: "#f26522", width:"10px" }}
              >
                <i className="fa fa-search"/>
              </button>
            </div>
          </div>
        </div>
        <div className="header_box">
         
          <div className="login_menu">
            <ul>
              <li>
              <div class="icons">
              <Link to={`/Ecart/:id`} className="icons-btn d-inline-block bag">            
              <span class="icon-shopping-bag"></span>
              <span class="number">2</span>
            </Link>  
            
            <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                class="icon-menu"></span></a></div>
               
              </li>
             
              <li>
  <div className="dropdown">
  
  <i className="fa fa-user" aria-hidden="true" />
  <a className="dropdown-toggle" data-toggle="dropdown">
    <span className="name_user" onClick={toggleDropdown}>User</span>
  </a>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <a className="dropdown-item" href="#">
          My Profile
        </a>
        <a className="dropdown-item" href="#">
          Settings
        </a>
        <a className="dropdown-item" onClick={logout}>
          <span>Log Out</span> <i className="fa fa-sign-out" />
        </a>
      </div>
    </div>
</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header section end */}
  {/* banner section start */}
  <div className="banner_section layout_padding">
    <div className="container">
      <div id="my_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="banner_taital">
                  Get Start <br />
                  Your favriot shoping
                </h1>
                <div className="buynow_bt">
                  <a href="shop">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="banner_taital">
                  Get Start <br />
                  Your favriot shoping
                </h1>
                <div className="buynow_bt">
                  <a href="shop">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="banner_taital">
                  Get Start <br />
                  Your favriot shoping
                </h1>
                <div className="buynow_bt">
                  <a href="shop">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#my_slider"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="carousel-control-next"
          href="#my_slider"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
  
</div>




    
  </>
  
  
  )
}

export default Publicusernav