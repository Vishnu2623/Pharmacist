import React, { useState } from 'react';

const MedicalStorereg = () => {
  const [inputs, setInputs] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleReset = () => {
    setInputs({});
    setSelectedImage(null);
  };
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);
    console.log('Selected image:', selectedImage);

  }
  return (
    <div className="page-wrapper bg-gra-01 p-t-90 p-b-100 font-poppins">
    <div className="wrapper wrapper--w500">
      <div className="card card-3">
        <div className="card-body">
          <h3 className="title">Medical Store Registration</h3>
          <form method="POST" onSubmit={registersubmit}>
            <div className="input-group">
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
              <input
                className="input--style-3"
                type="text"
                placeholder="License Number"
                name="lname"
                value={inputs.lname || ""}
                onChange={setRegister}
              />
            </div>
            <label>Upload License</label>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="file"
                  accept="image/*"
                  name="imageUpload"
                  onChange={handleImageUpload}
                />
              </div>

            <div className="input-group">
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
              <input
                className="input--style-3"
                type="number"
                placeholder="Phone"
                name="phone"
                value={inputs.phone || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
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
              <input
                className="input--style-3"
                type="text"
                placeholder="Password"
                name="password"
                value={inputs.password || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-3"
                type="text"
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