import React from 'react'

const ViewUser = () => {
  return (<>
    <div className="row" style={{backgroundColor:'aliceblue',height:50}}>
 
 
</div>

    <div className="container">
   
   <h2 className="text-center mb-4">Manage Users </h2>
    <div className="card mb-4">
      <div className="card-body">
        {/*Table*/}
        <table className="table table-hover">
          {/*Table head*/}
          <thead className="table-dark">
            <tr className="text-white">
              
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Country</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          {/*Table head*/}
          {/*Table body*/}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>USA</td>
              <td>New York</td>
              <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Approve</button>
    <button class="btn btn-danger delete-button flex-fill">Reject</button>
    </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Spain</td>
              <td>Madrid</td>
              <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Approve</button>
    <button class="btn btn-danger delete-button flex-fill">Reject</button>
    </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Italy</td>
              <td>Rome</td>
              <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Approve</button>
    <button class="btn btn-danger delete-button flex-fill">Reject</button>
    </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Anna</td>
              <td>Doe</td>
              <td>@anna</td>
              <td>Poland</td>
              <td>Warsaw</td>
              <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Approve</button>
    <button class="btn btn-danger delete-button flex-fill">Reject</button>
    </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Mary</td>
              <td>Kate</td>
              <td>@olsen</td>
              <td>Germany</td>
              <td>Berlin</td>
              <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Approve</button>
    <button class="btn btn-danger delete-button flex-fill">Delete</button>
    </td>
            </tr>
          </tbody>
          {/*Table body*/}
        </table>
        {/*Table*/}
      </div>
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
      </nav>
      {/*/Pagination */}
    </div></div>
    {/*Bottom Table UI*/}
    {/*MDB Tables*/}
  
  </>
  )
}

export default ViewUser