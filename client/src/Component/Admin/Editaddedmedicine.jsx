import React,{useState} from 'react'
import AdminPage from '../../Pages/ADMIN/AdminPage'

const Editaddedmedicine = () => {
  const[inputs, setinputs]=useState({});
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
  return (<>
  <AdminPage/>
  <div className="main-content" style={{marginTop:'-600px'}}>

    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Medicine</h2>
  <form  onSubmit={registersubmit}>
  <div className="productform-group">
              <label htmlFor="category" className="productform-label">
                Medicine Category:
              </label>
              <select
                className="productform-control"
                name="category"
                value={inputs.category || ""}
                onChange={setRegister}
              >
                <option value="">Select Medicine category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="productform-group">
              <label htmlFor="subcategory" className="productform-label">
                Medicine Subcategory:
              </label>
              <select
                className="productform-control"
                name="subcategory"
                value={inputs.subcategory || ""}
                onChange={setRegister}
              >
                <option value="">Select Medicine subcategory</option>
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
                <option value="subcategory3">Subcategory 3</option>
              </select>
            </div>
            <div className="productform-group">
              <label htmlFor="prescription" className="productform-label">
                Need a Prescription?:
              </label>
              <select
                className="productform-control"
                name="prescription"
                value={inputs.prescription|| ""}
                onChange={setRegister}
              >
                <option value="">Select </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    <div className="productform-group">
      <label htmlFor="name" className="productform-label">
        Medicine Name:
      </label>
      <input
        type="text"
        className="productform-control"
        name="name"
        placeholder="Enter Medicine name"
        value={inputs.name || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="description" className="productform-label">
        Medicine Description:
      </label>
      <textarea
        className="productform-control"
        name="description"
        rows={5}
        placeholder="Enter Medicine description"
        value={inputs.description || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="price" className="productform-label">
      Medicine Price:
      </label>
      <input
        type="number"
        className="productform-control"
        name="price"
        placeholder="Enter Medicine price"
        value={inputs.price || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="medicineimage" className="productform-label">
      Medicine Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        name="medicineimage"
        value={inputs.medicineimage || ""}
        onChange={setRegister}
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Update  Medicine
    </button>
  </form>
</div>
</div>
</>

  )
}

export default Editaddedmedicine