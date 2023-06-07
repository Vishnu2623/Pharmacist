import React from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const ManageDeliveryboy = () => {
  return (
    <>
    <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="container">
    <h2 className="text-center mb-4">Manage Delivery Boy</h2>
    <table className="table table-hover">
          {/*Table head*/}
          <thead className="table-dark">
            <tr className="text-white">
              
              <th>ID</th>
              <th>NAME</th>

              <th>EMAIL</th>
              <th>PHONE</th>
              <th>USERNAME</th>
            <th>Action</th>
            </tr>
          </thead>
      <tbody>
        <tr>
        
          <td> 1</td>
          <td>Delivery Boy</td>
          <td>deliveryboy@gmail.com</td>
          <td>9072823381</td>
          <td>Username</td>
          <td>
                <i className="fa-sharp fa-solid fa-trash" />
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        <tr>
        <td> 2</td>
          <td>Delivery Boy</td>
          <td>deliveryboy@gmail.com</td>
          <td>9072823381</td>
          <td>Username</td>
          <td>
                <i className="fa-sharp fa-solid fa-trash" />
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        <tr>
        
        <td> 3</td>
          <td>Delivery Boy</td>
          <td>deliveryboy@gmail.com</td>
          <td>9072823381</td>
          <td>Username</td>
          <td>
                <a href=''><i className="fa-sharp fa-solid fa-trash" /></a>
                &nbsp;&nbsp;&nbsp;
                <i className="fa-sharp fa-solid fa-pen" />
              </td>

        </tr>
        <tr> 
          <td> 4</td>
          <td>Delivery Boy</td>
          <td>deliveryboy@gmail.com</td>
          <td>9072823381</td>
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

export default ManageDeliveryboy