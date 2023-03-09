const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  res.status(201).json({
    status: 'Success',
    data: {
      user: newUser,
    },
  });
});
