import React, { useState } from 'react';
import './App.css'; 
import relevantImage from './report.jpg'; 

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
        <div className="container">
            
            <div className="content">
                <div className="left-card">
                    <div className="image-container">
                        <img src={relevantImage} alt="Relevant" />
                    </div>
                </div>
                <div className="right-card">
                    <div className="form-container">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                placeholder="Enter your age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="gender">Gender</label>
                            <select
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
                        <div className="input-group">
                            <label htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className='button'>
                            <button className="submit-button" onClick={handleSubmit}>Submit</button> {/* Add submit button */}
                        </div>
                    </div>
                </div>
            </div>
            {submitted && (
                <div className="report-text" dangerouslySetInnerHTML={{ __html: reportText }}></div>
            )}
        </div>
    );
};

export default Card;
