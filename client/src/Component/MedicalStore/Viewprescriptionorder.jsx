import React from 'react'
import MedicalStorehome from './MedicalStorehome';
const Viewprescriptionorder = () => {
  return (
    <>
     <MedicalStorehome />
     <div className="main-content" style={{ marginTop: '100px' }}>
    <div className="uniquebody">
    <h1 className="uniqueh1">Order Management</h1>
    <table className="unique-table">
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Customer Name</th>
          <th>Address</th>
          <th>Medicine Name</th>
          <th>Prescription</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1234</td>
          <td>John Doe</td>
          <td>123 Main Street</td>
          <td>Medicine A</td>
          <td>
            <a href="prescription.jpg" download="">
              <img
                src="prescription.jpg"
                alt="Prescription"
                className="unique-prescription-image"
              />
            </a>
          </td>
          <td>$100.00</td>
          <td>Pending</td>
          <td>
            <button className="unique-btn">Update Status</button>
            <button className="unique-delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default Viewprescriptionorder