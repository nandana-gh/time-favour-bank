const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registration handler (with bcrypt hashing)
exports.register = async (req, res) => {
  const { username, email, password, skills } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password,  // Storing hashed password
      skills,
      timeCredits: 0  // New users start with 0 time credits
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token for the new user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    // Respond with success message and token
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login handler (with JWT generation)
exports.login = async (req, res) => {

  console.log(req.body);

  const { email, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ email });
    if (!user) {
      
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password (using bcrypt)
    if (password !== user.password) {
      
      return res.status(400).json({ message: 'wrong password' });
    }

    // Create JWT payload
    const payload = {
      userId: user._id,
      username: user.username,
    };

    // Generate JWT token with an expiration time of 1 hour
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    // Send token as response
    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
