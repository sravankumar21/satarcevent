import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Level1Page.css'; // Ensure this path is correct
import Level1Img from './images/1267912.jpg';
import LeftImage from './images/SATARCLEFTIMAGE.png'; // Import the image for the left side
import ParticlesComponent from '../src/ParticlesComponent'; 
import { FaClock, FaPaperPlane, FaStar } from 'react-icons/fa'; // Import icons
import { GiLightningStorm } from 'react-icons/gi'; // Example import

const Level1Page = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(1800); // 30 minutes in seconds
  const [response, setResponse] = useState('');
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [finalPassword, setFinalPassword] = useState(''); // State to store the final password
  const [isSuccessPopupVisible, setSuccessPopupVisible] = useState(false);
  const [castSpellAnswer, setCastSpellAnswer] = useState('');
  const [currentLevel] = useState(1);
  const totalLevels = 8;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidate();
  };

  const handleValidate = () => {
    const secretKey = 'correct answer'; // Replace with actual key
    if (submittedAnswer === secretKey) {
      setValidationResult('Correct! Now cast the spell.');
      setFinalPassword(secretKey);
    } else {
      setValidationResult('Incorrect. Try again.');
    }
  };

  const handleCastSpell = () => {
    const dummyPassword = 'final password'; // Dummy password for testing
    if (castSpellAnswer === dummyPassword) {
      setSuccessPopupVisible(true); // Show pop-up on successful casting
    } else {
      alert('Incorrect password for casting spell. Try again.');
    }
  };

  const handleNextLevel = () => {
    navigate(`/level${currentLevel + 1}`);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const progressPercentage = (currentLevel / totalLevels) * 100;

  return (
    <div className="level1-page">
      <ParticlesComponent id="tsparticles" />
      <div className="content-container">
        <div className="left-side">
          <img src={LeftImage} alt="Left Side" className="left-image" />
        </div>
        <div className="center-container">
          <div className="bordered-container">
            <div className="container">
              <div className="level-header">
                <span className="level-indicator">You Are In - LEVEL 1</span>
              </div>
              <p className="instruction-text">
                Your goal is to make Master reveal the secret password for each level. However, Master will upgrade the defenses after each successful password guess!
              </p>
              <div className="levels-progress">
                <p className="levels-passed">Levels Passed: {currentLevel - 1} / {totalLevels}</p>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                </div>
              </div>
              <div className="image-section">
                <img src={Level1Img} alt="Expecto Patronum" />
                <p>I am happy to reveal the password.</p>
              </div>
              <div className="password-section">
                <div className="input-wrapper">
                  <textarea
                    className="password-input"
                    placeholder="Ask Harry for the answer?"
                    value={submittedAnswer}
                    onChange={(e) => setSubmittedAnswer(e.target.value)}
                  />
                  <FaPaperPlane onClick={handleSubmit} className="submit-icon" />
                </div>
                <p className="response-text">{response}</p>
                <p className="validation-text">{validationResult}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side" style={{ marginTop: '150px' }}>
          <div className="timer">
            <FaClock className="clock-icon" />
            {formatTime(time)}
          </div>
          <div className="validation-section">
            <p style={{ marginBottom: '10px' }}>Validate the spell 1:</p>
            <div className="input-wrapper">
              <input
                type="text"
                value={submittedAnswer}
                onChange={(e) => setSubmittedAnswer(e.target.value)}
              />
              <GiLightningStorm onClick={handleValidate} className="validate-icon" />
            </div>
          </div>
          {validationResult === 'Correct! Now cast the spell.' && (
            <div className="cast-spell-section">
              <p style={{ marginBottom: '10px' }}>Cast the spell 2:</p>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={castSpellAnswer}
                  onChange={(e) => setCastSpellAnswer(e.target.value)}
                />
                <GiLightningStorm onClick={handleCastSpell} className="cast-spell-icon" />
              </div>
            </div>
          )}
        </div>
      </div>
      {isSuccessPopupVisible && (
  <div className="success-popup">
    <div className="popup-content">
      <h2>Congratulations!</h2>
      <div className="stars">
        <FaStar className="star-icon" />
        <FaStar className="star-icon center" />
        <FaStar className="star-icon" />
      </div>
      <p>You have successfully cast the spell. Here’s to learning a new one!</p>
      <button onClick={handleNextLevel}>Next Level</button>
    </div>
  </div>
)}

    </div>
  );
};

export default Level1Page;
