import React from 'react'
import Shopnavbar from './Shopnavbar'
import Publicuserfooter from '../Footer/Publicuserfooter'

const Addcart = () => {
  return (
    <>
<Shopnavbar/>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
          <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
          <a href="shop.html">Store</a> <span className="mx-2 mb-0">/</span>{" "}
          <strong className="text-black">Ibuprofen Tablets, 200mg</strong>
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
              src="images2/product_02.png"
              alt="Image"
              className="img-fluid p-5"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-black">Ibuprofen Tablets, 200mg</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            vitae, explicabo? Incidunt facere, natus soluta dolores iusto!
            Molestiae expedita veritatis nesciunt doloremque sint asperiores
            fuga voluptas, distinctio, aperiam, ratione dolore.
          </p>
          <p>
            <del>$95.00</del>{" "}
            <strong className="text-primary h4">$55.00</strong>
          </p>
          <div className="mb-5">
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

          </div>
          <p>
            <a
              href="Ecart"
              className="buy-now btn btn-sm mr-2 height-auto px-4 py-3 btn-primary"
            >
              Add To Cart
            </a>
          
          </p>
          
          </div>
        </div>
      </div>
    </div>
  
  
        
    
  
{/* </div> */}
<Publicuserfooter/>
  </>
  
  )
}

export default Addcart