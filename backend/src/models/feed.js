const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  creater: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  pubDate: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  contentSnippet: {
    type: String,
    default: "",
  },
  guid: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: false,
    default: undefined,
  },
  isoDate: {
    type: Date,
    required: false,
  },
  defaultImage: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    lowercase: true,
    required: true,
  },
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
