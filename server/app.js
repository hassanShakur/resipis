const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const AppError = require('./utilities/appError');
const userRouter = require('./routers/userRouters');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/users', userRouter);
app.use('/api/bookmarks', userRouter);

app.all('*', (req, res, next) => {
  next(
    new AppError(
      `The url ${req.originalUrl} could not be found on the server!`,
      404
    )
  );
});

module.exports = app;
