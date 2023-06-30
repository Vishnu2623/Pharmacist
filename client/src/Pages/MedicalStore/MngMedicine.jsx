import React from 'react'
import MedicalStorePage from './MedicalStorePage'
import ManageStock from '../../Component/MedicalStore/ManageStock'

const MngMedicine = () => {
  return (<>
    <MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>
     <ManageStock/>
 </div></>
  )
}

export default MngMedicine