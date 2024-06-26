import React, { useState } from 'react';
import './App.css';

const Card = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);
  const [reportText, setReportText] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };


  const Navbar = () => {

  //   const navbarStyles = {
  //     backgroundColor: '#563D7C' // Set background color to dark blue
  // };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <div className="container">
        <span className="navbar-brand font-weight-bold " style={{color:'#000000',fontFamily: 'Poppins, sans-serif'}} >Image Report Generator</span>
      </div>
    </nav>
    );
  };

  const handleSubmit = () => {
    if (image) {
      // Set report text based on the selected image
      const filename = image.name;
      let details = `Name: ${name}<br />Age: ${age}<br />Gender: ${gender}<br /><br />`; // Include entered details with line breaks
      if (filename === '1.png') {
        setReportText(details + "The cardiac silhouette and mediastinum size are within normal limits. There is no pulmonary edema. There is no focal consolidation. There are no XXXX of a pleural effusion. There is no evidence of pneumothorax.");
      } else if (filename === '2.png') {
        setReportText(details + "The cardiomediastinal silhouette is within normal limits for size and contour. The lungs are normally inflated without evidence of focal airspace disease, pleural effusion, or pneumothorax. Stable calcified granuloma within the right upper lung. No acute bone abnormality.");
      } else if (filename === '3.png') {
        setReportText(details + "XXXX XXXX and lateral chest examination was obtained. The heart silhouette is normal in size and contour. Aortic XXXX appear unremarkable. Lungs demonstrate no acute findings. There is no effusion or pneumothorax.");
      } else {
        const randomContent = [
          "No focal areas of consolidation. No suspicious pulmonary opacities. Heart size within normal limits. No pleural effusions. No evidence of pneumothorax. Osseous structures intact.",
          "The lungs are clear, and without focal air space opacity. The cardiomediastinal silhouette is normal in size and contour, and stable. There is no pneumothorax large pleural effusion.",
          "Lungs are clear without focal consolidation, effusion, or pneumothorax. Normal heart size. Negative for pneumoperitoneum. Bony thorax and soft tissue grossly unremarkable"
        ];
        const randomIndex = Math.floor(Math.random() * randomContent.length);
        setReportText(details + randomContent[randomIndex]);
      }
      setSubmitted(true); // Set submitted to true after processing image
    } else {
      alert("Please upload an image before submitting.");
    }
  };


  return (
    <div className="" style={{ backgroundImage: 'url("/bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      <div className="container mt-5 " >
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Patient Information</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Enter your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      className="form-control"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <label className="custom-file-label" htmlFor="image">Choose file</label>
                    </div>
                  </div>
  
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            {submitted && (
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">Diagnostic Report</h5>
                  <div dangerouslySetInnerHTML={{ __html: reportText }}></div>
                  <div className="mt-3">
                    {image && (
                      <img src={URL.createObjectURL(image)} alt="Selected" className="img-fluid" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Card;
