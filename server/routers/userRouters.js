const express = require('express');
const { signup, login } = require('../controllers/authController');
const {
  getUser,
  getAllUsers,
} = require('../controllers/userControllers');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
