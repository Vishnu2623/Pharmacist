import React, { useEffect, useState } from 'react';
import AdminHomepage from './AdminHomepage';

const Vieworder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/payment/view-details')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
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

  return (
    <>
      <AdminHomepage/>
      <div className="main-content" style={{ marginTop: '-700px' }}>
        <div className="statusbody">
          <h1 className="statush1">Order Delivery Management</h1>
          <table id="orderTable" className="statustable">
            <thead>
              <tr>
                <th className="statusth">Order ID</th>
                <th className="statusth">Order Item Name</th>
                <th className="statusth">Customer Name</th>
                <th className="statusth">Delivery Address</th>
                <th className="statusth">Email</th>
                <th className="statusth">Phone No</th>
                <th className="statusth">Status</th>
                 <th className="statusth">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="statustd">{order.id}</td>
                  <td className="statustd">{order.cartItems}</td>
                  <td className="statustd">{order.firstname}</td>
                  <td className="statustd">{order.address}</td>
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

export default Vieworder;
