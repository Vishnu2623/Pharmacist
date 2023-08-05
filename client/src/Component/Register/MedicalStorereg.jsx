import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MedicalStorereg = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [inputs, setInputs] = useState({
    name: "",
    licensenumber: "",
    image: "",
    address: "",
    pincode: "",
    city: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      postData();
    }
  }, [formErrors]);

  const setRegister = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setInputs({
      name: "",
      licensenumber: "",
      image: "",
      address: "",
      pincode: "",
      city: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      cpassword: "",
    });
    setFile('');
    setFormErrors({});
    setIsSubmit(false);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
   
    if (!values.name) {
      errors.name = "Store Name is required!";
    }
    if (!values.licensenumber) {
      errors.licensenumber = "License Number is required!";
    }
    if (!values.name) {
      errors.name = "User Name is required!";
    }
    if (!values.image) {
      errors.image = "Upload License is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.pincode) {
      errors. pincode = "Pincode is required!";
    }
    if (!values.city) {
      errors.city = "city is required!";
    }
    if (!values.username) {
      errors.username = "User Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } 
    if (!values.phone) {
      errors.phone = "Contact Number is required!";
    }else if(!phoneno.test(values.phone)){
      errors.phone = "Enter valid Contact Number !";
    }
    
    if (!values.email) {
      errors.email = "email is required!";
    }
     else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirmation Password is required";
    }
     
    if(values.password!==values.cpassword){
      errors.cpassword = "Enter same password";
    }
    return errors;
  };

  const postData = () => {
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append('file', file);
      data.append('name', filename);
      axios
        .post('http://localhost:5000/register/upload', data)
        .then((response) => {
          console.log(response);
          axios
            .post('http://localhost:5000/register/storereg', inputs)
            .then(() => {
              navigate('/Login');
            })
            .catch((error) => {
              toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post('http://localhost:5000/register/storereg', inputs)
        .then(() => {
          navigate('/Login');
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };

  const registersubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };
  return (
    <div className="page-wrapper bg-gra-01 p-t-90 p-b-100 font-poppins">
        <ToastContainer/>
    <div className="wrapper wrapper--w500">
      <div className="card card-3">
        <div className="card-body">
          <h3 className="title">Medical Store Registration</h3>
          <form method="POST" onSubmit={registersubmit}>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.name}</span>

              <input
                className="input--style-3"
                type="text"
                placeholder=" Store Name"
                name="name" 
                value={inputs.name || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.licensenumber}</span>
              <input
                className="input--style-3"
                type="text"
                placeholder="License Number"
                name="licensenumber"
                value={inputs.licensenumber || ""}
                onChange={setRegister}
              />
            </div>
            <label>Upload License</label>
              <div className="input-group">
              <span className='errormsg'style={{ color: 'red' }}>{formErrors.image}</span>
                <input
                  className="input--style-3"
                  type="file"
                  accept="image/*"
                  name='image'
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    console.log(e.target.files[0].name);
                    setInputs({ ...inputs, image: e.target.files[0].name });
                  }}
                />
              </div>

            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.address}</span>
              <input
                className="input--style-3"
                type="text"
                placeholder=" Address"
                name="address"
                value={inputs.address || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.pincode}</span>
              <input
                className="input--style-3"
                type="text"
                placeholder="Pincode"
                name="pincode"
                value={inputs.pincode || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.city}</span>
              <input
                className="input--style-3"
                type="text"
                placeholder=" City"
                name="city"
                value={inputs.city || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.email}</span>
              <input
                className="input--style-3"
                type="email"
                placeholder="Email"
                name="email"
                value={inputs.email || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.phone}</span>
            <input
  className="input--style-3"
  type="text"
  placeholder="Phone"
  name="phone"
  value={inputs.phone}
  onChange={setRegister}
  onKeyPress={(event) => {
    if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
      event.preventDefault();
    }
  }}
  required
/>
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.username}</span>
              <input
                className="input--style-3"
                type="text"
                placeholder="Username"
                name="username"
                value={inputs.username || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.password}</span>
              <input
                className="input--style-3"
                type="password"
                placeholder="Password"
                name="password"
                value={inputs.password || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.cpassword}</span>
              <input
                className="input--style-3"
                type="password"
                placeholder="Conform Password"
                name="cpassword"
                value={inputs.cpassword || ""}
                onChange={setRegister}
              />
            </div>
            <div className="p-t-10 button-row">
  <button
    className="btn btn-primary"
    type="reset"
    onClick={handleReset}
    style={{ fontSize: '12px' }}
  >
    Reset
  </button>
  <button
    className="btn btn-primary"
    type="submit"
    style={{ fontSize: '12px' }}
  >
    Submit
  </button>
</div>

          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MedicalStorereg