import React from 'react'
import Shopnavbar from './Shopnavbar'
import Publicuserfooter from '../Footer/Publicuserfooter'

const Uploadprescription = () => {
  return (
    <>
    <Shopnavbar/>
    <div className="uploadbody">
  <div className="container">
    <h1 className="uploadh1" style={{ fontSize: 50 }}>
      Upload Prescription
    </h1>
  </div>
  <div className="frame">
    <div className="uploadcenter">
      <div className="uploadtitle">
        <h1>Drop file to upload</h1>
      </div>
      <div className="dropzone">
        <img
          src="http://100dayscss.com/codepen/upload.svg"
          className="upload-icon"
        />
        <input type="file" className="upload-input" />
      </div>
      <button type="button" className="uploadbtn" name="uploadbutton">
        Upload file
      </button>
    </div>
  </div>
</div>
<Publicuserfooter/>
</>
  )
}

export default Uploadprescription