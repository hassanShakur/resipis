const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userControllers');
const upload = require('../middleware/fileUpload');
const bookmarkRouter = require('./bookmarkRouters');

const router = express.Router();

// Authentication
router.post(
  '/signup',
  upload.single('avatar'),
  authController.signup
);
router.post('/login', authController.login);

// Protect later routes
router.use(authController.protect);

// Controllers
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/logout', authController.logout);

// Foward to Bookmark route by merge params
router.use('/:userId/bookmarks', bookmarkRouter);

module.exports = router;
