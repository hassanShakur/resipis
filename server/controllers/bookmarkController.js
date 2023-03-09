const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
const Bookmark = require('./../models/bookmarkModel');

exports.getAllBookmarks = catchAsync(async (req, res, next) => {
  const bookmarks = await Bookmark.find();

  res.status(200).json({
    status: 'Success',
    data: {
      bookmarks,
    },
  });
});

exports.getBookmark = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const bookmark = await Bookmark.findById(id);

  if (!bookmark) {
    next(new AppError('No bookmark found with that id', 404));
  }

  res.status(200).json({
    status: 'Success',
    data: {
      bookmark,
    },
  });
});

exports.createBookmark = catchAsync(async (req, res, next) => {
  const { recipe, user } = req.body;

  const newBookmark = await Bookmark.create({
    recipe,
    user,
  });

  res.status(201).json({
    status: 'Success',
    data: {
      bookmark: newBookmark,
    },
  });
});
