import React, { useState } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

function OrderTracking() {
  const [orderStatus, setOrderStatus] = useState(null);
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [totalAmount, settotalAmount] = useState(null);
  const [date, setDate] = useState(null);
  const trackOrder = async (trackingNumber) => {
    try {
    
      const response = await fetch(`http://localhost:5000/payment/view-details/${trackingNumber}`);
      const data = await response.json();
      if (data.success) {
        const order = data.data;
        setOrderStatus(order.status);
        setShipmentDetails(order.shipmentDetails);
        setDeliveryAddress(order.address);
        setItemDetails(order.medicinename + ' x ' + order.medicinequantity);
        settotalAmount(order.totalAmount);
        setDate(order.date);

      } else {
        setOrderStatus(null);
        setShipmentDetails(null);
        setDeliveryAddress(null);
        setItemDetails(null);
        settotalAmount(null);
        setDate(null);
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
      setOrderStatus(null);
      setShipmentDetails(null);
      setDeliveryAddress(null);
      setItemDetails(null);
      settotalAmount(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trackingNumber = document.getElementById('trackingNumber').value;
    trackOrder(trackingNumber);
  };

  return (
    <>
      <Shopnavbar />
      <div className='ordertrack'>
        <h1 className='orderheading'>Order Tracking</h1>
        <div className="tracking-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="trackingNumber"
              className="custom-input-field"
              placeholder="Enter your order number or tracking ID"
            />
            <button type="submit" className="custom-track-button">
              Track
            </button>
          </form>

          <div id="orderStatus" className="custom-order-status" style={{fontStyle:'bold'}}>
           order is {orderStatus}
          </div>
          {shipmentDetails && (
            <div id="shipmentDetails" className="custom-shipment-details"  style={{fontStyle:'bold'}}>
              Shipment Details: {shipmentDetails}
            </div>
          )}
          {deliveryAddress && (
            <div id="deliveryAddress" className="custom-delivery-address"  style={{fontStyle:'bold'}}>
              Delivery Address: {deliveryAddress}
            </div>
          )}
          {itemDetails && (
            <div id="itemDetails" className="custom-item-details"  style={{fontStyle:'bold'}}>
              Item Details: {itemDetails}
            </div>
          )}
          {totalAmount && (
            <div id="itemDetails" className="custom-item-details" style={{fontStyle:'bold'}}>
              Amount: {totalAmount}
            </div>
          )}
          {date && (
            <div id="itemDetails" className="custom-item-details" style={{fontStyle:'bold'}}>
              Order Date: {date}
            </div>
          )}
        </div>
      </div>
      <Publicuserfooter />
    </>
  );
}

export default OrderTracking;
