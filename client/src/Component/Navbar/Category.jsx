import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/category/view-category')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Product Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {categories.map((category, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
            <Link className="text-decoration-none" to={`/subcategory/${category._id}`}>
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
              <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
  <img src={`/upload/${category.categoryimage}`} style={{ width: '100%', height: '100%' }} alt="Category Image" />
</div>

                <div className="flex-fill pl-3">
                  <h4>{category.categoryname}</h4>
                  <small className="text-body">100 Products</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
