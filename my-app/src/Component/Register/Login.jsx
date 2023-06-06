import React from 'react'

const Login = () => {
  return (
    <div className='loginhome'>
<div className="container2">
  <h1>Login</h1>
  <form>
    <div className="inputform-group">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" placeholder="Enter your email" />
    </div>
    <div className="inputform-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" />
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