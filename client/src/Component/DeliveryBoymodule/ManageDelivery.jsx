import React, { useEffect, useState } from 'react';
import Homepage from '../../Pages/DeliveryBoy/Homepage';
import axios from 'axios';

const ManageDelivery = () => {
  const id = localStorage.getItem('delivery_boy_id');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payment/vieworders/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, [id]);

  const updateOrderStatus = (orderId, newStatus) => {
    axios
      .post(`http://localhost:5000/payment/update-delivery-status/${orderId}`, { status: newStatus })
      .then((response) => {
        if (response.data.success) {
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.order_id === orderId ? { ...order, status: newStatus, isEditing: false } : order
            )
          );
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleEditClick = (order) => {
    const updatedOrder = { ...order, isEditing: !order.isEditing };
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o.order_id === order.order_id ? updatedOrder : o))
    );
  };

  return (
    <>
      <Homepage />
      <div className="main-content" style={{ marginTop: '100px' }}>
        <div className="statusbody">
          <h1 className="statush1">Order Delivery Management</h1>
          <table id="orderTable" className="statustable">
            <thead>
              <tr>
                <th className="statusth">SL No</th>
                <th className="statusth">Order ID</th>
                <th className="statusth">Amount</th>
                <th className="statusth">Customer Name</th>
                <th className="statusth">Delivery Address</th>
                <th className="statusth">Phone No</th>
                <th className="statusth">Status</th>
                <th className="statusth">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.filter(order => order.delivery_pincode === order.pincode).map((order, index) => (
                <tr key={order.id}>
                  <td className="statustd">{index + 1}</td>
                  <td className="statustd">{order.order_id}</td>
                  <td className="statustd">{order.totalAmount}</td>
                  <td className="statustd">{order.firstname}</td>
                  <td className="statustd">{order.address}</td>
                  <td className="statustd">{order.phone}</td>
                  <td className="statustd">
                    {order.isEditing ? (
                      <select
                      className="statusupdate-btn"
                      value={order.status}
                      name="status"
                      onChange={(e) => {
                        const newStatus = e.target.value;
                        updateOrderStatus(order.order_id, newStatus);
                      }}
                    >
                      <option value="Delivered">Delivered</option>
                      <option value="Not Delivered">Not Delivered</option>
                    </select>
                    
                    ) : (
                      order.status
                    )}
                  </td>
                  <td className="statustd">
                    <button
                      className="statusupdate-btn"
                      onClick={() => handleEditClick(order)}
                    >
                      Edit
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

export default ManageDelivery;
