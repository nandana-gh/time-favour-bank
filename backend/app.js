require('dotenv').config(); // This loads the .env file variables
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const serviceRoutes = require('./routes/serviceRoutes'); // Assuming this is your routes for services
const authRoutes = require('./routes/authRoutes'); // Assuming you have the authRoutes for registration/login

// Import the JWT authentication middleware
const authenticateJWT = require('./middleware/authMiddleware');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Serve HTML pages as static files
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// MongoDB connection
console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure if MongoDB connection fails
  });

// Routes
app.use('/api/auth', authRoutes); // For authentication routes (register/login)
app.use('/api/services', authenticateJWT, serviceRoutes); // Protect services route with authenticateJWT middleware

// Default route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Error handling middleware (for better error handling)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Set up server to listen on specified port
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
