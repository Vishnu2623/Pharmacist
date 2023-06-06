import React from 'react'
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage'

const MyProfile = () => {
  return (<>
   <MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>

    
    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Profile</h2>
  <form>

    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Store Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter Store name"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        License Number:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter License Number"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Store Address:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        placeholder="Enter Medicine description"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Pincode:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Pincode"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      City:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter City"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Phone:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Mobile Number"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Email id:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter Email Id"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      User Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter Username"
      />
    </div>
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
      Update
    </button>
    <button type="reset" className="btn btn-primary productsubmit-btn">
      Reset
    </button>
  </form>
</div>
</div>
</>

  )
}

export default MyProfile