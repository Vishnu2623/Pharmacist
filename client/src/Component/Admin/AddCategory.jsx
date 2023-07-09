import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminPage from '../../Pages/ADMIN/AdminPage';

const AddCategory = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState('');
  console.log('value==>', inputs);
  console.log("value==>",file.name);
  console.log("value==>",file);
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  const registerSubmit = (event) => {
    event.preventDefault();
    if (file) {
          const data = new FormData();
          const filename = file.name
          data.append('file', file);
          data.append('name', filename);
          axios.post('http://localhost:5000/category/upload', data)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
    axios.post('http://localhost:5000/category/medicine_category', inputs)
      .then((response) => {
       
      })
      .catch((error) => {
        
        console.error(error);
      });
  };
  
  return (
    <>
      <AdminPage />
      <div className="main-content" style={{ marginTop: '-600px' }}>
        <div className="productcontainer">
          <h2 className="text-center mb-4">Add Medicine Category</h2>
          <form onSubmit={registerSubmit} encType="multipart/form-data">
            <div className="productform-group">
              <label htmlFor="productName" className="productform-label">
                Medicine Category Name:
              </label>
              <input
                type="text"
                className="productform-control"
                name="categoryname"
                placeholder="Enter Medicine Category name"
                value={inputs.categoryname || ''}
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
                name="categoryimage"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  console.log(e.target.files[0].name);
                  setInputs({ ...inputs, categoryimage: e.target.files[0].name });
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary productsubmit-btn">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
