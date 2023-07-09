import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

            {/* Pagination */}
            <nav aria-label="Users Pagination">
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageClick(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
