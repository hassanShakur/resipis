const express = require('express');
const { signup, login } = require('../controllers/authController');
const { getUsers } = require('../controllers/userControllers');

const router = express.Router();

router.get('/', getUsers);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
