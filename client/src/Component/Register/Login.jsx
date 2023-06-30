import React,{useState} from 'react'

const Login = () => {
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);

  }
  return (
    <div className='loginhome'>
<div className="container2">
  <h1>Login</h1>
  <form onSubmit={registersubmit}>
    <div className="inputform-group">
      <label htmlFor="username">Email:</label>
      <input type="text" placeholder="Enter your Username" value={inputs.username || ""}
              onChange={setRegister}/>
    </div>
    <div className="inputform-group">
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" placeholder="Enter your password" value={inputs.password || ""}
              onChange={setRegister}/>
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