import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const EditCategory = () => {
  return (
    <>
     <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Medicine Category</h2>
  <form>
  <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Medicine Category Name:
      </label>
      <input
        type="text"
        className="productform-control"
        id="productName"
        placeholder="Enter Medicine Category name"
        required=""
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productImage" className="productform-label">
      Medicine Category Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        id="productImage"
        required=""
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
    Update  Category
    </button>
  </form>
  </div>
  </div>
    </>
  )
}

export default EditCategory