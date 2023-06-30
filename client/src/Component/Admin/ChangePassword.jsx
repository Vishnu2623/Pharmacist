import React,{useState} from 'react'

const ChangePassword = () => {
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
    <div className="settings-form">
  <h2>Change Password</h2>
  <form method='post' onSubmit={registersubmit}>
    <div className="form-group">
      <label htmlFor="current-password">Current Password:</label>
      <input
        type="password"
        id="current-password"
        name="cpassword"
        placeholder="Enter current password"
        value={inputs.cpassword || ""}
        onChange={setRegister}
      />
    </div>
    <div className="form-group">
      <label htmlFor="new-password">New Password:</label>
      <input
        type="password"
        id="new-password"
        name="npassword"
        placeholder="Enter new password"
        value={inputs.npassword || ""}
        onChange={setRegister}
      />
    </div>
    <div className="form-group">
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        name="copassword"
        placeholder="Confirm new password"
        value={inputs.copassword || ""}
        onChange={setRegister}
      />
    </div>
    <div className="form-group">
      <input type="submit" defaultValue="Save Changes" />
    </div>
  </form>
</div>

  )
}

export default ChangePassword