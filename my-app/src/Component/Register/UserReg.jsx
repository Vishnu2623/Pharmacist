import React,{useState} from 'react'

const UserReg = () => {
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const handleReset = () => {
    setinputs({});
   
  };
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);
  }
  return (
    <div style={{backgroundColor:'lightBlue',maxWidth:'100%'}}>
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
    <div className="wrapper wrapper--w340">
      <div className="card card-3">
        <div className="" />
        <div className="card-body">
          <h2 className="title">Registration</h2>
          <form method="POST" onSubmit={registersubmit}>
            <div className="input-group">
              <input
                className="input--style-3"
                type="text"
                placeholder="Name"
                name="name"
                value={inputs.name || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-3"
                type="email"
                placeholder="Email"
                name="email"
                value={inputs.email || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-3"
                type="text"
                placeholder="Phone"
                name="phone"
                value={inputs.phone || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-3"
                type="text"
                placeholder="Username"
                name="username"
                value={inputs.username || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-3"
                type="text"
                placeholder="Password"
                name="password"
                value={inputs.password || ""}
                onChange={setRegister}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-3"
                type="text"
                placeholder="Conform Password"
                name="cpassword"
                value={inputs.cpassword || ""}
                onChange={setRegister}
              />
            </div>
            <div className="p-t-10 button-row">
    <button
      className="btn btn-primary"
      type="reset"
      onClick={handleReset}
      style={{ fontSize: '12px' }}
    >
      Reset
    </button>
    <button
      className="btn btn-primary"
      type="submit"
      style={{ fontSize: '12px' }}
    >
      Submit
    </button>
  </div>
  
  
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default UserReg