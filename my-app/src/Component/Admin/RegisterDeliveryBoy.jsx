import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const RegisterDeliveryBoy = () => {
  return (<>
    <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Register Delivery Boy</h2>
  <form>
  
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter name"/>
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Address:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        placeholder="Enter your Address"/>
    </div>
    <div className="productform-group">
      <label htmlFor="Pincode" className="productform-label">
      Pincode
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter the Pincode"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Phone No:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter your Phone Number"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Email:
      </label>
      <input
        type="text"
        className="productform-control"      
        placeholder="Enter your Email Id"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Username:
      </label>
      <input
        type="text"
        className="productform-control"      
        placeholder="Enter your Username"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Password:
      </label>
      <input
        type="text"
        className="productform-control"      
        placeholder="Enter your Password"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Conform Password:
      </label>
      <input
        type="text"
        className="productform-control"      
        placeholder="Enter your Conform Password"
      />
    </div>
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
      Register
    </button>
    <button type="Reset" className="btn btn-primary productsubmit-btn">
      Reset
    </button>
  </form>
</div>
</div></>

  )
}

export default RegisterDeliveryBoy