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
            <a href="">
              <span className="las la-users" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-clipboard-list" />
              <span>View Customer Order</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-shopping-bag" />
              <span>View Customer Address</span>
            </a>
          </li>
          <li>
            <a href="">
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
          <img src="" width="30px" height="30px" alt="" />
          <div>
            <h4>John Doe</h4>
            <small>Super admin</small>
          </div>
        </div>
      </header>
      <main>
        <div className="dashboard-cards">
          <div className="card-single">
            <div>
              <h1>40</h1>
              <span>Ordered Customer</span>
            </div>
            <div>
              <span className="las la-users" />
            </div>
          </div>
          <div className="card-single">
            <div>
              <h1>79</h1>
              <span>Payment Customer</span>
            </div>
            <div>
              <span className="las la-clipboard" />
            </div>
          </div>
          <div className="card-single">
            <div>
              <h1>3</h1>
              <span>Available Total Medicines</span>
            </div>
            <div>
              <span className="las la-shopping-bag" />
            </div>
          </div>
          {/* <div class="card-single">
                <div>
                    <h1>6000</h1>
                    <span>Income</span>
                </div>
                <div>
                    <span class="las la-google-wallet"></span>
                </div>
            </div> */}
        </div>
      </main>
    </div>
  </>
  
  )
}

export default Deliveryboyhome