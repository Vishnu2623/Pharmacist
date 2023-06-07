import React from 'react'

const ManageMedicine = () => {
  return (
  <>
   
    <div className="container">
    <h2 className="text-center mb-4">Manage Medicine </h2>
    <table className="table table-hover">
          {/*Table head*/}
          <thead className="table-dark">
            <tr className="text-white">
              <th>ID</th>
              <th>MEDICINE NAME</th>
              <th>MEDICINE CATEGORY</th>
              <th>MEDICINE SUBCATEGORY</th>
              <th>Need Presciption</th>

              <th>PRICE</th>

              <th>DESCRIPTION</th>
              <th>IMAGE</th>
            <th>Action</th>
            </tr>
          </thead>
      <tbody>
        <tr>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Yes</td>

          <td>$19.99</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          <td>
            <img src="product1.jpg" alt="Product 1" className="product-image" />
          </td>
          <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Edit</button>
    <button class="btn btn-danger delete-button flex-fill">Delete</button>
    </td>

        </tr>
        <tr>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Yes</td>
          <td>$19.99</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          <td>
            <img src="product1.jpg" alt="Product 1" className="product-image" />
          </td>
          <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Edit</button>
    <button class="btn btn-danger delete-button flex-fill">Delete</button>
    </td>

        </tr>
        <tr>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Yes</td>
          <td>$19.99</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          <td>
            <img src="product1.jpg" alt="Product 1" className="product-image" />
          </td>
          <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Edit</button>
    <button class="btn btn-danger delete-button flex-fill">Delete</button>
    </td>

        </tr>
        <tr>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Product 1</td>
          <td>Yes</td>
          <td>$19.99</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          <td>
            <img src="product1.jpg" alt="Product 1" className="product-image" />
          </td>
          <td class="d-flex">
    <button class="btn btn-success edit-button mr-2 flex-fill">Edit</button>
    <button class="btn btn-danger delete-button flex-fill">Delete</button>
    </td>

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
      </>
  )
}

export default ManageMedicine