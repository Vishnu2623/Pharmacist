import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminPage from '../../Pages/ADMIN/AdminPage'

const AddCategory = () => {
  const navigate = useNavigate()
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
    axios.post('http://localhost:5000/category/medicine_category',inputs).then((response)=>{
      navigate('/Addcategory')
    })
   

  }
  return (
    <>
     <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Add Medicine Category</h2>
  <form onSubmit={registersubmit}>
  <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Medicine Category Name:
      </label>
      <input
        type="text"
        className="productform-control"
           name="categoryname" 
        placeholder="Enter Medicine Category name"
        value={inputs.categoryname || ""}
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
        name='categoryimage'
        value={inputs.categoryimage || ""}
        onChange={setRegister}
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Add  Category
    </button>
  </form>
  </div>
  </div>
    </>
  )
}

export default AddCategory