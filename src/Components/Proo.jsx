import React from 'react';
import ServiceCard from './Proone'; // Adjust the import path as needed
import '../Css/Proone.css';
import bike from '../assets/bike.png';
import Duc from '../assets/Ducati-logo.png';
import Space from '../assets/Space.png';
import Spico from '../assets/Space-icon.png';

const YourComponent = () => {
  return (
    <div className="service-card-container">
      {/* First ServiceCard instance */}
      <a href="https://fluffy-cat-48f736.netlify.app/" target="_blank" rel="noopener noreferrer">
        <ServiceCard
          imageUrl={bike}
          iconUrl={Duc}
          title="Ducati Scrambler"
          name="Ducati"
        />
      </a>

      {/* Second ServiceCard instance */}
      <a href="https://gijendrap.github.io/CODSOFT-level1-task2/" target="_blank" rel="noopener noreferrer">
        <ServiceCard
          imageUrl={Space}
          iconUrl={Spico}
          title="Space Ride Model" 
          name="Space"
        />
      </a>

      {/* Third ServiceCard instance */}
      {/* <a href="/third-page" target="_blank" rel="noopener noreferrer">
        <ServiceCard
          imageUrl="../path/to/second-image.jpg"
          iconUrl="../path/to/second-icon.jpg"
          title=""
          name="Third Card Name"
        />
      </a> */}
    </div>
  );
};

export default YourComponent;
