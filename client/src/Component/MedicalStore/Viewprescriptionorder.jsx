import React, { useEffect, useState } from 'react';
import MedicalStorehome from './MedicalStorehome';
import { useParams } from 'react-router-dom';

const Viewprescriptionorder = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const {id}=useParams();
const login_id=localStorage.getItem('medical_store_id')
console.log(login_id);
  const [orders, setOrders] = useState([]);
  console.log(orders);
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
  }, []);

  const handleStatusChange = (event, orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: event.target.value };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const toggleEditing = (orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, isEditing: !order.isEditing };
      }
      return order;
    });
    setOrders(updatedOrders);
  };
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
      <MedicalStorehome />
      <div className="main-content" style={{ marginTop: '100px' }}>
        <div className="uniquebody">
          <h1 className="uniqueh1">Order Management</h1>
          <table className="unique-table">
            <thead>
              <tr>
              <th>#</th>
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
              {orders.map((order,index) => (
                <tr key={order.id}>
                  <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                  <td className="statustd">{order.order_id}</td>
                  <td className="statustd">{order.prescriptionimage}</td>
                  <td className="statustd">{order.date_time}</td>
                  <td className="statustd">{order.name}</td>
                  <td className="statustd">{order.email}</td>
                  <td className="statustd">{order.phone}</td>
                  <td className="statustd">
                    {order.isEditing ? (
                      <select
                        className="statusupdate-btn"
                        value={order.status}
                        onChange={(e) => handleStatusChange(e, order.id)}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                      </select>
                    ) : (
                      order.status
                    )}
                  </td>
                  <td className="statustd">
                    <button
                      className="statusupdate-btn"
                      onClick={() => toggleEditing(order.id)}
                    >
                      {order.isEditing ? 'Save' : 'Edit'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Viewprescriptionorder;
