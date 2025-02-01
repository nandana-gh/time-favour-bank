import React from 'react';

const ServiceCard = ({ title, description, hours }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Hours: {hours}</p>
    </div>
  );
};

export default ServiceCard;
