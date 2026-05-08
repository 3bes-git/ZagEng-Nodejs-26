const User = require('../models/User');
const { success, fail } = require('../utils/jsend');

// GET /api/users?page=1&limit=10  (admin only)
const getAllUsers = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find().skip(skip).limit(limit),
      User.countDocuments(),
    ]);

    return success(res, {
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/users/:id  (protected)
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return fail(res, 'User not found.', 404);

    return success(res, { user });
  } catch (err) {
    next(err);
  }
};

// GET /api/users/me  (protected - own profile)
const getMe = async (req, res, next) => {
  try {
    return success(res, { user: req.user });
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/me  (protected - update own profile)
const updateMe = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    // Don't allow password update here
    if (req.body.password) {
      return fail(res, 'Use /auth/change-password to update your password.');
    }

    const updated = await User.findByIdAndUpdate(
      req.user._id,
      { name, email },
      { new: true, runValidators: true }
    );

    return success(res, { user: updated });
  } catch (err) {
    next(err);
  }
};

// POST /api/users/me/profile-pic  (protected - upload profile picture)
const uploadProfilePic = async (req, res, next) => {
  try {
    if (!req.file) {
      return fail(res, 'No file uploaded.');
    }

    const profilePic = `uploads/${req.file.filename}`;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { profilePic },
      { new: true }
    );

    return success(res, { user });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/users/:id  (admin only)
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return fail(res, 'User not found.', 404);

    return success(res, { message: 'User deleted successfully.' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getMe,
  updateMe,
  uploadProfilePic,
  deleteUser,
};
