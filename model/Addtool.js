const mongoose = require("mongoose");

const addtool = mongoose.Schema({
  name: { type: String },
  tags: { type: Array },
  tag:  {type: Array},
  logo: { type: String },
  screenshot: { type: String },
  description: { type: String },
  link: { type: String },
});

const tool = new mongoose.model("addtool", addtool);
module.exports = tool;
