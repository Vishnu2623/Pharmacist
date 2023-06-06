import React from 'react'
import MedicalStorePage from './MedicalStorePage'
import Addproduct from '../../Component/Admin/Addproduct'

const AddMed = () => {
  return (<>
<MedicalStorePage/>
    <div className="main-content" style={{marginTop:'100px'}}>
     <Addproduct/>
 </div></>
  )
}

export default AddMed