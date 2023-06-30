import React,{useState} from 'react'

export const Amyprofile = () => {
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
    <div className="profilebody">
    <div className="profilecontainer">
      <h2 style={{ textAlign: "center" }}>Admin Profile</h2>
      <form method="post" onSubmit={registersubmit}>
        <div className="profileform-group">
          <label htmlFor="exampleInputName1">Admin Name</label>
          <input type="text" name="adminname" defaultValue="" required="true"  value={inputs.adminname || ""}
                onChange={setRegister} />
        </div>
        <div className="profileform-group">
          <label htmlFor="exampleInputEmail3">User Name</label>
          <input type="text" name="username"  value={inputs.username|| ""}
                onChange={setRegister} defaultValue="" readOnly="" />
        </div>
        <div className="profileform-group">
          <label htmlFor="exampleInputPassword4">Contact Number</label>
          <input
            type="text"
            name="mobilenumber"
            defaultValue=""
            maxLength={10}
            required="true"
            pattern="[0-9]+"
            value={inputs.mobilenumber || ""}
            onChange={setRegister}
          />
        </div>
        <div className="profileform-group">
          <label htmlFor="exampleInputCity1">Email</label>
          <input type="email" name="email" defaultValue="" required="true"  value={inputs.email || ""}
                onChange={setRegister}/>
        </div>
        
        <button className='Profilebtn' type="submit" name="submit">
          Update
        </button>
      </form>
    </div>
  </div>
  
  
  )
}
