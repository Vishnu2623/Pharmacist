import React from 'react'
import ManageMedicine from '../../Component/Admin/ManageMedicine'
import AdminHomepage from '../../Component/Admin/AdminHomepage'

const ManageProduct = () => {
  return (
    <>
    <AdminHomepage/>
    <div className="main-content" style={{marginTop:'-600px'}}>
     <ManageMedicine/>
 </div></>
  )
}

export default ManageProduct