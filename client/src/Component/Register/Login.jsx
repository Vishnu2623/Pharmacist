import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate()
  const [inputs, setinputs] = useState([]);
  console.log("value==>", inputs);
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs({ ...inputs, [name]: value });
    console.log(inputs);
  }
  const registersubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log("hi");
    axios.post('http://localhost:5000/login/login', inputs).then((data) => {
      console.log(data);
      if(data.data.role=='2'){
        localStorage.setItem('medical_store_id',data.data.medical_store_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/store')
      }else if(data.data.role=='1'){
        localStorage.setItem('user_id',data.data.user_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
      }else if(data.data.role=='3'){
        localStorage.setItem('delivery_boy_id',data.data.delivery_boy_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
      }
      
    }).catch((error) => {

    })

  }
  return (
    <div className='loginhome'>
      <div className="container2">
        <h1>Login</h1>
        <form onSubmit={registersubmit}>
          <div className="inputform-group">
            <label htmlFor="username">Email:</label>
            <input type="text" name='username' placeholder="Enter your Username" 
              onChange={setRegister} />
          </div>
          <div className="inputform-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" 
              onChange={setRegister} />
          </div>
          <div className="inputform-group">
            <input type="submit" defaultValue="Login" />
          </div>
          <div className="inputform-group">
            <p className="message">
              New User? <a href="#">Register</a>
            </p>
          </div>
          <div className="inputform-group">
            <p className="message">
              Forgot your <a href="#">password</a>?
            </p>
          </div>
        </form>
      </div></div>


  )
}

export default Login