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

// Logout user
router.post('/logout', authController.logout);

// Controllers
router.get('/', userController.getAllUsers);
router.post('/logout', authController.logout);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser);

// Foward to Bookmark route by merge params
router.use('/:userId/bookmarks', bookmarkRouter);

module.exports = router;
