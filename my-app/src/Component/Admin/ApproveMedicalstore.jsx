import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const ApproveMedicalstore = () => {
  return (
    <>
    <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="container">
    <h2 className="text-center mb-4">Manage Medical Store</h2>
    <table className="table table-hover">
          {/*Table head*/}
          <thead className="table-dark">
            <tr className="text-white">
              <th/>
              <th>ID</th>
              <th>Store Name</th>
              <th>License Number</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>City</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Username</th>
            <th>Action</th>
            </tr>
          </thead>
      <tbody>
        <tr>
        <td>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-indicator" />
              </label>
            </td>
          <td>Product 1</td>
          <td>Name</td>
          <td>License Number</td>
          <td>Address</td>
          <td>Pincode</td>
          <td>City</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Username</td>
          <td>
                <i className="fa-sharp fa-solid fa-trash" />
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        <tr>
        <td>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-indicator" />
              </label>
            </td>
            <td>Product 1</td>
          <td>Name</td>
          <td>License Number</td>
          <td>Address</td>
          <td>Pincode</td>
          <td>City</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Username</td>
          <td>
                <i className="fa-sharp fa-solid fa-trash" />
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        <tr>
        <td>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-indicator" />
              </label>
            </td>
            <td>Product 1</td>
          <td>Name</td>
          <td>License Number</td>
          <td>Address</td>
          <td>Pincode</td>
          <td>City</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Username</td>
          <td>
                <a href=''><i className="fa-sharp fa-solid fa-trash" /></a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        <tr>
        <td>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-indicator" />
              </label>
            </td>
            <td>Product 1</td>
          <td>Name</td>
          <td>License Number</td>
          <td>Address</td>
          <td>Pincode</td>
          <td>City</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Username</td>
          <td>
                <i className="fa-sharp fa-solid fa-trash" />
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        {/* Add more product rows here */}
      </tbody>
    </table>
  </div></div>
  <div className="d-flex justify-content-center">

      {/*Pagination */}
      <nav className="my-4 pt-2">
      <button class="btn btn-success edit-button mr-2 flex-fill">Approve</button>
    <button class="btn btn-danger delete-button flex-fill">Reject</button>
        <ul className="pagination pagination-circle pg-blue mb-0" style={{marginLeft:"400px"}}>
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
      </nav>
      </div>
  </>
  )
}

export default ApproveMedicalstore