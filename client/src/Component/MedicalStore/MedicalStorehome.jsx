import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const MedicalStorehome = () => {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  const logout = () => {
    localStorage.removeItem('medical_store_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/login')
  }
  useEffect(() => {
    const store_id = localStorage.getItem('medical_store_id')
    if (!store_id) {
      navigate('/login')
    }
  }, [])
const medical_store_id=  localStorage.getItem('medical_store_id')
if(!medical_store_id){
  navigate('/login')
}
  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2 style={{ marginTop: "20px", color: "white" }}>
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
              <a href="storeprofile">
                <span className="las la-users" />
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('Medicine')}>
                <span className="las la-shopping-bag" />
                <span>Medicines</span>
              </a>
              {activeDropdown === 'Medicine' && (
                <ul style={{ paddingTop: '8px', marginLeft: '27px' }}>
                  <li><a href="Storeaddmedicine">Add Medicines</a></li>
                  <li><a href="managestock">Manage Medicine</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('Order')}>
                <span className="las la-shopping-bag" />
                <span>Manage Order</span>
              </a>
              {activeDropdown === 'Order' && (
                <ul style={{ paddingTop: '8px', marginLeft: '27px' }}>
                  <li><a href="managemedicineorder">View Order</a></li>
                  <li><a href="viewprescriptionorder">View Prescription</a></li>
                  {/* <li><a href="#">Connect to Delivery Boy</a></li> */}
                  <li><a href="#">View Delivey Status</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown('Payment')}>
                <span className="las la-shopping-bag" />
                <span>Manage Payment</span>
              </a>
              {activeDropdown === 'Payment' && (
                <ul style={{ paddingTop: '8px', marginLeft: '27px' }}>
                  <li><a href="viewpaymentcustomers">View Payment Customer</a></li>
                </ul>
              )}
            </li>

            <li>
              <a onClick={logout}>
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
                <small> Medical Store</small>

                <span className="las la-caret-down" />
              </button>
              <div className="dropdown-content">
                <a href="storepasschange">Setting</a>
                <a onClick={logout}>Logout</a>
              </div>
            </div>
          </div>
        </header>

      </div>
    </>

  )
}

export default MedicalStorehome