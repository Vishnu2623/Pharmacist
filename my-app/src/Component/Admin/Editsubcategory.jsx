import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const Editsubcategory = () => {
  return (
    <>
     <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Medicine Sub Category</h2>
  <form>
  <div className="productform-group">
              <label htmlFor="category" className="productform-label">
                Medicine Category:
              </label>
              <select
                className="productform-control"
                id="category"
                required=""
              >
                <option value="">Select Medicine category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Medicine Sub Category Name:
      </label>
      <input
        type="text"
        className="productform-control"
        id="productName"
        placeholder="Enter Medicine name"
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
      Update SubCategory
    </button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Editsubcategory