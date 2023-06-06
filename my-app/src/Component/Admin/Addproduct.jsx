import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const Addproduct = () => {
  return (<>
    
    <div className="productcontainer">
  <h2 className="text-center mb-4">Add Medicine</h2>
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
              <label htmlFor="subcategory" className="productform-label">
                Medicine Subcategory:
              </label>
              <select
                className="productform-control"
                id="subcategory"
                required=""
              >
                <option value="">Select Medicine subcategory</option>
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
                <option value="subcategory3">Subcategory 3</option>
              </select>
            </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Medicine Name:
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
      <label htmlFor="productDescription" className="productform-label">
        Medicine Description:
      </label>
      <textarea
        className="productform-control"
        id="productDescription"
        rows={5}
        placeholder="Enter Medicine description"
        required=""
        defaultValue={""}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Medicine Price:
      </label>
      <input
        type="number"
        className="productform-control"
        id="productPrice"
        placeholder="Enter Medicine price"
        required=""
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productImage" className="productform-label">
      Medicine Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        id="productImage"
        required=""
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Add  Medicine
    </button>
  </form>
</div>
</>

  )
}

export default Addproduct