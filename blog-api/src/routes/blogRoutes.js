const express = require('express');
const { createNewBlog, getAllBlogs, getSingeBlog} = require('../controllers/blogControllers');
const requireSignin = require('../middleware/requireSignin');
const blogRouter = express.Router();


blogRouter.post("/", requireSignin, createNewBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.get("/:blogId", getSingeBlog);


module.exports = blogRouter;