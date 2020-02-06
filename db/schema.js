const mongoose = require("./connection");

const PostSchema = new mongoose.Schema({
    title: String
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;