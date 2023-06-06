import React from 'react'
import MedicalStorePage from './MedicalStorePage'
import ManageMedicine from '../../Component/Admin/ManageMedicine'

const MngMedicine = () => {
  return (<>
    <MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>
     <ManageMedicine/>
 </div></>
  )
}

export default MngMedicine