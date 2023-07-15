import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Addcart = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const medicineDescription = searchParams.get('description');
  const medicinename = searchParams.get('medicine');
  const medicineimage = searchParams.get('image');
  const medicineprice = searchParams.get('price');

  return (
    <>
      <Shopnavbar />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <a href="shop.html">Store</a>{" "}
              <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">{medicinename}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="border text-center">
                <img
                 src={`/upload/${medicineimage}`}
                  alt="Image"
                  className="img-fluid p-5"
                />
              </div>
            </div>
         <div className="col-md-6">
  <h2 className="text-black">{medicinename}</h2>
  <p>{medicineDescription}</p>
  <p>
          
            <strong className="text-primary h4">Amount{medicineprice}</strong>
          </p><div className="mb-5">
          <div className="input-group mb-3" style={{ maxWidth: 220 }}>
  <div className="input-group-prepend">
    <button
      className="btn btn-primary js-btn-minus"
      type="button"
      style={{ backgroundColor: 'red', height: '38px' }}
    >
      -
    </button>
  </div>
  <input
    type="text"
    className="form-control text-center"
    defaultValue={1}
    placeholder=""
    aria-label="Example text with button addon"
    aria-describedby="button-addon1"
    style={{ height: '38px' }}
  />
  <div className="input-group-append">
    <button
      className="btn btn-primary js-btn-plus"
      type="button"
      style={{ backgroundColor: 'green', height: '38px' }}
    >
      +
    </button>
  </div>
</div>

          </div> <p>
          <Link 
                  to={`/Ecart/:id`}
                  className="btn btn-primary"
                 
                >
                  ADD TO CART
                </Link>
          
          </p>
          
</div>
          </div>
        </div>
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Addcart;
