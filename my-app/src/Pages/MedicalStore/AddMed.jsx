import React from 'react'
import MedicalStorePage from './MedicalStorePage'
import AddMedicine from '../../Component/MedicalStore/AddMedicine'

const AddMed = () => {
  return (<>
<MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>
     <AddMedicine/>
 </div></>
  )
}

export default AddMed