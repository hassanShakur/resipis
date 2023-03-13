const { promisify } = require('util');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const AppError = require('../utilities/appError');
const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAsync');

const signJwtToken = (id) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const sendJwtCookie = (res, token) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000
    ),
    // Only send via https
    // secure: false,
    // Ensures the browser or any other person cannot manipulate this cookie
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production')
    cookieOptions.secure = true;

  res.cookie('token', token, cookieOptions);
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    avatar: req.file.path,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // Dont send back password
  newUser.password = undefined;
  const token = signJwtToken(newUser._id);

  // Generate cookie & send
  sendJwtCookie(res, token);

  res.status(201).json({
    status: 'Success',
    user: newUser,
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
  const token = signJwtToken(user._id);

  // Generate cookie & send
  sendJwtCookie(res, token);

  res.status(200).json({
    status: 'Success',
    token,
    user: _.pick(user, ['id', 'name', 'email', 'avatar']),
  });
});

exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    status: 'Success',
    message: 'Logout successful',
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  // Options request permission
  if (req.method === 'OPTIONS') {
    return next();
  }
  // const auth = req.headers.authorization;
  // let token;
  // if (auth && auth.startsWith('Bearer')) {
  //   token = auth.split(' ')[1];
  // }
  const { token } = req.cookies;

  // Check if token is present
  if (!token) {
    return next(
      new AppError('Please login or provide token to continue!', 401)
    );
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // If user still exixts
  const tokenUser = await User.findById(decodedToken.userId);
  if (!tokenUser) {
    res.clearCookie('token');
    return next(
      new AppError('The token owner no longer exists!', 401)
    );
  }

  // All ok
  req.user = tokenUser;
  next();
});

exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    status: 'Success',
  });
};
