const _ = require('lodash');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
const User = require('./../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'Success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id).populate({
    path: 'bookmarks',
    select: '-user recipe.dateCreated recipe.title recipe.id',
  });

  if (!user) {
    next(new AppError('No user found with that id!', 404));
  }

  res.status(200).json({
    status: 'Success',
    data: {
      user,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!user) {
    return next(new AppError('No user found with that id!', 404));
  }

  res.status(200).json({
    status: 'Success',
    user: _.pick(user, ['id', 'name', 'email', 'avatar']),
  });
});
