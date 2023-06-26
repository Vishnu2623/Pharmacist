import React, { useState } from 'react';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Uploadprescription = () => {
  const [uploadedPrescriptions, setUploadedPrescriptions] = useState([]);

  // Function to handle file upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const date = new Date().toLocaleString(); // Get current date and time
    const newPrescription = {
      id: Date.now(), // Generate a unique ID for the prescription
      file: file,
      date: date,
    };
    setUploadedPrescriptions((prevState) => [...prevState, newPrescription]);
  };

  // Function to handle prescription deletion
  const handleDelete = (id) => {
    setUploadedPrescriptions((prevState) =>
      prevState.filter((prescription) => prescription.id !== id)
    );
  };

  return (
    <>
      <Shopnavbar />
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
                alt="Upload Icon"
              />
              <input
                type="file"
                className="upload-input"
                onChange={handleUpload}
              />
            </div>
            <button
              type="button"
              className="uploadbtn"
              name="uploadbutton"
              onClick={() => {}}
            >
              Upload file
            </button>
          </div>
        </div>
      </div>
      <div className="prescriptions-table">
        <h2 className='ptitle'>Uploaded Prescriptions</h2>
        <table className='ptable'>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Uploaded On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {uploadedPrescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.file.name}</td>
                <td>{prescription.date}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(prescription.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
      {/*Pagination */}
      <nav className="my-4 pt-2">
        <ul className="pagination pagination-circle pg-blue mb-0">
          {/*First*/}
          <li className="page-item disabled clearfix d-none d-md-block">
            <a className="page-link">First</a>
          </li>
          {/*Arrow left*/}
          <li className="page-item disabled">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {/*Numbers*/}
          <li className="page-item active">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">2</a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link">4</a>
          </li>
          <li className="page-item">
            <a className="page-link">5</a>
          </li>
          {/*Arrow right*/}
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
          {/*First*/}
          <li className="page-item clearfix d-none d-md-block">
            <a className="page-link">Last</a>
          </li>
        </ul>
      </nav>  </div>
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Uploadprescription;
