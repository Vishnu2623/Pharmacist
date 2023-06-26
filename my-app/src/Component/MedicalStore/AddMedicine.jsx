import React, { useState } from 'react';

const AddMedicine = () => {
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
  return (<>
    
    <div className="productcontainer">
  <h2 className="text-center mb-4">Add Medical Store Medicine</h2>
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
              <label htmlFor="subcategory" className="productform-label">
                Medicine Subcategory:
              </label>
              <select
                className="productform-control"
                name="subcategory"
                value={inputs.subcategory || ""}
                onChange={setRegister}
              >
                <option value="">Select Medicine subcategory</option>
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
                <option value="subcategory3">Subcategory 3</option>
              </select>
            </div>
            <div className="productform-group">
              <label htmlFor="subcategory" className="productform-label">
                Need a Prescription?:
              </label>
              <select
                className="productform-control"
                name="prescription"
                value={inputs.prescription|| ""}
                onChange={setRegister}
              >
                <option value="">Select </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Medicine Name:
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
      <label htmlFor="productDescription" className="productform-label">
        Medicine Description:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        placeholder="Enter Medicine description"
        name="description"
                value={inputs.description || ""}
                onChange={setRegister}        
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Medicine Price:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Medicine price"
        name="price"
        value={inputs.price || ""}
        onChange={setRegister}     
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productImage" className="productform-label">
      Medicine Image:
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
      Add  Medicine
    </button>
  </form>
</div>
</>

  )
}

export default AddMedicine