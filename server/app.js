const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');

const AppError = require('./utilities/appError');
const userRouter = require('./routers/userRouters');
const bookmarkRouter = require('./routers/bookmarkRouters');
const {
  globalErrorHandler,
} = require('./controllers/errorController');

const app = express();

// Parse json data from frontend
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Cleaners and protectors
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// CORS Error Handling by Setting Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

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
