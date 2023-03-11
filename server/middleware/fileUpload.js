const multer = require('multer');
const mimes = require('./../utilities/mimeTypes');
const path = require('path');

const upload = multer({
  // Limit in bytes
  limits: 1000000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join('uploads', 'images'));
    },

    filename: (req, file, cb) => {
      const extension = mimes[file.mimetype];
      cb(null, `${req.body.email.split('@')[0]}.${extension}`);
    },
  }),

  fileFilter: (req, file, cb) => {
    // Converting undefined and null to false
    const isValid = !!mimes[file.mimetype];
    const error = isValid ? null : new Error('Invalid mimetype');
    cb(error, isValid);
  },
});

module.exports = upload;
