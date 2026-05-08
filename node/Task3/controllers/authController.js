const User = require('../models/User');
const { signToken } = require('../utils/jwt');
const { success, fail } = require('../utils/jsend');

// POST /api/auth/register
const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return fail(res, 'Name, email, and password are required.');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return fail(res, 'Email already in use.');
    }

    const user = await User.create({ name, email, password, role });
    const token = signToken(user._id);

    return success(res, { token, user: sanitize(user) }, 201);
  } catch (err) {
    next(err);
  }
};

// POST /api/auth/login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return fail(res, 'Email and password are required.');
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return fail(res, 'Invalid email or password.', 401);
    }

    const token = signToken(user._id);
    return success(res, { token, user: sanitize(user) });
  } catch (err) {
    next(err);
  }
};

// Remove sensitive fields from user object
const sanitize = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  profilePic: user.profilePic,
});

module.exports = { register, login };
