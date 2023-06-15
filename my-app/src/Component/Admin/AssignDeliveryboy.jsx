import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const AssignDeliveryboy = () => {
  return (<>
    <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Assign Delivery Boy</h2>
  <form>
  
  <div className="productform-group">
              <label  className="productform-label">
                Choose Delivery Boy:
              </label>
              <select
                className="productform-control"
                
              >
                <option value="">Select Delivery Boy</option>
                <option value="DB1">Delivery Boy 1</option>
                <option value="DB2">Delivery Boy 2</option>
                <option value="DB3">Delivery Boy 3</option>
              </select>
            </div>
            <div className="productform-group">
              <label  className="productform-label">
                Choose Working Area:
              </label>
              <select
                className="productform-control"
                
              >
                <option value="">Select Pincodes</option>
                <option value="">676302</option>
                <option value="">676307</option>
                <option value="">676312</option>
              </select>
            </div>
    
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
      Submit
    </button>
    <button type="Reset" className="btn btn-primary productsubmit-btn">
      Reset
    </button>
  </form>
</div>
</div></>

  )
}

export default AssignDeliveryboy