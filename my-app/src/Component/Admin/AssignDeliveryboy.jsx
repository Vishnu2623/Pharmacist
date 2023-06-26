import React,{useState} from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const AssignDeliveryboy = () => {
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
  <h2 className="text-center mb-4">Assign Delivery Boy</h2>
  <form onSubmit={registersubmit}>
  
  <div className="productform-group">
              <label  className="productform-label">
                Choose Delivery Boy:
              </label>
              <select
              name='choose'
                className="productform-control"
                value={inputs.choose|| ""}
                onChange={setRegister}
              >
                <option value="">Select Delivery Boy</option>
                <option value="Delivery Boy 1">Delivery Boy 1</option>
                <option value="Delivery Boy 2">Delivery Boy 2</option>
                <option value="Delivery Boy 3">Delivery Boy 3</option>
              </select>
            </div>
            <div className="productform-group">
      <label htmlFor="Pincode" className="productform-label">
      Enter Working Pincode
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
    
   
    <button type="submit" className="btn btn-primary mr-2 productsubmit-btn">
      Submit
    </button>
    <button type="Reset" className="btn btn-primary productsubmit-btn"  onClick={handleReset}>
      Reset
    </button>
  </form>
</div>
</div></>

  )
}

export default AssignDeliveryboy