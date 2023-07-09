import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageStock = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/addstock/view-medicinestock')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const usersPerPage = 7;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const removemedicine = (id) => {
    axios
      .delete(`http://localhost:5000/addstock/delete-medicine/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
  <>
   <div className="container">
        <h2 className="text-center mb-4">Manage Medicine</h2>
        <table className="table table-hover">
          {/*Table head*/}
          <thead className="table-dark">
            <tr className="text-white">
              <th>ID</th>
              <th>MEDICINE NAME</th>
              <th>MEDICINE CATEGORY</th>
              <th>MEDICINE SUBCATEGORY</th>
              <th>Need Prescription</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>DESCRIPTION</th>
              <th>IMAGE</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                  <td>{user.medicinename}</td>
                  <td>{user.categoryname}</td>
                  <td>{user.subcategoryname}</td>
                  <td>{user.needPrescription ? 'Yes' : 'No'}</td>
                  <td>{user.medicinequantity}</td>
                  <td>{user.medicineprice}</td>
                  <td>{user.medicinedescription}</td>
                  <td>{user.medicineimage}</td>
                  <td className="d-flex">
                  <Link className="btn btn-success edit-button mr-2 flex-fill" to={`/editmedicine/${user._id}`}>Edit</Link>

                    <button
                        className="btn btn-danger delete-button flex-fill"
                        onClick={() => removemedicine(user._id)}
                      >
                        Delete
                      </button>                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Table */}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <nav className="my-4 pt-2">
          <ul className="pagination pagination-circle pg-blue mb-0">
            {/* First */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(1)}>
                First
              </button>
            </li>
            {/* Previous */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>
                &laquo;
              </button>
            </li>
            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
              >
                <button className="page-link" onClick={() => handlePageClick(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            ))}
            {/* Next */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>
                &raquo;
              </button>
            </li>
            {/* Last */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(totalPages)}>
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
      </>
  )
}

export default ManageStock