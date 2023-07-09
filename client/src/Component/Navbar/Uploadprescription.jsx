import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Shopnavbar from './Shopnavbar';
import Publicuserfooter from '../Footer/Publicuserfooter';

const Uploadprescription = () => {
  const navigate = useNavigate();
  const [prescriptions, setPrescriptions] = useState([]);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState('');

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append('file', file);
      data.append('name', filename);
      axios
        .post('http://localhost:5000/prescriptions/upload', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); 
  
    const newPrescription = {
      login_id: inputs.login_id,
      prescriptionimage: inputs.prescriptionimage,
      date_time: formattedDate, // Set the formatted date and time
    };
  
    axios
      .post('http://localhost:5000/prescriptions/add-prescription', newPrescription)
      .then((response) => {
        console.log(response);
        fetchPrescriptions(); // Fetch the updated prescriptions after adding a new one
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const deletePrescription = (id) => {
    axios
      .delete(`http://localhost:5000/prescriptions/prescriptions/${id}`)
      .then((response) => {
        console.log(response);
        fetchPrescriptions(); // Fetch the updated prescriptions after deleting one
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = () => {
    axios
      .get('http://localhost:5000/prescriptions/view-prescriptions')
      .then((response) => {
        setPrescriptions(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
                name="prescriptionimage"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  console.log(e.target.files[0].name);
                  setInputs({ ...inputs, prescriptionimage: e.target.files[0].name });
                }}
              />
            </div>
            <button
              type="button"
              className="uploadbtn"
              name="uploadbutton"
              onClick={registerSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="prescriptions-table">
        <h2 className="ptitle">Uploaded Prescriptions</h2>
        <table className="ptable">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Uploaded On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription._id}>
              <td>{prescription.prescriptionimage}</td>
              <td>
                {new Date(prescription.date_time).toLocaleDateString()}{' '}
                {new Date(prescription.date_time).toLocaleTimeString()}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deletePrescription(prescription._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="d-flex justify-content-center">
          {/* Pagination */}
          <nav className="my-4 pt-2">
            <ul className="pagination pagination-circle pg-blue mb-0">
              {/* First */}
              <li className="page-item disabled clearfix d-none d-md-block">
                <a className="page-link">First</a>
              </li>
              {/* Arrow left */}
              <li className="page-item disabled">
                <a className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {/* Numbers */}
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
              {/* Arrow right */}
              <li className="page-item">
                <a className="page-link" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
              {/* First */}
              <li className="page-item clearfix d-none d-md-block">
                <a className="page-link">Last</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Publicuserfooter />
    </>
  );
};

export default Uploadprescription;
