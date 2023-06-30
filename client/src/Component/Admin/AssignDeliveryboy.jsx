import React, { useEffect, useState } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage'
import axios from 'axios';

const AssignDeliveryboy = () => {
  const [inputs, setInputs] = useState({});
  const [deliveryboy, setDeliveryboy] = useState([]);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs({});
  };

  const registersubmit = (event) => {
    event.preventDefault();
    console.log("data", inputs);
    const deliveryboy_id = inputs.choose; 
    const updatedInputs = { ...inputs, deliveryboy_id };

    axios.post('http://localhost:5000/add/assign_deliveryboy', updatedInputs)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/register/view-deliveryboy')
      .then((response) => {
        setDeliveryboy(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <AdminPage />
      <div className="main-content" style={{ marginTop: '-600px' }}>
        <div className="productcontainer">
          <h2 className="text-center mb-4">Assign Delivery Boy</h2>
          <form onSubmit={registersubmit}>
            <div className="productform-group">
              <label className="productform-label">
                Choose Delivery Boy:
              </label>
              <select
                name="choose"
                className="productform-control"
                value={inputs.choose || ""}
                onChange={setRegister}
              >
                <option value="">Select Delivery Boy</option>
                {deliveryboy.map((data) => (
                  <option value={data._id}>{data.name}</option>
                ))}
              </select>
            </div>
            <div className="productform-group">
              <label htmlFor="pincode" className="productform-label">
                Enter Pincodes:
              </label>
              <input
                type="number"
                className="productform-control"
                name="pincode"
                placeholder="Enter Working Pincodes"
                value={inputs.pincode || ""}
                onChange={setRegister}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
              Submit
            </button>
            <button type="button" className="btn btn-primary productsubmit-btn" onClick={handleReset}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AssignDeliveryboy;
