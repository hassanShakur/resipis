const AppError = require('../utilities/appError');
const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  passwordConfirm = undefined;
  const newUser = await User.create({
    name,
    email,
  });

  res.status(201).json({
    status: 'Success',
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { name, email } = req.body;
  if (!email || !body) {
    next(new AppError('Please provide the complete login details!'));
  }

  const trialUser = await User.findOne({ email });
  if (!trialUser) {
    next(new AppError('Invalid email or password!'));
  }

  res.status(200).json({
    status: 'Success',
    data: {
      user: trialUser,
    },
  });
});
