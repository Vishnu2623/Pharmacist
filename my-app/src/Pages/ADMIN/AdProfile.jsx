import React from 'react'
import { Amyprofile } from '../../Component/Admin/Amyprofile'
import AdminHomepage from '../../Component/Admin/AdminHomepage'
import Publicuserfooter from '../../Component/Footer/Publicuserfooter'

const AdProfile = () => {
  return (
    <>
    <AdminHomepage/>
    <div className="main-content" style={{marginTop:'-600px'}}>
     <Amyprofile/>
     <Publicuserfooter/>
 </div></>
  )
}

export default AdProfile