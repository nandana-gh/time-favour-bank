import React, { useState, useEffect } from 'react';
import ServiceForm from '../components/ServiceForm';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';

const Home = () => {
  const [services, setServices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fetch services when logged in
  useEffect(() => {
    const fetchServices = async () => {
      const token = localStorage.getItem('authToken');  // Get the token from localStorage
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/services', {
            headers: {
              Authorization: `Bearer ${token}`,  // Include JWT token in the Authorization header
            },
          });
          setServices(response.data); // Set the services from the API response
        } catch (err) {
          console.error('Error fetching services:', err);
        }
      }
    };

    if (isLoggedIn) {
      fetchServices();  // Only fetch services if logged in
    }
  }, [isLoggedIn]);  // Dependency array ensures it runs when `isLoggedIn` changes

  const handleNewService = (newService) => {
    setServices([...services, newService]);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Update login request URL to point to the backend
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);  // Store the token in localStorage
        console.log(localStorage.getItem('authToken'));
        setIsLoggedIn(true);  // Set logged-in state
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Available Services</h2>
      <ServiceForm onServiceSubmit={handleNewService} />
      <div>
        {services.length > 0 ? (
          services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
