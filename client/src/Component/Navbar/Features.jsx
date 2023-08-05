import React, { useState, useEffect } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addmedicine/view-medicine')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicines(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  const users_id=  localStorage.getItem('user_id')
  if(!users_id){
    navigate('/upload')
  }
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
         <Link to={'/shop/64ac21a0d32f4c2d5f3e45e5'}>
          Medicines</Link>

          </h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1"style={{marginLeft:'130px'}}>
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30,marginTop:"20px" }}
        >
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <a href="#" />
          <h5 className="font-weight-semi-bold m-0">
          <Link to={'/shop/64c143a3dc89321706694413'}>
          Ayurvedic</Link>
          </h5>
        </div>
      </div>
      {/* <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
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
      </div> */}
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1" style={{marginLeft:'160px'}}>
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{ padding: 30,marginTop:"20px" }}
        >
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <a href="upload"></a>
          <h5 className="font-weight-semi-bold m-0">

<Link to="/upload">Upload Prescription</Link>
          </h5>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Features