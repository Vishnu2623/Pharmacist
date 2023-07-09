import React, { useState, useEffect } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ categoryname: '',categoryimage:'' });

  useEffect(() => {
    fetch(`http://localhost:5000/category/edit-category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/category/edit-category/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
          // Handle success, redirect or perform any other actions
        } else {
          console.log(data.message);
          // Handle the error case
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        // Handle the error case
      });
  };

  return (
    <>
      <AdminPage />
      <div className="main-content" style={{ marginTop: '-600px' }}>
        <div className="productcontainer">
          <h2 className="text-center mb-4">Update Medicine Category</h2>
          <form onSubmit={handleSubmit}>
            <div className="productform-group">
              <label htmlFor="productName" className="productform-label">
                Medicine Category Name:
              </label>
              <input
                type="text"
                className="productform-control"
                id="productName"
                name="categoryname"
                placeholder="Enter Medicine Category name"
                value={category.categoryname || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="productform-group">
              <label htmlFor="productImage" className="productform-label">
                Medicine Category Image:
              </label>
              <input
                type="file"
                className="form-control-file"
                name='categoryimage'
                value={category.categoryimage || ''}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary productsubmit-btn">
              Update Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
