import React, { useState } from 'react';

const ServicePage = () => {
  const [service, setService] = useState({
    title: '',
    description: '',
    hours: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    }).then(() => {
      setService({
        title: '',
        description: '',
        hours: 0,
      });
    });
  };

  return (
    <div>
      <h2>Offer a Service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Title"
          value={service.title}
          onChange={(e) => setService({ ...service, title: e.target.value })}
        />
        <textarea
          placeholder="Service Description"
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Hours"
          value={service.hours}
          onChange={(e) => setService({ ...service, hours: e.target.value })}
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default ServicePage;
