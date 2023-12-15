const mongoose = require("mongoose");

const addblog = mongoose.Schema({
  name: { type: String },
  screenshot: { type: String },
  description: { type: Array },
});

const blog = new mongoose.model("addblog", addblog);
module.exports = blog;