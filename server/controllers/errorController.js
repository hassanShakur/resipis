const AppError = require('./../utilities/appError');

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid inputs! ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsError = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);

  const message = `Duplicate field value: ${value}. Please try again!`;
  return new AppError(message, 400);
};

const handleCastError = (err) => {
  const message = `The id "${err.value}" does not exist! Please use a valid ID.`;
  return new AppError(message, 400);
};

const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendProdError = (err, res) => {
  const { isOperational, status, statusCode, message } = err;
  console.log(statusCode);
  if (isOperational) {
    res.status(statusCode).json({
      status,
      message,
    });
  } else {
    // console.log(err);

    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

exports.globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  err.message = err.message;
  console.log(err);

  if (process.env.NODE_ENV === 'development') {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // let error = { ...err };

    if (err.name === 'ValidationError')
      err = handleValidationError(err);
    if (err.name === 'CastError') err = handleCastError(err);
    if (err.code === 11000) err = handleDuplicateFieldsError(err);

    sendProdError(err, res);
  }
};
