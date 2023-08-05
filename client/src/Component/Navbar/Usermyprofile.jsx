import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Usermyprofile = () => {
  const id = localStorage.getItem('login_id');
  const [profile, setProfile] = useState({});
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({
      name: '',
      email: '',
      phone: '',
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/register/view-user-profile/${id}`)
      .then((response) => {
        if (response.data.success) {
          setProfile(response.data.data[0]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/register/edit-user-profile/${id}`,inputs)
      .then((response) => {
        if (response.data.success) {
          console.log('Profile changed successfully!');
          toast.success('Profile changed successfully!', {
            position: 'top-center',
            autoClose: 3000, 
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
        console.error('Error updating profile:', error);
      });
  };

  return (
    <>
      <Shopnavbar />
      <div className="main-content" style={{ marginTop: '100px', marginLeft: '-30px' }}>
        <div className="productcontainer" style={{ backgroundColor: 'lightblue', color: 'black' }}>
          <ToastContainer />
          <h2 className="text-center mb-4">Change User Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ color: 'black' }}>
              <label htmlFor="name"> Name:</label>
              <input
                type="text"
                name="name"
                value={inputs.name || profile.name}
                onChange={handleChange}
                placeholder="Enter Current User Name"
                style={{ height: '40px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={inputs.email || profile.email}
                onChange={handleChange}
                placeholder="Enter new Email"
                style={{ height: '40px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                name="phone"
                value={inputs.phone || profile.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                style={{ height: '40px' }}
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
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Usermyprofile;
