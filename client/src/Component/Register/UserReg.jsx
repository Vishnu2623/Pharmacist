import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserReg = () => {
  const navigate = useNavigate()
  const[inputs, setinputs]=useState({
    name:"",
    email:"",
    phone:"",
    username:"",
    password:"",
    cpassword:"",
    
  });
  console.log("value==>",inputs);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const setRegister=(event)=>{
    const {name,value}=event.target
        setinputs({
            ...inputs,
            [name]:value
        })
        console.log(inputs);  
  }
  const handleReset = () => {
    setinputs({});
   
  };
  useEffect(() => {
    console.log(formErrors);
    
    console.log("key", Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputs);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
   
    if (!values.name) {
      errors.name = "User Name is required!";
    }
    if (!values.username) {
      errors.username = "User Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } 
    if (!values.phone) {
      errors.phone = "Contact Number is required!";
    }else if(!phoneno.test(values.phone)){
      errors.phone = "Enter valid Contact Number !";
    }
    
    if (!values.email) {
      errors.email = "email is required!";
    }
     else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirmation Password is required";
    }
     
    if(values.password!==values.cpassword){
      errors.cpassword = "Enter same password";
    }
    return errors;
  };

  const registersubmit =(event)=>{
    event.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(inputs);

    axios.post('http://localhost:5000/register/userreg',inputs).then((response)=>{
      navigate('/Login')
    }).catch((error)=>{
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    })
  }}
  return (
    <div style={{backgroundColor:'lightBlue',maxWidth:'100%'}}>
      <ToastContainer/>
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
    <div className="wrapper wrapper--w340">
      <div className="card card-3">
        <div className="" />
        <div className="card-body">
          <h2 className="title">User Registration</h2>
          <form method="POST" onSubmit={registersubmit}>
            <div className="input-group">
            <span className='errormsg' style={{ color: 'red' }}>{formErrors.name}</span>

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
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.email}</span>
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
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.phone}</span>

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
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.username}</span>
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
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.password}</span>
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
            <span className='errormsg'style={{ color: 'red' }}>{formErrors.cpassword}</span>
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