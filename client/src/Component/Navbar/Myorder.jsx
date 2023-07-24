import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Myorder = () => {
  const id = localStorage.getItem('login_id');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payment/myorder/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <Shopnavbar />
      <div className="orderbody">
        <div className="container-fluid my-5 d-sm-flex justify-content-center">
          {orders.map((order) => (
            <div key={order._id} className="ordercard px-2">
              <div className="ordercard-header bg-white">
                <div className="row justify-content-between">
                  <div className="col">
                    <p className="text-muted">
                      Order ID{' '}
                      <span className="font-weight-bold text-dark">{order.order_id}</span>
                    </p>
                    <p className="text-muted">
                      Order On{' '}
                      <span className="font-weight-bold text-dark">{order.date}</span>
                    </p>
                  </div>
                  <div className="flex-col my-auto">
                    <h6 className="ml-auto mr-3">
                      {/* <a className="ordera" href="#">
                        View Details
                      </a> */}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="ordercard-body">
                <div className="media flex-column flex-sm-row">
                  <div className="media-body ">
                    <h5 className="orderbold">{order.medicinename}</h5>
                    <p className="text-muted"> Qt: {order.medicinequantity} Pair</p>
                    <h4 className="mt-3 mb-4 bold">
                      {' '}
                      <span className="mt-5">₹</span> {order.totalAmount}{' '}
                      <span className="small text-muted"> via (COD) </span>
                    </h4>
                    <p className="text-muted">
                      Tracking Status on: <span className="Today">{order.time}</span>
                    </p>
                  </div>
                  <img
                    className="align-self-center img-fluid"
                    src={`/upload/${order.medicineimage}`}
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <div className="row px-3">
                <div className="col">
                  <ul id="progressbar">
                    <li className="step0 active " id="step1">
                      PLACED
                    </li>
                    <li className="step0 active text-center" id="step2">
                      SHIPPED
                    </li>
                    <li className="step0 text-muted text-right" id="step3">
                      DELIVERED
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ordercard-footer bg-white px-sm-3 pt-sm-4 px-0">
                <div className="row text-center  ">
                  <div className="col my-auto border-line ">
                   <a href='ordertrack'> <h5>Track Your Order</h5></a>
                  </div>
                  {/* <div className="col my-auto border-line ">
                    <h5>Cancel</h5>
                  </div>
                  <div className="col my-auto border-line ">
                    <h5>Pre-pay</h5>
                  </div> */}
                  <div className="col my-auto mx-0 px-0 ">
                    <img
                      className="img-fluid cursor-pointer"
                      src="https://img.icons8.com/ios/50/000000/menu-2.png"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Myorder;
