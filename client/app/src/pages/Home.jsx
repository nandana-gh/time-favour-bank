import React, { useState } from 'react';
import ServiceForm from '../components/ServiceForm';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const [services, setServices] = useState([]);
  
  const handleNewService = (newService) => {
    setServices([...services, newService]);
  };

  return (
    <div>
      <h2>Available Services</h2>
      <ServiceForm onServiceSubmit={handleNewService} />
      <div>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
