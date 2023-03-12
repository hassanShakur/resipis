const express = require('express');
const { protect } = require('../controllers/authController');
const {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  deleteBookmark,
} = require('../controllers/bookmarkController');

const router = express.Router({ mergeParams: true });

// Protect later routes
router.use(protect);

router.route('/').get(getAllBookmarks).post(createBookmark);
router.route('/:id').get(getBookmark).delete(deleteBookmark);

module.exports = router;
