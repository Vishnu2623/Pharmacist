import React from 'react'
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage'

const PaymentCustomers = () => {
  return (
  <>
   <MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>
    <div className="container">
    <h2 className="text-center mb-4">View Payment Customers </h2>
    <table className="table table-hover">
          {/*Table head*/}
          <thead className="table-dark">
            <tr className="text-white">
              <th>ID</th>
              <th>Customer Name</th>
              <th>Order ID</th>
              <th>Payment Type</th>
              <th>Amount</th>
              <th>Transaction ID</th>
             <th>Date and Time</th>
              <th>Status</th>
            
            </tr>
          </thead>
      <tbody>
        <tr>
          <td> 1</td>
          <td>Vishnu</td>
          <td>101</td>
          <td>card</td>
          <td>1000</td>
          <td>1234</td>
          <td>01/02/2023 10:35</td>
          <td>success</td>
        </tr>
        <tr>
          <td> 1</td>
          <td>Vishnu</td>
          <td>101</td>
          <td>card</td>
          <td>1000</td>
          <td>1234</td>
          <td>01/02/2023 10:35</td>
          <td>success</td>
        </tr>
        <tr>
          <td> 1</td>
          <td>Vishnu</td>
          <td>101</td>
          <td>card</td>
          <td>1000</td>
          <td>1234</td>

          <td>01/02/2023 10:35</td>
          <td>success</td>
        </tr>
        <tr>
          <td> 1</td>
          <td>Vishnu</td>
          <td>101</td>
          <td>card</td>
          <td>1000</td>
          <td>1234</td>

          <td>01/02/2023 10:35</td>
          <td>success</td> 

        </tr>
        {/* Add more product rows here */}
      </tbody>
    </table>
  </div>
  <div className="d-flex justify-content-center">
      {/*Pagination */}
      <nav className="my-4 pt-2">
        <ul className="pagination pagination-circle pg-blue mb-0">
          {/*First*/}
          <li className="page-item disabled clearfix d-none d-md-block">
            <a className="page-link">First</a>
          </li>
          {/*Arrow left*/}
          <li className="page-item disabled">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {/*Numbers*/}
          <li className="page-item active">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">2</a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link">4</a>
          </li>
          <li className="page-item">
            <a className="page-link">5</a>
          </li>
          {/*Arrow right*/}
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
          {/*First*/}
          <li className="page-item clearfix d-none d-md-block">
            <a className="page-link">Last</a>
          </li>
        </ul>
      </nav>  </div>
      </div>
      </>
  )
}

export default PaymentCustomers