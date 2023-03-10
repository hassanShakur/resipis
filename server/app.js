const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const AppError = require('./utilities/appError');
const userRouter = require('./routers/userRouters');
const bookmarkRouter = require('./routers/bookmarkRouters');
const {
  globalErrorHandler,
} = require('./controllers/errorController');

const app = express();

// Cleaners and protectors
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Foward route requests
app.use('/api/users', userRouter);
app.use('/api/bookmarks', bookmarkRouter);

// Handle unhandled requests
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `The url ${req.originalUrl} could not be found on the server!`,
      404
    )
  );
});

// GLobal error handling middleware
app.use(globalErrorHandler);

module.exports = app;
