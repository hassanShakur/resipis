const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('../utilities/appError');
const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAsync');

const signJwtToken = (id) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
  //TODO Handle token expired error
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    // avatar: req.file.path,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // Dont send back password
  newUser.password = undefined;
  const token = signJwtToken(newUser._id);

  res.status(201).json({
    status: 'Success',
    data: {
      user: newUser,
      token,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new AppError('Please provide the complete login details!', 400)
    );
  }

  // Check password as well
  const user = await User.findOne({ email }).select('+password');
  if (
    !user ||
    !(await user.correctPassword(password, user.password))
  ) {
    return next(new AppError('Invalid email or password!', 401));
  }

  // Everything ok
  const { id, name } = user;
  const token = signJwtToken(user._id);

  res.status(200).json({
    status: 'Success',
    data: {
      user: { id, name, email: user.email },
      token,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // Options request permission
  if (req.method === 'OPTIONS') {
    return next();
  }
  const auth = req.headers.authorization;
  let token;
  if (auth && auth.startsWith('Bearer')) {
    token = auth.split(' ')[1];
  }

  // Check if token is present
  if (!token) {
    return next(new AppError('Please login to continue!', 401));
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // If user still exixts
  const tokenUser = await User.findById(decodedToken.userId);
  if (!tokenUser) {
    return next(
      new AppError('The token owner no longer exists!', 401)
    );
  }

  // All ok
  req.user = tokenUser;
  next();
});
