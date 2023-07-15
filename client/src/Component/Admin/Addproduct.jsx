import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addproduct = () => {
  const [inputs, setInputs] = useState({});
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState('');
  const [subcategory, setSubcategory] = useState([]);
console.log(subcategory);
console.log('value==>', inputs);
console.log("value==>",file.name);
console.log("value==>",file);
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const registersubmit = (event) => {
    event.preventDefault();
    console.log("data", inputs);
    if (file) {
      const data = new FormData();
      const filename = file.name
      data.append('file', file);
      data.append('name', filename);
      axios.post('http://localhost:5000/addmedicine/upload', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const category_id = inputs.category;
    const updatedInputs = { ...inputs, category_id };

    const subcategory_id = inputs.subcategory;
    const finalInputs = { ...updatedInputs, subcategory_id };
    

    axios.post('http://localhost:5000/addmedicine/add_medicine', finalInputs)
    .then((response) => {
      console.log(response.data);
      toast.success('Medicine successfully added');
      setInputs({});
    })
    .catch((error) => {
      console.log('Error:', error);
      toast.error('Failed to add medicine');
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

  useEffect(() => {
    axios.get(`http://localhost:5000/category/view-subcategory/${inputs.category}`)
      .then((response) => {
        setSubcategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
        if(error.response.data.success==false){
          setSubcategory([]);
        }
      });
  }, [inputs.category]);
  return (<>
    
    <div className="productcontainer">
  <h2 className="text-center mb-4">Add Medicine</h2>
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
                required
              >
                <option value="">Select Medicine category</option>
                {category.map((data)=>(
                  <option value={data._id}>{data.categoryname}</option>
                ))}  
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
                required
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
                value={inputs.needprescription|| ""}
                onChange={setRegister}
                required
              >
                <option value="">Select </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    <div className="productform-group">
      <label htmlFor="medicinename" className="productform-label">
        Medicine Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter Medicine name"
        name="medicinename"
        value={inputs.medicinename || ""}
        onChange={setRegister}
        required
      />
    </div>
    <div className="productform-group">
      <label htmlFor="medicinedescription" className="productform-label">
        Medicine Description:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        placeholder="Enter Medicine description"
        name="medicinedescription"
                value={inputs.medicinedescription || ""}
                onChange={setRegister}   
                required     
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
        value={inputs.medicinequantity || ""}
        onChange={setRegister}   
        required  
      />
    </div>
    <div className="productform-group">
      <label htmlFor="medicineprice" className="productform-label">
      Medicine Price:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Medicine price"
        name="medicineprice"
        value={inputs.medicineprice || ""}
        onChange={setRegister} 
        required    
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
        onChange={(e) => {
          setFile(e.target.files[0]);
          console.log(e.target.files[0].name);
          setInputs({ ...inputs, medicineimage: e.target.files[0].name });
        }}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Add  Medicine
    </button>
  </form><ToastContainer />
</div>
</>

  )
}

export default Addproduct