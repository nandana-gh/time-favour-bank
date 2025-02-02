// import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    timeCredits: 0,
    servicesOffered: [],
  });

  const [videoDuration, setVideoDuration] = useState('');
  const [watchDuration, setWatchDuration] = useState('');

  // Mocking user data
  useEffect(() => {
    // Fetching the data for user (or from localStorage)
    const userEmail = localStorage.getItem('email');
    const userCredits = localStorage.getItem('credits');
    
    if (userEmail) {
      setUser({
        name: 'John Doe',
        email: userEmail,
        timeCredits: parseInt(userCredits) || 0,
        servicesOffered: [
          { title: 'Tutoring', description: 'Math tutoring for beginners', hours: 5 },
          { title: 'Gardening', description: 'Help with garden maintenance', hours: 10 },
        ],
      });
    } else {
      window.location.href = '/login'; // Redirect to login if no email
    }
  }, []);

  const handleVideoUpload = () => {
    const duration = parseInt(videoDuration, 10);
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration.");
      return;
    }

    const credits = Math.floor(duration / 10);
    let currentCredits = user.timeCredits + credits;

    localStorage.setItem('credits', currentCredits);
    setUser(prevState => ({
      ...prevState,
      timeCredits: currentCredits,
    }));

    alert(`Video uploaded! You earned ${credits} credits.`);
  };

  const handleWatchVideo = () => {
    const watchMinutes = parseInt(watchDuration, 10);
    let currentCredits = user.timeCredits;

    if (isNaN(watchMinutes) || watchMinutes % 10 !== 0 || watchMinutes <= 0) {
      alert("Enter a valid duration (multiples of 10).");
      return;
    }

    const neededCredits = watchMinutes / 10;

    if (neededCredits > currentCredits) {
      alert("Not enough credits! Upload more videos to earn credits.");
      return;
    }

    currentCredits -= neededCredits;
    localStorage.setItem('credits', currentCredits);

    setUser(prevState => ({
      ...prevState,
      timeCredits: currentCredits,
    }));

    alert(`You are now watching a skill video for ${watchMinutes} minutes.`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <header style={headerStyle}>
        <div style={logoStyle}>🌐 HourBank</div>
        <nav>
          <a href="/about" style={navLinkStyle}>About Us</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/login" style={{ ...navLinkStyle, marginRight: 0 }}>Logout</a>
        </nav>
      </header>

      <main style={mainStyle}>
        <h2>Welcome, <span>{user.email}</span></h2>

        <h3>Upload a Video</h3>
        <input
          type="file"
          accept="video/*"
          style={inputStyle}
        />
        <input
          type="number"
          value={videoDuration}
          onChange={(e) => setVideoDuration(e.target.value)}
          placeholder="Enter duration in minutes"
          min="1"
          style={inputStyle}
        />
        <button onClick={handleVideoUpload} style={buttonStyle}>Upload</button>

        <h3>Your Time Credits: <span>{user.timeCredits}</span></h3>

        <h3>Watch a Skill Video</h3>
        <input
          type="number"
          value={watchDuration}
          onChange={(e) => setWatchDuration(e.target.value)}
          placeholder="Minutes to watch"
          min="10"
          style={inputStyle}
        />
        <button onClick={handleWatchVideo} style={buttonStyle}>Watch</button>
      </main>
    </div>
  );
};

const headerStyle = {
  background: '#646cff',
  color: 'white',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '24px',
};

const navLinkStyle = {
  color: 'white',
  margin: '0 10px',
  textDecoration: 'none',
};

const mainStyle = {
  padding: '20px',
};

const inputStyle = {
  display: 'block',
  margin: '10px auto',
  padding: '10px',
  width: '80%',
  maxWidth: '300px',
};

const buttonStyle = {
  background: '#646cff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
  margin: '10px auto',
  width: '80%',
  maxWidth: '300px',
};

export default ProfilePage;
