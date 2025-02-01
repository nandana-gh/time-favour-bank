const express = require('express');
const { addService, getServices } = require('../controllers/serviceController');
const router = express.Router();

// Add a new service
router.post('/add', addService);

// Get list of all services
router.get('/', getServices);

module.exports = router;
