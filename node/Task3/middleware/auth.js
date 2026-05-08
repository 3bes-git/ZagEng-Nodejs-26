const User = require('../models/User');
const { verifyToken } = require('../utils/jwt');
const { fail } = require('../utils/jsend');

// Verify JWT token
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return fail(res, 'No token provided. Please log in.', 401);
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id);
    if (!user) {
      return fail(res, 'User no longer exists.', 401);
    }

    req.user = user;
    next();
  } catch (err) {
    return fail(res, 'Invalid or expired token.', 401);
  }
};

// Restrict to specific roles
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return fail(res, 'You do not have permission to perform this action.', 403);
    }
    next();
  };
};

module.exports = { protect, restrictTo };
