const express = require('express');
const {
  signup,
  login,
  protect,
} = require('../controllers/authController');
const userController = require('../controllers/userControllers');
const upload = require('../middleware/fileUpload');
const bookmarkRouter = require('./bookmarkRouters');

const router = express.Router();

// Authentication
router.post('/signup', upload.single('avatar'), signup);
router.post('/login', login);

// Protect later routes
router.use(protect);

// Controllers
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);

// Foward to Bookmark route by merge params
router.use('/:userId/bookmarks', bookmarkRouter);

module.exports = router;
