import React, { useEffect, useState } from 'react';
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage';
import axios from 'axios';

const MyProfile = () => {
  const id = localStorage.getItem('login_id');
  const [inputs, setInputs] = useState({
    login_id: id,
    
  });

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({
      login_id: id,
    });
  };

  const registersubmit = (event) => {
    event.preventDefault();
    console.log('data', inputs);
    axios
      .put(`http://localhost:5000/register/edit-profile/${id}`, inputs)
      .then((response) => {
        console.log(response.data);
        setInputs(response.data.data[0] || {});
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-profile/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setInputs(data.data[0]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  return (<>
   <MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>

    
    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Profile</h2>
  <form onSubmit={registersubmit}>

    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Store Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter Store name"
        name='name'
        value={inputs.name || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        License Number:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter License Number"
        name='licensenumber'
        value={inputs.licensenumber|| ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Store Address:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        placeholder="Enter Medicine description"
        name='address'
        value={inputs.address|| ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Pincode:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Pincode"
        name='pincode'
        value={inputs.pincode|| ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      City:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter City"
        name='city'
        value={inputs.city|| ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Phone:
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Enter Mobile Number"
        name='phone'
        value={inputs.phone|| ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Email id:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Enter Email Id"
        name='email'
        value={inputs.email|| ""}
        onChange={setRegister}
      />
    </div>
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
      Update
    </button>
    <button type="reset" className="btn btn-primary productsubmit-btn" onClick={handleReset}>
      Reset
    </button>
  </form>
</div>
</div>
</>

  )
}

export default MyProfile