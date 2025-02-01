import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h2>{user.name}'s Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Time Credits:</strong> {user.timeCredits} hours</p>
      <div>
        <h3>Services Offered</h3>
        {user.servicesOffered.map((service, index) => (
          <div key={index}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <p>Hours: {service.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
