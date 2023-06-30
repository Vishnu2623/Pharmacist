import React from 'react'
import Homepage from '../../Pages/DeliveryBoy/Homepage'

const ManageDelivery = () => {
  return (
    <>
    <Homepage/>
    <div className="main-content" style={{ marginTop: '100px' }}>

    <div className='statusbody'>
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
      <tr>
        <td className="statustd">1</td>
        <td className="statustd">Paracatamol</td>
        <td className="statustd">John Doe</td>
        <td className="statustd">
          pattattil house pariyapuram po mukkola tanur
        </td>
        <td className="statustd">9072823381</td>
        <td className="statustd">Delivered</td>
        <td className="statustd">
          <button className="statusupdate-btn" data-order-id={1}>
            Update
          </button>
        </td>
      </tr>
      <tr>
        <td className="statustd">2</td>
        <td className="statustd">Paracatamol</td>
        <td className="statustd">Jane Smith</td>
        <td className="statustd">
          pattattil house pariyapuram po mukkola tanur
        </td>
        <td className="statustd">9072823381</td>
        <td className="statustd">Not Delivered</td>
        <td className="statustd">
          <button className="statusupdate-btn" data-order-id={2}>
            Update
          </button>
        </td>
      </tr>
      <tr>
        <td className="statustd">3</td>
        <td className="statustd">Paracatamol</td>
        <td className="statustd">Alex Johnson</td>
        <td className="statustd">
          pattattil house pariyapuram po mukkola tanur
        </td>
        <td className="statustd">9072823381</td>
        <td className="statustd">Delivered</td>
        <td className="statustd">
          <button className="statusupdate-btn" data-order-id={3}>
            Update
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</>

  )
}

export default ManageDelivery