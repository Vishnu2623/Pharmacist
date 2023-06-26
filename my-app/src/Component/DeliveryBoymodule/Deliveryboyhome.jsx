import React from 'react'

const Deliveryboyhome = () => {
  return (
    <>
    <input type="checkbox" id="nav-toggle" />
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2 style={{color:"white",marginTop:"20px"}}>
          <span className="">Nostrum Pharma</span>
        </h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="" className="active">
              <span className="las la-igloo" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="deliveryboyprofile">
              <span className="las la-users" />
              <span>My Profile</span>
            </a>
          </li>
         
          
          <li>
            <a href="managedelivery">
              <span className="las la-shopping-bag" />
              <span>Manage Delivery</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-shopping-bag" />
              <span>Log Out</span>
            </a>
          </li>
          {/* <li><a href=""><span class="las la-receipt"></span><span>Inventory</span></a></li>
            <li><a href=""><span class="las la-user-circle"></span><span>Accounts</span></a></li>
            <li><a href=""><span class="las la-clipboard-list"></span><span>Tasks</span></a></li> */}
        </ul>
      </div>
    </div>
    <div className="main-content">
      <header>
        <h2>
          <label htmlFor="nav-toggle">
            <span className="las la-bars" />
          </label>
          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="las la-search" />
          <input type="search" placeholder="Search here" />
        </div>
        <div className="user-wrapper">
  <div className="dropdown">
    <button className="dropbtn">
      <img src="images/admin.png" width="30px" height="30px" alt="" />
      <small> Delivery Boy</small>
      
      <span className="las la-caret-down" />
    </button>
    <div className="dropdown-content">
      <a href="DBchangepassword">Setting</a>
      <a href="#">Logout</a>
    </div>
  </div>
</div>
      </header>
     
         
    </div>
  </>
  
  )
}

export default Deliveryboyhome