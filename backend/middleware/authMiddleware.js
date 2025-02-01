// authMiddleware.js
const jwt = require('jsonwebtoken');

// JWT Authentication Middleware
function authenticateJWT(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from the header

  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded; // Store user info in the request object
    next();
  });
}

module.exports = authenticateJWT; // Export the middleware
