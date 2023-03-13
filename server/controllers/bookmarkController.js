const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
const Bookmark = require('./../models/bookmarkModel');

exports.getAllBookmarks = catchAsync(async (req, res, next) => {
  // Merge params config
  let filterUserTours;
  if (req.params.userId)
    filterUserTours = { user: req.params.userId };

  // Actual query
  const bookmarks = await Bookmark.find(filterUserTours);
  // const bookmarkSummary = bookmarks.map((bm) => {
  //   return {
  //     recipe: bm.recipe.title,
  //     resipisId: bm.recipe.id,
  //     dateCreated: bm.dateCreated,
  //     id: bm._id,
  //   };
  // });

  res.status(200).json({
    status: 'Success',
    results: bookmarks.length,
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

exports.deleteBookmark = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const bookmarkToDelete = await Bookmark.findByIdAndDelete(id);

  if (!bookmarkToDelete) {
    return next(new AppError('No bookmark found with that id!', 404));
  }

  res.status(204).json({
    status: 'Success',
    data: null,
  });
});
