const Service = require('../models/Service'); // Assuming you have a Service model

// Create a new service
exports.createService = async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    
    // Create a new service
    const newService = new Service({
      title,
      description,
      category,
      price,
      userId: req.user.userId // Use the userId from the decoded JWT payload
    });

    // Save the service to the database
    await newService.save();

    res.status(201).json({
      message: 'Service created successfully!',
      service: newService
    });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Something went wrong while creating the service.' });
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find(); // Retrieve all services

    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Something went wrong while fetching the services.' });
  }
};

// Get a single service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ message: 'Something went wrong while fetching the service.' });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { title, description, category, price },
      { new: true } // Return the updated service
    );

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service updated successfully!', service });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Something went wrong while updating the service.' });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service deleted successfully!' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: 'Something went wrong while deleting the service.' });
  }
};
