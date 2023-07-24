import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate()
  const [inputs, setinputs] = useState({
    username:"",
    password:""
  });
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState({});

  console.log("value==>", inputs);
  const setRegister = (event) => {
    const {name,value}=event.target
    setinputs({
      ...inputs,[name]:value
    })
  }
  const validate=(values)=>{
    var error={}
    if(!values.username){
      error.username="enter user name"
    }
    if(!values.password){
      error.password="enter Password"
    }
    return error
  }
  const registersubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setFormErrors(validate(inputs))
    setIsSubmit(true)
    if (Object.keys(formErrors).length=== 0 && isSubmit){

    axios.post('http://localhost:5000/login/login', inputs).then((data) => {
      console.log(data);
      if(data.data.role=='1'){
        localStorage.setItem('user_id',data.data.user_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/Ecommerce')
      }else if(data.data.role=='2'){
        localStorage.setItem('medical_store_id',data.data.medical_store_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/store')
      }else if(data.data.role=='3'){
        localStorage.setItem('delivery_boy_id',data.data.delivery_boy_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/Delivery')
      }
     
      
    }).catch((error) => {

    })
  }
  }
  return (
    <div className='loginhome'>
      <div className="container2">
        <h1>Login</h1>
        <form onSubmit={registersubmit}>
          <div className="inputform-group">
          <span style={{color:formErrors.username ? "red" : ""}}>{formErrors.username}</span>

            <label htmlFor="username">Username:</label>
            <input type="text" name='username' placeholder="Enter your Username"
            value={inputs.username} 
            onClick={()=>{setFormErrors({...formErrors,username:""})}}
              onChange={setRegister} />
          </div>
          <div className="inputform-group">
          <span style={{color:formErrors.password ? "red" : ""}}>{formErrors.password}</span>

            <label htmlFor="password">Password:</label>

            <input type="password" name="password" placeholder="Enter your password" 
            value={inputs.password} 
            onClick={()=>{setFormErrors({...formErrors,password:""})}}
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