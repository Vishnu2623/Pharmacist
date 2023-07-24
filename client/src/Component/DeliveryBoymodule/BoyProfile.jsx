import React, { useEffect, useState } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage'
import Homepage from '../../Pages/DeliveryBoy/Homepage'
import axios from 'axios';
const BoyProfile = () => {
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
      .put(`http://localhost:5000/register/edit-dbprofile/${id}`, inputs)
      .then((response) => {
        console.log(response.data);
        setInputs(response.data.data[0] || {});
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-dbprofile/${id}`)
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
    <Homepage/>
    <div className="main-content" style={{marginTop:'100px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Delivery Boy Myprofile</h2>
  <form onSubmit={registersubmit}>
  
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Name:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Update name"
        name='name'
        value={inputs.name || ""}
        onChange={setRegister}
        />
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Address:
      </label>
      <textarea
        className="productform-control"
        rows={5}
        name='address'
        value={inputs.address || ""}
        onChange={setRegister}
        placeholder="Update your Address"/>
    </div>
    <div className="productform-group">
      <label htmlFor="Pincode" className="productform-label">
      Pincode
      </label>
      <input
        type="number"
        className="productform-control"
        placeholder="Update the Pincode"
        name='pincode'
        value={inputs.pincode || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        City:
      </label>
      <input
        type="text"
        className="productform-control"
        placeholder="Update City"
        name='city'
        value={inputs.city || ""}
        onChange={setRegister}/>
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Phone No:
      </label>
      <input
        type="number"
        name='phone'
        value={inputs.phone || ""}
        onChange={setRegister}
        className="productform-control"
        placeholder="Update your Phone Number"
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Email:
      </label>
      <input
        type="text"
        className="productform-control"     
        name='email'
        value={inputs.email || ""}
        onChange={setRegister}        />
    </div>
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
     Update
    </button>
    
  </form>
</div>
</div></>

  )
}

export default BoyProfile