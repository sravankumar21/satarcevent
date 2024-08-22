import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate
import './App.css'; // Assuming you have your custom CSS for background and other styles
import harryPotterImg from './images/Harry.png'; // Correct import path
import HomeImage from './images/SATARCLEFTIMAGE.png'; // Import the image for the left side

const HomePage = () => {
  const navigate = useNavigate(); // Use navigate instead of history

  const handleClick = () => {
    navigate('/rules');
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${harryPotterImg})` }} // Set background image
    >
       <div className="absolute left-[calc(50%+220px)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <img src={HomeImage} alt="RIGHT Side" className="home-image" />
        <button
          onClick={handleClick}
          
          className="px-3 py-2 text-sm bg-blue text-white border border-white-300 rounded-md hover:bg-gray-800 transition duration-300 ml-[-25] mt-2"
        >
          Wanna Meet Harry?
        </button>
</div>




    </div>
  );
};

export default HomePage;
