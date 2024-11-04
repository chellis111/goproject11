const Blog = require('../models/blogModels');

// Create new blog controller function
const createNewBlog = async (req, res) => {
    const {title, content, user} = req.body;
    const { userId } = req.user
    try {
        const newBlog = new Blog({
            title,
            content,
            user: userId
        });

        await newBlog.save();

        if (!newBlog) {
            return res.status(400).json({ error: "blog creation failed" });
        }

        return res.status(201).json({ message: "success", newBlog });
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};

// getAllBlogs controllers function
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("user", "firstName lastName email"); 

        res.status(200).json({ message: "success", blogs });
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};

// get single blog controller function
const getSingeBlog = async (req, res) => {
    const { blogId } = req.params;
    try {
        const blog = await Blog.findById(blogId).populate("user", "firstName lastName email");

        if (!blog) {
            return res.status(404).json({ error: "blog not found" });
        }

        return res.status(200).json({ message: "success", blog });
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};


module.exports = { createNewBlog, getAllBlogs, getSingeBlog };

