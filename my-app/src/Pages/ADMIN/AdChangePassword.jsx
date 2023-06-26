import React from 'react'
import AdminHomepage from '../../Component/Admin/AdminHomepage'
import ChangePassword from '../../Component/Admin/ChangePassword'
import Publicuserfooter from '../../Component/Footer/Publicuserfooter'

const AdChangePassword = () => {
  return (<>
    <AdminHomepage/>
    <div className="main-content" style={{marginTop:'-600px'}}>
     <ChangePassword/>
 </div></>
  )
}

export default AdChangePassword