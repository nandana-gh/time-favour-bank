import React, { useState } from 'react';

const ServiceForm = ({ onServiceSubmit }) => {
  const [service, setService] = useState({
    title: '',
    description: '',
    hours: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({
      ...service,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onServiceSubmit(service); // Send service data to parent component or API
    setService({ title: '', description: '', hours: 0 }); // Reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Service Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={service.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Service Description</label>
        <textarea
          id="description"
          name="description"
          value={service.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          id="hours"
          name="hours"
          value={service.hours}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
