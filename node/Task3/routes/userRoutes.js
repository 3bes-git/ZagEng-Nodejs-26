const express = require('express');
const {
  getAllUsers,
  getUserById,
  getMe,
  updateMe,
  uploadProfilePic,
  deleteUser,
} = require('../controllers/userController');
const { protect, restrictTo } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// All routes below require authentication
router.use(protect);

// Own profile routes
router.get('/me', getMe);
router.put('/me', updateMe);
router.post('/me/profile-pic', upload.single('profilePic'), uploadProfilePic);

// Admin-only routes
router.get('/', restrictTo('admin'), getAllUsers);
router.delete('/:id', restrictTo('admin'), deleteUser);

// Protected route — any authenticated user
router.get('/:id', getUserById);

module.exports = router;
