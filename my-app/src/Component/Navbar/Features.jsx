import React from 'react'

const Features = () => {
  return (
    <div className="featurecontainer-fluid pt-5" style={{backgroundColor:"lightblue"}} >
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30,marginTop:"20px" }}
        >
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <a href="#" />
          <h5 className="font-weight-semi-bold m-0">
            <a href="shop">Medicines</a>
          </h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30,marginTop:"20px" }}
        >
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <a href="#" />
          <h5 className="font-weight-semi-bold m-0">
            <a href="shop">Ayurvedic Medicines</a>
          </h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30,marginTop:"20px" }}
        >
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <a href="#"> </a>
          <h5 className="font-weight-semi-bold m-0">
            <a href="Orders">Order History</a>
          </h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30,marginTop:"20px" }}
        >
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <a href="upload"></a>
          <h5 className="font-weight-semi-bold m-0">
            <a href="upload">Upload Prescription</a>
          </h5>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Features