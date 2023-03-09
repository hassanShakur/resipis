const express = require('express');
const {
  getAllBookmarks,
  getBookmark,
  createBookmark,
} = require('../controllers/bookmarkController');

const router = express.Router();

router.route('/').get(getAllBookmarks).post(createBookmark);
router.get('/:id', getBookmark);
