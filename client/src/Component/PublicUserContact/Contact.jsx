import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  console.log('value==>', inputs);
 
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  const registerSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/contact/contactus', inputs)
      .then((response) => {
        console.log(response.data);
        toast.success('Public Contact successfully added');
        setInputs({});
      })
      .catch((error) => {
        console.log('Error:', error);
        toast.error('Failed to add Public Contact');
      });
  };
  
  return (
    <div className="site-wrap">
  <div className="site-navbar py-2">
    <div className="search-wrap">
      <div className="container">
        <a href="#" className="search-close js-search-close">
          <span className="icon-close2" />
        </a>
        <form action="#" method="post">
          <input
            type="text"
            className="form-control"
            placeholder="Search keyword and hit enter..."
          />
        </form>
      </div>
    </div>
    <div className="container">
  
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
          <div className="site-logo">
            <a href="index.html" className="js-logo-clone">
              Nestrum Pharma
            </a>
          </div>
        </div>
        <div className="main-nav d-none d-lg-block">
          <nav
            className="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul className="site-menu js-clone-nav d-none d-lg-block">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="active">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="icons"></div>
      </div>
    </div>
  </div>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
          <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
          <strong className="text-black">Contact</strong>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
    <ToastContainer />
      <div className="row">
        <div className="col-md-12">
          <h2 className="h3 mb-5 text-black">Get In Touch</h2>
        </div>
        <div className="col-md-12">
          <form action="#" onSubmit={registerSubmit}>
            <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={inputs.firstname || ''}
                    onChange={setRegister}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={inputs.lastname || ''}
                    onChange={setRegister}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_email" className="text-black">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={inputs.email || ''}
                    onChange={setRegister}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_subject" className="text-black">
                    Subject{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={inputs.subject || ''}
                    onChange={setRegister}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_message" className="text-black">
                    Message{" "}
                  </label>
                  <textarea
                    cols={30}
                    rows={7}
                    className="form-control"
                    defaultValue={""}
                    name="message"
                    value={inputs.message || ''}
                    onChange={setRegister}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-white mb-4">Offices</h2>
        </div>
        <div className="col-lg-4">
          <div className="p-4 bg-white mb-3 rounded">
            <span className="d-block text-black h6 text-uppercase">
              Kozhikode
            </span>
            <p className="mb-0"> City Street, Near Bus Stand, Calicut</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-4 bg-white mb-3 rounded">
            <span className="d-block text-black h6 text-uppercase">Kochi</span>
            <p className="mb-0">203</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-4 bg-white mb-3 rounded">
            <span className="d-block text-black h6 text-uppercase">
              Trivandrum
            </span>
            <p className="mb-0">203 </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact