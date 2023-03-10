const express = require('express');
const { signup, login } = require('../controllers/authController');
const userController = require('../controllers/userControllers');
const bookmarkRouter = require('./bookmarkRouters');

const router = express.Router();

// Controllers
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);

// Authentication
router.post('/signup', signup);
router.post('/login', login);

// Foward to Bookmark route by merge params
router.use('/:userId/bookmarks', bookmarkRouter);

module.exports = router;
