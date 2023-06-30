import React,{useState} from 'react'
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage'

const Editmedicine = () => {
  const [inputs, setInputs] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleReset = () => {
    setInputs({});
    setSelectedImage(null);
  };
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);
    console.log('Selected image:', selectedImage);

  }
  return (<>
     <MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>
    <div className="productcontainer">
  <h2 className="text-center mb-4">Update Medical Store Medicine</h2>
  <form onSubmit={registersubmit}>
  
            <div className="productform-group">
              <label htmlFor="medicinecategory" className="productform-label">
                Medicine Category:
              </label>
              <select
                className="productform-control"
                name="medicinecategory"
                value={inputs.medicinecategory || ""}
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
              <label htmlFor="subcategory" className="productform-label">
                Need a Prescription?:
              </label>
              <select
                className="productform-control"
                name="prescription"
                value={inputs.prescription || ""}
                onChange={setRegister}
                
              >
                <option value="">Select </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    <div className="productform-group">
      <label htmlFor="productName" className="productform-label">
        Medicine Name:
      </label>
      <input
        type="text"
        className="productform-control"
        name="productName"
        placeholder="Enter Medicine name"
        value={inputs.productName || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productDescription" className="productform-label">
        Medicine Description:
      </label>
      <textarea
        className="productform-control"
        name="productDescription"
        rows={5}
        placeholder="Enter Medicine description"
        value={inputs.productDescription || ""}
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productPrice" className="productform-label">
      Medicine Price:
      </label>
      <input
        type="number"
        className="productform-control"
        name="medicineprice"
        placeholder="Enter Medicine price"
        onChange={setRegister}
      />
    </div>
    <div className="productform-group">
      <label htmlFor="productImage" className="productform-label">
      Medicine Image:
      </label>
      <input
        type="file"
        className="form-control-file"
        accept="image/*"
        name="imageUpload"
        onChange={handleImageUpload}
      />
    </div>
    <button type="submit" className="btn btn-primary productsubmit-btn">
      Update Medicine
    </button>
  </form>
</div>
</div>
</>

  )
}

export default Editmedicine