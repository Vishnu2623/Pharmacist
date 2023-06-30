import React from 'react'
import AdminPage from './AdminPage'
import ViewUser from '../../Component/Admin/ViewUser'

const AdViewUser = () => {
  return (
    <>
    <AdminPage/>
    <div className="main-content" style={{marginTop:'-600px'}}>
        <ViewUser/>
        </div>
</>

  )
}

export default AdViewUser