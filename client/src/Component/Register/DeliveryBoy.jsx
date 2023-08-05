import React,{useState} from 'react'

const DeliveryBoy = () => {
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
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
  <div className="wrapper wrapper--w780">
    <div className="card card-3">
      <div className="card-heading2" />
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
  value={inputs.phone}
  onChange={setRegister}
  onKeyPress={(event) => {
    if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
      event.preventDefault();
    }
  }}
  required
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

  )
}

export default DeliveryBoy