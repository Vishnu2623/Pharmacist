import React, { useEffect, useState } from 'react';

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-users')
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

  return (
    <>
      <div className="row" style={{ backgroundColor: 'aliceblue', height: 50 }}>
        {/* Top section */}
      </div>

      <div className="container">
        <h2 className="text-center mb-4">Manage Users</h2>
        <div className="card mb-4">
          <div className="card-body">
            {/* Table */}
            <table className="table table-hover">
              {/* Table head */}
              <thead className="table-dark">
                <tr className="text-white">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {currentUsers.length > 0 ? (
                  currentUsers.map((user, index) => (
                    <tr key={user._id}>
                      <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td className="d-flex">
                        <button className="btn btn-success edit-button mr-2 flex-fill">Approve</button>
                        <button className="btn btn-danger delete-button flex-fill">Reject</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Table */}
          </div>
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
      </div>
      {/* Bottom Table UI */}
      {/* MDB Tables */}
    </>
  );
};

export default ViewUser;
