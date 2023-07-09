import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar'
import Publicuserfooter from '../Footer/Publicuserfooter'
import { Link, useParams } from 'react-router-dom';

const SubCategory = () => {
  const {id}=useParams()
  const [subcategories, setsubCategories] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:5000/category/view-subcategory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setsubCategories(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  return (
    <>
    <Shopnavbar/>
    <div className="container">
  <div className="tittlecat">Medicine SubCategory</div>
  <div className="row">
  {subcategories.map((subcategory, index) => (
    <div className="col-md-3" key={index}>
      <div className="catproduct-card">
        <div className="catproduct-tumb">
          <img   src={subcategory.subcategoryimage} alt="" />
        </div>
        <div className="catproduct-details">
          <h4>
            {/* <a href="shop">{subcategory.subcategoryname}</a> */}
            <Link className="text-decoration-none" to={`/shop/${subcategory._id}`}>{subcategory.subcategoryname}</Link>
          </h4>
        </div>
      </div>
    </div>
         ))}
  </div>
</div>
<Publicuserfooter/>
</>
  )
}

export default SubCategory