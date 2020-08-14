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
    type: String,
    required: false,
    trim: false,
  },
  contentEncoded: {
    type: String,
    default: "",
  },
  contentEncodedSnippet: {
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
    type: String,
    required: false,
  },
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
