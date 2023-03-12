const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name!'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide your email!'],
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide your password!'],
      minlength: 6,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password!'],
      validate: {
        validator: function (pass) {
          return this.password === pass;
        },
        message: 'The password does not match!',
      },
    },
    avatar: {
      type: String,
      required: [true, 'Please provide an avatar!'],
      default: 'default-avatar.jpeg',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('bookmarks', {
  ref: 'Bookmark',
  localField: '_id',
  foreignField: 'user',
});

// Password encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// Compare passwords to authenticate
userSchema.methods.correctPassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
