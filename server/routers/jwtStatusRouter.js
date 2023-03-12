const jwt = require('jsonwebtoken');
const express = require('express');
const _ = require('lodash');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.use(protect);

router.get('/', (req, res, next) => {
  // User set in protect middleware
  const { user } = req;
  res.status(200).json({
    status: 'Success',
    user: _.pick(user, ['id', 'name', 'email', 'avatar']),
  });
});

module.exports = router;
