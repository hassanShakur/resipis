const express = require('express');
const {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  deleteBookmark,
} = require('../controllers/bookmarkController');

const router = express.Router({ mergeParams: true });

router.route('/').get(getAllBookmarks).post(createBookmark);
router.route('/:id').get(getBookmark).delete(deleteBookmark);

module.exports = router;
