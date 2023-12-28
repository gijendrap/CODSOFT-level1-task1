// ServiceCard.js
import React from 'react';
import '../Css/Proone.css';

const ServiceCard = ({ imageUrl, iconUrl, title, name }) => {
  return (
    <div className="YoutubeVideo">
      <div className="Image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="Icon" style={{ backgroundImage: `url(${iconUrl})` }}></div>
      <div className="Title">{title}</div>
      <div className="Name">{name}</div>
    </div>
  );
};

export default ServiceCard;