import React, { useEffect, useState } from 'react';
import MedicalStorehome from './MedicalStorehome';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Viewprescriptionorder = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const login_id = localStorage.getItem('medical_store_id');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/prescriptions/viewprescription/${login_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [login_id]);

  const handleStatusUpdate = (orderId) => {
    axios
      .post(`http://localhost:5000/prescriptions/update-prescription-status/${orderId}`)
      .then((response) => {
        console.log(response.data);

        const updatedOrders = orders.map((order) =>
          order.order_id === orderId ? { ...order, status: 'Shipped' } : order
        );
        setOrders(updatedOrders);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const usersPerPage = 7;
  const totalPages = Math.ceil(orders.length / usersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = orders.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <MedicalStorehome />
      <div className="main-content" style={{ marginTop: '100px' }}>
        <div className="uniquebody">
          <h1 className="uniqueh1">Order Management</h1>
          <table className="unique-table">
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Prescription</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((order, index) => (
                <tr key={order.order_id}>
                  <td className="statustd">{order.order_id}</td>
                  <td className="statustd">
                    <a href={`/upload/${order.prescriptionimage}`} download>
                      Download Image
                    </a>
                  </td>
                  <td className="statustd">{order.date_time}</td>
                  <td className="statustd">{order.name}</td>
                  <td className="statustd">{order.email}</td>
                  <td className="statustd">{order.phone}</td>
                  <td className="statustd">{order.status}</td>
                  <td className="statustd">
                      {order.status !== 'Shipped' ? (
                        <button
                          className="statusupdate-btn"
                          onClick={() => handleStatusUpdate(order.order_id)}
                        >
                          {order.status === 'Updated' ? 'Updated' : 'Update Status'}
                        </button>
                      ) : (
                        'Updated'
                      )}
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
};

export default Viewprescriptionorder;
