const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authenticateJWT = require('../middleware/authMiddleware');

// Routes
router.post('/', authenticateJWT, serviceController.createService); // Create service
router.get('/', authenticateJWT, serviceController.getServices); // Get all services
router.get('/:id', authenticateJWT, serviceController.getServiceById); // Get service by ID
router.put('/:id', authenticateJWT, serviceController.updateService); // Update service
router.delete('/:id', authenticateJWT, serviceController.deleteService); // Delete service

module.exports = router;
