const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user time credits after service exchange
exports.updateTimeCredits = async (req, res) => {
  const { userId, credits } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.timeCredits += credits;
    await user.save();
    res.json({ message: 'Time credits updated successfully', timeCredits: user.timeCredits });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
