import React, { useEffect, useState } from 'react';
import MedicalStorehome from './MedicalStorehome';
import axios from 'axios';

const Managemedicineorder = () => {
  
  const id=localStorage.getItem('login_id')
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payment/store-orders/${id}`)
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
  const handleStatusUpdate = (orderId) => {
    axios
      .post(`http://localhost:5000/payment/update-store-status/${orderId}`)
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
  return (
    <>
      <MedicalStorehome />
      <div className="main-content" style={{ marginTop: '100px' }}>
        <div className="statusbody">
          <h1 className="statush1">Order Delivery Management</h1>
          <table id="orderTable" className="statustable">
            <thead>
              <tr>
                <th className="statusth">Order ID</th>
                <th className="statusth">Order Item Name</th>
                <th className="statusth">Amount</th>
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
                  <td className="statustd">{order.order_id}</td>
                  <td className="statustd">{order.medicinename}</td>
                  <td className="statustd">{order.totalAmount}</td>
                  <td className="statustd">{order.firstname}</td>
                  <td className="statustd">{order.address}</td>
                  <td className="statustd">{order.phone}</td>
                  <td className="statustd">
                   {order.status}
                  </td>
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
        </div>
      </div>
    </>
  );
};

export default Managemedicineorder;
