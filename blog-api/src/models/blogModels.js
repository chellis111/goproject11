const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
   },
  { timestamps: true }
);       

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;