import React from 'react'
import Addproduct from '../../Component/Admin/Addproduct'
import AdminHomepage from '../../Component/Admin/AdminHomepage'

const AddMedicine = () => {
  return (
    <>
    <AdminHomepage/>
    <div className="main-content" style={{marginTop:'-600px'}}>
     <Addproduct/>
 </div></>
  )
}

export default AddMedicine