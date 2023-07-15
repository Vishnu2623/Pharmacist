import React, { useState, useEffect } from 'react';
import Shopnavbar from './Shopnavbar';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ShopProduct = () => {
  const login_id = localStorage.getItem('login_id');
  const navigate = useNavigate()
  const { id } = useParams();
  const [medicines, setMedicines] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [medicalstore, setMedicalstore] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  console.log(search);
  const [inputs, setInputs] = useState({
    login_id: login_id
  });

  useEffect(() => {
    fetch(`http://localhost:5000/addmedicine/view-medicine/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicines(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []); console.log(medicines);
  const handleAddToCart = (medicine) => {
    const login_id = localStorage.getItem('login_id')
    const cartData = {
      login_id: login_id,
      medicine_id: medicine._id,
      medicinename: medicine.medicinename,
      medicineimage: medicine.medicineimage,
      medicinequantity: 1,
      medicineprice: medicine.medicineprice,
    };

    const wishlistData = {
      login_id: login_id,
      medicine_id: medicine._id,
      medicinename: medicine.medicinename,
      medicineimage: medicine.medicineimage,
      medicineprice: medicine.medicineprice,
    };

    fetch('http://localhost:5000/addcart/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Item added to cart successfully');
        } else {
          console.log('Failed to add item to cart');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });

    fetch('http://localhost:5000/wishlist/add-to-wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wishlistData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Item added to wishlist successfully');
          setWishlistData([...wishlistData, wishlistData]); // Update the wishlist data state
        } else {
          console.log('Failed to add item to wishlist');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/register/view-medicalstore/${id}`)
      .then((response) => {
        setMedicalstore(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const searching =(e)=>{
  e.preventDefault()
  axios
      .get(`http://localhost:5000/store/view-store-medicine/${search}`)
      .then((response) => {
        console.log(data);
        setMedicines(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  return (
    <>
      <Shopnavbar />
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="index.html">Home</a>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Store</strong>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Search"
          style={{
            maxWidth: "100%",
            backgroundColor: "antiquewhite",
            height: 100,
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "100%", color: "#D9230F", marginTop: "40px" }}
          >
            <div className="row">
              <div className="col-12">
                <div id="custom-search-input">
                  <div className="input-group">
                    <input
                      type="text"
                      className="search-query form-control"
                      placeholder="Search Medicines"
                    />
                    <span className="input-group-btn">
                      <button type="button" disabled="">
                        <span className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown" style={{ marginLeft: '-150px' }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={handleButtonClick}
              >
                Choose Stores
              </button>

              {isModalOpen && (
                <div className="modal" style={{ display: 'block', marginTop: '50px' }}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header" style={{ textAlign: "center" }}>
                        <h5 className="modal-title">Choose Nearest Medical Store</h5>
                        <button type="button" className="close" onClick={closeModal}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">

                        <form >
                          <input
                            type="text"
                            list="choosestore"
                            placeholder="Enter Here"
                            autoComplete="off"
                            name='medicalstore'
                            onChange={(e)=>{setSearch(e.target.value)}}
                          />
                          <datalist id="choosestore" >
                            <option value="choose store" />
                            {medicalstore.map((data) => (
                              <option value={data.name}>{data.name}</option>
                            ))}
                          </datalist>
                          <div className="modal-footer">

                            <button type="submit" onClick={searching} className="btn btn-primary" >
                              Submit
                            </button>

                          </div>
                        </form>

                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            {medicines.map((medicine, index) => (
              <div className="col-sm-6 col-lg-4 text-center item mb-4" key={index}>
                <span className="tag">Sale</span>
                <div className="product-image">
                  <Link to={`/addcart/${medicine._id}`}>
                    <img src={`/upload/${medicine.medicineimage}`} alt="Image" />
                  </Link>
                  {/* <a href="#" className="wishlist-icon">
                    <i className="fas fa-heart" />
                  </a> */}



                  <Link to="" className="wishlist-icon" onClick={() => handleAddToCart(medicine)}>
                    <i className="fas fa-heart" />
                  </Link>


                </div>
                <h3 className="text-dark">
                  <Link
                    to={`/addcart/${medicine.id}?description=${medicine.medicinedescription}&medicine=${medicine.medicinename}&image=${medicine.medicineimage}&price=${medicine.medicineprice}`}
                  >
                    {medicine.medicinename}
                  </Link>


                </h3>

                <p className="price">Rs{medicine.medicineprice}</p>
                <Link
                  to={`/Ecart/${medicine._id}`}
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(medicine)}
                >
                  ADD TO CART
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">&gt;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;