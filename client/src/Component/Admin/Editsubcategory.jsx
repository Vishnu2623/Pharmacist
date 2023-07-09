import React, { useState, useEffect } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Editsubcategory = () => {
  const { id } = useParams();
  const [subcategory, setSubcategory] = useState({ subcategoryname: '', subcategoryimage: '', category: '' });
  const [categories, setCategories] = useState([]);
console.log(subcategory);
  useEffect(() => {
    fetch(`http://localhost:5000/category/edit-subcategory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubcategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setSubcategory({ ...subcategory, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/category/view-category')
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/category/edit-subcategory/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subcategory),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <>
      <AdminPage />
      <div className="main-content" style={{ marginTop: '-600px' }}>
        <div className="productcontainer">
          <h2 className="text-center mb-4">Update Medicine Sub Category</h2>
          <form onSubmit={handleSubmit}>
            <div className="productform-group">
              <label htmlFor="category" className="productform-label">
                Medicine Category:
              </label>
              <select
                className="productform-control"
                name="category"
                value={subcategory.category}
                onChange={handleInputChange}
              >
                <option value="">Select Medicine Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryname}
                  </option>
                ))}
              </select>
            </div>
            <div className="productform-group">
              <label htmlFor="subcategoryName" className="productform-label">
                Medicine Sub Category Name:
              </label>
              <input
                type="text"
                className="productform-control"
                id="subcategoryName"
                placeholder="Enter Medicine Sub Category name"
                name="subcategoryname"
                value={subcategory.subcategoryname || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="productform-group">
              <label htmlFor="subcategoryImage" className="productform-label">
                Medicine SubCategory Image:
              </label>
              <input
                type="file"
                className="form-control-file"
                id="subcategoryImage"
                accept="image/*"
                name="subcategoryimage"
                value={subcategory.subcategoryimage || ''}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary productsubmit-btn">
              Update Sub Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editsubcategory;
