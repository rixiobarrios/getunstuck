const mongoose = require('./connection');

const PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    post: String,
    date: String,
    solved: Boolean
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
