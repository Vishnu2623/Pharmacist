import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'
import Homepage from '../../Pages/DeliveryBoy/Homepage'

const BoyProfile = () => {
  return (<>
    <Homepage/>
    <div className="main-content" style={{marginTop:'100px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Delivery Boy Myprofile</h2>
  <form>
  
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Update name"/>
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Address:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        placeholder="Update your Address"/>
    </div>
    <div className="productform-group">
      <label htmlFor="Pincode" className="productform-label">
      Pincode
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Update the Pincode"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        City:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Update City"/>
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Phone No:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Update your Phone Number"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Email:
      </label>
      <input
        type="text"
        className="productform-control"      
        placeholder="Update your Email Id"
      />
    </div>
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
     Update
    </button>
    
  </form>
</div>
</div></>

  )
}

export default BoyProfile