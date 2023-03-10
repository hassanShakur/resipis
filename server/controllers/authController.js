const AppError = require('../utilities/appError');
const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
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
    next(
      new AppError('Please provide the complete login details!', 400)
    );
  }

  const trialUser = await User.findOne({ email });
  // if (!trialUser || !User.correctPasswo) {
  //   next(new AppError('Invalid email or password!', 400));
  // }

  // Check password as well

  res.status(200).json({
    status: 'Success',
    data: {
      user: trialUser,
    },
  });
});
