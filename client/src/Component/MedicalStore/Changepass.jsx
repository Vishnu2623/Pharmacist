import React from 'react';
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage';

const Changepass = () => {
  return (
    <>
      <MedicalStorePage/>
      <div className="main-content" style={{ marginTop: '100px' }}>
        <div className="productcontainer"     style={{backgroundColor:'wheat',color:'black' }}>

          <h2 className="text-center mb-4">Change Store Password</h2>
          <form>
            <div className="form-group" style={{color:'black' }}>

              <label htmlFor="current-password">Current Password:</label>
              <input
                type="password"
                id="current-password"
                name="cpassword"
                placeholder="Enter current password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">New Password:</label>
              <input
                type="password"
                id="new-password"
                name="npassword"
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="copassword"
                placeholder="Confirm new password"
              />
            </div>
            <div className="form-group">
              <div className="centered-btn-container">
                <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
                  Update
                </button>
                <button type="button" className="btn btn-secondary productcancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Changepass;
