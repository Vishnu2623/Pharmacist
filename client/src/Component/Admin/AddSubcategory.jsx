import React, { useEffect, useState } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage';
import axios from 'axios';

const AddSubcategory = () => {
  const [inputs, setInputs] = useState({});
  const [category, setCategory] = useState([]);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const registersubmit = (event) => {
    event.preventDefault();
    console.log("data", inputs);
  
    const category_id = inputs.category; 
    const updatedInputs = { ...inputs, category_id };
  
    axios.post('http://localhost:5000/category/medicine_subcategory', updatedInputs)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  

  useEffect(() => {
    axios.get('http://localhost:5000/category/view-category')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  return (
    <>
      <AdminPage />
      <div className="main-content" style={{ marginTop: '-600px' }}>

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
                {category.map((data)=>(
                  <option value={data._id}>{data.categoryname}</option>
                ))}
                
                
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
                name="subcategoryname"
                value={inputs.subcategoryname || ""}
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
              Add SubCategory
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddSubcategory