const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please proovide the creator id!'],
    },
    recipe: {
      type: Object,
      required: [true, 'Please provide a recipe to bookmark!'],
      unique: [true, 'You have already bookmarked this recipe!'],
    },

    dateCreated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
