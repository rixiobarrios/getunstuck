const express = require("express");
const Post = require("../db/schema");

const router = express.Router();

router.get("/", (req, res) => {
  Post.find({})
    .then(posts => {
      res.render("index", { posts });
    })
    .catch(console.error);
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:id/edit", (req, res) => {
  Post.findById(req.params.id).then(post => {
    res.render("edit", post);
  });
});
module.exports = router;
