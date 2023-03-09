const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: [true, 'Please proovide the creator id!'],
  },
  recipe: {
    type: Object,
    required: [true, 'Please provide a recipe to bookmark!'],
  },
  dateCreated: {
    type: Date,
    default: new Date.now(),
  },
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
