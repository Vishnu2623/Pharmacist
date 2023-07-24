import React, { useState } from 'react';
import axios from 'axios';
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Changepass = () => {
  const id = localStorage.getItem('login_id');
  const [inputs, setInputs] = useState({
    login_id: id,
    cpassword: '',
    npassword: '',
    copassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({
      cpassword: '',
      npassword: '',
      copassword: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.npassword !== inputs.copassword) {
      console.log('New password and confirmation password do not match.');
      return;
    }
  
    axios
      .post(`http://localhost:5000/login/change-password/${id}`, {
        login_id: inputs.login_id,
        oldPassword: inputs.cpassword,
        newPassword: inputs.npassword,
      })
      .then((response) => {
        if (response.data.success) {
          console.log('Password changed successfully!');
          toast.success('Password changed successfully!', {
            position: 'top-center',
            autoClose: 3000, // Duration of the toast message
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          handleReset();
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <MedicalStorePage />
    <div className="main-content" style={{ marginTop: '100px' }}>
      <div className="productcontainer" style={{ backgroundColor: 'wheat', color: 'black' }}>
      <ToastContainer />
        <h2 className="text-center mb-4">Change Store Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="current-password">Current Password:</label>
            <input
              type="password"
              name="cpassword"
              value={inputs.cpassword}
              onChange={handleChange}
              placeholder="Enter current password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              name="npassword"
              value={inputs.npassword}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              value={inputs.copassword}
              onChange={handleChange}
              name="copassword"
              placeholder="Confirm new password"
            />
          </div>
          <div className="form-group">
            <div className="centered-btn-container">
              <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
                Update
              </button>
              <button type="button" className="btn btn-secondary productcancel-btn" onClick={handleReset}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default Changepass;
