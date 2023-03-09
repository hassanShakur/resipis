const express = require('express');
const {
  getAllBookmarks,
  getBookmark,
} = require('../controllers/bookmarkController');

const router = express.Router();

router.get('/', getAllBookmarks);
router.get('/:id', getBookmark);
