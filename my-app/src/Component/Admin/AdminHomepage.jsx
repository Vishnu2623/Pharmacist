import React, {useState}from 'react'


const AdminHomepage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  return (
    <>
    <input type="checkbox" id="nav-toggle" />
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2 style={{marginTop:"20px",color:"white"}}>
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
            <a href="AProfile">
              <span className="las la-user-circle" />
              <span style={{ marginLeft: '8px' }}>My Profile</span>
            </a>
          </li>
          <li>
            <a href="Viewuser">
              <span className="bi bi-eye" />
              <span style={{ marginLeft: '8px' }}>View User</span>
            </a>
          </li>
          <li>
            <a href="Approve">
              <span className="bi bi-eye" />
              <span style={{ marginLeft: '8px' }}>Manage Medical Store</span>
            </a>
          </li>
          

      <li>
        <a href="#" onClick={() => toggleDropdown('deliveryBoy')}>
          <span className="fas fa-heart" />
          <span style={{ marginLeft: '8px' }}>Delivery Boy</span>
        </a>
        {activeDropdown === 'deliveryBoy' && (
          <ul style={{ paddingTop: '8px', marginLeft: '27px' }}>
            <li><a href="RegDeliveryBoy">Add</a></li>
            <li><a href="mngDeliveryBoy">Manage</a></li>
            <li><a href="#">Assign</a></li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" onClick={() => toggleDropdown('addmedicine')}>
          <span className="bi bi-plus" />
          <span style={{ marginLeft: '8px' }}>Medicine</span>
        </a>
        {activeDropdown === 'addmedicine' && (
          <ul style={{ paddingTop: '8px', marginLeft: '27px' }}>
            <li><a href="Addcategory">Add Medicine Category</a></li>
            <li><a href="Addsubcategory">Add Medicine Subcategory</a></li>
            <li><a href="Addmedicine">Add Medicine</a></li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" onClick={() => toggleDropdown('managemedicine')}>
          <span className="bi bi-plus" />
          <span style={{ marginLeft: '8px' }}>Manage Medicine</span>
        </a>
        {activeDropdown === 'managemedicine' && (
          <ul style={{ paddingTop: '8px', marginLeft: '27px' }}>
            <li><a href="Managecategory">Medicine Category</a></li>
            <li><a href="Managesubcategory"> Medicine Subcategory</a></li>
            <li><a href="Managemedicine">Added Medicine</a></li>
          </ul>
        )}
      </li>
    </ul>
             <li><a href=""><span class="bi bi-box-arrow-right"></span><span style={{ marginLeft: '8px' }}>Log Out</span></a></li>
            {/* <li><a href=""><span class="las la-clipboard-list"></span><span>Tasks</span></a></li> */} 
        
      </div>
    </div>
    <div className="main-content">
      <header>
        <h2>
          <label htmlFor="nav-toggle">
            <span className="las la-bars" ></span>
          </label>
          Dashboard
        </h2>
        <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="Search here"/>
           </div>
        <div className="user-wrapper">
  <div className="dropdown">
    <button className="dropbtn">
      <img src="images/admin.png" width="30px" height="30px" alt="" />
      <small> Admin</small>
      
      <span className="las la-caret-down" />
    </button>
    <div className="dropdown-content">
      <a href="Cpassword">Setting</a>
      <a href="#">Logout</a>
    </div>
  </div>
</div>

      </header>
      <main>
       </main>
    </div>
  </>
  
  )
}

export default AdminHomepage