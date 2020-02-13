const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  recipes: [
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: [String],
        required: true
      },
      season: {
        type: [String],
        required: true
      },
      link: {
        type: String
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
