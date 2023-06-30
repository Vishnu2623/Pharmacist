import React, { useState } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage'

const Editsubcategory = () => {
  const[inputs, setinputs]=useState({});
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);

  }
  return (
    <>
     <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Medicine Sub Category</h2>
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
      <label htmlFor="subcategoryimage" className="productform-label">
      Medicine SubCategory Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        accept="image/*"
        name="subcategoryimage"
        value={inputs.subcategoryimage || ""}
        onChange={setRegister}
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