const express = require('express');
const { signup, login } = require('../controllers/authController');
const userController = require('../controllers/userControllers');
const bookmarkRouter = require('./bookmarkRouters');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);

router.post('/signup', signup);
router.post('/login', login);

router.use('/:userId/bookmarks', bookmarkRouter);

module.exports = router;
