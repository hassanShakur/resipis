const express = require('express');
const { signup } = require('../controllers/authController');
const { getUsers } = require('../controllers/userControllers');

const router = express.Router();

router.get('/', getUsers);
router.post('/signup', signup);

module.exports = router;
