import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    timeCredits: 0,
    servicesOffered: [],
  });

  // Mocking user data
  useEffect(() => {
    // In a real scenario, you would fetch this data from the backend
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      timeCredits: 15,
      servicesOffered: [
        { title: 'Tutoring', description: 'Math tutoring for beginners', hours: 5 },
        { title: 'Gardening', description: 'Help with garden maintenance', hours: 10 },
      ],
    });
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <Profile user={user} />
    </div>
  );
};

export default ProfilePage;
