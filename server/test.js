const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE1MGM5YTZiMDNjNDc4MDNkODFiNzAiLCJpYXQiOjE2OTU4NzgyOTgsImV4cCI6MTY5NTg4MTg5OH0.mCaCUhujGIREBTptMtU1jGTcW1aW6kT-TYuO797Qr2Y';

const jwt_decode = require('jwt-decode')

console.log(jwt_decode(token))
