import React,{useState} from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const RegisterDeliveryBoy = () => {
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
  return (<>
    <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Register Delivery Boy</h2>
  <form onSubmit={registersubmit}>
  
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Name:
      </label>
      <input
        type="text"
        className="productform-control"
        name='name'
        placeholder="Enter name"
        value={inputs.name || ""}
        onChange={setRegister}/>
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Address:
      </label>
      <textarea
        className="productform-control"
        name='address'
        rows={5}
        placeholder="Enter your Address"
        value={inputs.address || ""}
        onChange={setRegister}/>
    </div>
    <div className="productform-group">
      <label htmlFor="Pincode" className="productform-label">
      Pincode
      </label>
      <input
        type="number"
        name='pincode'
        className="productform-control"
        placeholder="Enter the Pincode"
        value={inputs.pincode || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        City:
      </label>
      <input
        type="text"
        name='city'
        className="productform-control"
        placeholder="Enter City"
        value={inputs.city|| ""}
        onChange={setRegister}/>
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Phone No:
      </label>
      <input
        type="number"
        name='phone'
        className="productform-control"
        placeholder="Enter your Phone Number"
        value={inputs.phone || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Email:
      </label>
      <input
        type="text"
        name='email'
        className="productform-control"      
        placeholder="Enter your Email Id"
        value={inputs.email || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Username:
      </label>
      <input
        type="text"
        name='username'
        className="productform-control"      
        placeholder="Enter your Username"
        value={inputs.username || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Password:
      </label>
      <input
        type="text"
        name='password'
        className="productform-control"      
        placeholder="Enter your Password"
        value={inputs.password || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Conform Password:
      </label>
      <input
        type="text"
        name='cpassword'
        className="productform-control"      
        placeholder="Enter your Conform Password"
        value={inputs.cpassword || ""}
        onChange={setRegister}
      />
    </div>
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
      Register
    </button>
    <button type="Reset" className="btn btn-primary productsubmit-btn"  onClick={handleReset}>
      Reset
    </button>
  </form>
</div>
</div></>

  )
}

export default RegisterDeliveryBoy