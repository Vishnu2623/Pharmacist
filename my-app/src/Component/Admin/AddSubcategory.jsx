import React, { useState } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage'

const AddSubcategory = () => {
  const [inputs, setInputs] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };
 
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);
    console.log('Selected image:', selectedImage);
  }
  return (
    <>
     <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Add Medicine Sub Category</h2>
  <form onSubmit={registersubmit}>
  <div className="productform-group">
              <label htmlFor="category" className="productform-label">
                Medicine Category:
              </label>
              <select
                className="productform-control"
                name="category"
                value={inputs.category || ""}
                onChange={setRegister}
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
        placeholder="Enter Medicine name"
        name="name"
        value={inputs.name || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productImage" className="productform-label">
      Medicine Category Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        accept="image/*"
        name="imageUpload"
        onChange={handleImageUpload} 
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Add SubCategory
    </button>
    </form>
    </div>
    </div>
    </>
  )
}

export default AddSubcategory