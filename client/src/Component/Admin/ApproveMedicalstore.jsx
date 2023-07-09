import React, { useEffect, useState } from 'react';
import AdminPage from '../../Pages/ADMIN/AdminPage';
import axios from 'axios';

const ApproveMedicalstore = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch('http://localhost:5000/register/view-medicalstore')
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
  const approve = (id) => {
    axios
      .get(`http://localhost:5000/register/approve/${id}`)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = (id) => {
    axios
      .get(`http://localhost:5000/register/reject/${id}`)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AdminPage />
      <div className="main-content" style={{ marginTop: '-600px' }}>
        <div className="container">
          <h2 className="text-center mb-4">Manage Medical Store</h2>
          <table className="table table-hover">
            {/*Table head*/}
            <thead className="table-dark">
              <tr className="text-white">
                <th />
                <th>ID</th>
                <th>Store Name</th>
                <th>License Number</th>
                <th>Upload License</th>
               
                <th>City</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <tr key={user._id}>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-indicator" />
                      </label>
                    </td>
                    <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.licensenumber}</td>
                    <td>{user.Uploadlicense}</td>
                    <td>{user.city}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="d-flex">
                        {user.status === '0' ? (
                          <>
                            <button
                              className="btn btn-success edit-button mr-2 flex-fill"
                              onClick={() => {
                                approve(user.login_id);
                              }}
                            >
                              Approve
                            </button>
                            <button
                              className="btn btn-danger delete-button flex-fill"
                              onClick={() => {
                                reject(user.login_id);
                              }}
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-success edit-button mr-2 flex-fill">
                              Approved
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No users found</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {/* Pagination */}
        <nav className="my-4 pt-2">
          <button className="btn btn-danger delete-button flex-fill">Reject</button>
          <ul className="pagination pagination-circle pg-blue mb-0" style={{ marginLeft: '400px' }}>
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
  );
};

export default ApproveMedicalstore;
