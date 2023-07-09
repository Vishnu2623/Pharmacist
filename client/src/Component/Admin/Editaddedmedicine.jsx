import React, { useState, useEffect } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Editaddedmedicine = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState({ medicinesubcategory: '', needprescription: '', medicinename: '',medicinedescription: '',medicineprice: '',medicinequantity: '',medicineprice: '', });
  const [categories, setCategory] = useState([]);
  const [subcategory, setsubCategory] = useState([]);
  const [inputs, setInputs] = useState({});
console.log(medicine);
  useEffect(() => {
    fetch(`http://localhost:5000/addmedicine/edit-medicine/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicine(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
    setInputs({ ...inputs, [name]: value });
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

  useEffect(() => {
    axios.get(`http://localhost:5000/category/view-subcategory/${inputs.category}`)
      .then((response) => {
        setsubCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
        if(error.response.data.success==false){
          setsubCategory([]);
        }
      });
  }, [inputs.category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/addmedicine/edit-medicine/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
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
  

  return (<>
  <AdminPage/>
  <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Medicine</h2>
  <form onSubmit={handleSubmit}>
  <div className="productform-group">
              <label htmlFor="category" className="productform-label">
                Medicine Category:
              </label>
              <select
                className="productform-control"
                name="category"
                value={medicine.category}
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
              <label htmlFor="subcategory" className="productform-label">
                Medicine Subcategory:
              </label>
              <select
                className="productform-control"
                name="medicinesubcategory"
                value={medicine.medicinesubcategory}
                onChange={handleInputChange}
              >
                <option value="">Select Medicine category</option>
                {subcategory.map((data)=>(
                  <option value={data._id}>{data.subcategoryname}</option>
                ))}
              </select>
            </div>
            <div className="productform-group">
              <label htmlFor="needprescription" className="productform-label">
                Need a Prescription?:
              </label>
              <select
                className="productform-control"
                name="needprescription"
                value={medicine.needprescription}
                onChange={handleInputChange}
              >
                <option value="">Select </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    <div className="productform-group">
      <label htmlFor="name" className="productform-label">
        Medicine Name:
      </label>
      <input
        type="text"
        className="productform-control"
        name="medicinename"
        placeholder="Enter Medicine name"
        value={medicine.medicinename}
        onChange={handleInputChange}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="medicinedescription" className="productform-label">
        Medicine Description:
      </label>
      <textarea
        className="productform-control"
        name="medicinedescription"
        rows={5}
        placeholder="Enter Medicine description"
        value={medicine.medicinedescription}
        onChange={handleInputChange}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="medicinequantity" className="productform-label">
      Medicine Quantity:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Medicine price"
        name="medicinequantity"
        value={medicine.medicinequantity}
        onChange={handleInputChange} 
      />
    </div>
    <div className="productform-group">
      <label htmlFor="price" className="productform-label">
      Medicine Price:
      </label>
      <input
        type="number"
        className="productform-control"
        name="medicineprice"
        placeholder="Enter Medicine price"
        value={medicine.medicineprice}
        onChange={handleInputChange}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="medicineimage" className="productform-label">
      Medicine Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        name="medicineimage"
        value={medicine.medicineimage}
        onChange={handleInputChange}
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Update  Medicine
    </button>
  </form>
</div>
</div>
</>

  )
}

export default Editaddedmedicine