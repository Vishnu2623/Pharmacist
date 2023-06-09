import React, { useState } from 'react';
import Homepage from '../../Pages/DeliveryBoy/Homepage';

const ManageDelivery = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      itemName: 'Paracetamol',
      customerName: 'John Doe',
      deliveryAddress: 'pattattil house pariyapuram po mukkola tanur',
      phoneNo: '9072823381',
      status: 'Delivered',
      isEditing: false
    },
    {
      id: 2,
      itemName: 'Paracetamol',
      customerName: 'Jane Smith',
      deliveryAddress: 'pattattil house pariyapuram po mukkola tanur',
      phoneNo: '9072823381',
      status: 'Not Delivered',
      isEditing: false
    },
    {
      id: 3,
      itemName: 'Paracetamol',
      customerName: 'Alex Johnson',
      deliveryAddress: 'pattattil house pariyapuram po mukkola tanur',
      phoneNo: '9072823381',
      status: 'Delivered',
      isEditing: false
    }
  ]);

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
      <Homepage />
      <div className="main-content" style={{ marginTop: '100px' }}>
        <div className="statusbody">
          <h1 className="statush1">Order Delivery Management</h1>
          <table id="orderTable" className="statustable">
            <thead>
              <tr>
                <th className="statusth">Order ID</th>
                <th className="statusth">Order Item Name</th>
                <th className="statusth">Customer Name</th>
                <th className="statusth">Delivery Address</th>
                <th className="statusth">Phone No</th>
                <th className="statusth">Status</th>
                 <th className="statusth">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="statustd">{order.id}</td>
                  <td className="statustd">{order.itemName}</td>
                  <td className="statustd">{order.customerName}</td>
                  <td className="statustd">{order.deliveryAddress}</td>
                  <td className="statustd">{order.phoneNo}</td>
                  <td className="statustd">
                    {order.isEditing ? (
                      <select
                        className="statusupdate-btn"
                        value={order.status}
                        onChange={(e) => handleStatusChange(e, order.id)}
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

export default ManageDelivery;
