import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPage from '../../Pages/ADMIN/AdminPage';

const ContactUs = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/contact/view-contact')
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

  const removeContact = (id) => {
    axios
      .delete(`http://localhost:5000/contact/delete-contactus/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
 

  return (
    <>
       <AdminPage/>
       <div className="main-content" style={{ marginTop: '-600px' }}>
      <div className="row" style={{ backgroundColor: 'aliceblue', height: 50 }}>
        {/* Top section */}
      </div>

      <div className="container">
        <h2 className="text-center mb-4">Manage Contact Us</h2>
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
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
            
              <tbody>
                {currentUsers.length > 0 ? (
                  currentUsers.map((user, index) => (
                    <tr key={user._id}>
                      <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                      <td>{user.firstname}.{user.lastname}</td>
                      <td>{user.email}</td>
                      <td>{user.subject}</td>
                      <td>{user.message}</td>
                      <td>
                    <button
                        className="btn btn-danger delete-button flex-fill"
                        onClick={() => removeContact(user._id)}
                      >
                        Delete
                      </button>
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
      </div>   </div>
    </>
  );
};

export default ContactUs;
