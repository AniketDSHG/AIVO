const express = require("express");
const { Addtools, getalltool, deletetool, editTool, getatool } = require("../Controller/Addtools");
const { AddBlogs, getallBlog, deleteBlog, getblogIndi, editBlog, getablog } = require("../Controller/AddBlog");

const router = express.Router();

router.post("/addtool", Addtools);
router.get("/gettool", getalltool);
router.get("/getTools/:id", getatool);
router.delete("/deletetool", deletetool);
router.post("/editTool/:id", editTool);

router.post("/addBlog", AddBlogs);
router.get("/getBlog", getallBlog);
router.get("/getBlog/:id", getablog);
router.get("/getblogIndi/:id", getblogIndi);
router.delete("/deleteBlog", deleteBlog);
router.post("/editBlog/:id", editBlog);

module.exports = router;
