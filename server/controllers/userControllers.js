const catchAsync = require('../utilities/catchAsync');
const User = require('./../models/userModel');

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'Success',
    data: {
      users,
    },
  });
});
