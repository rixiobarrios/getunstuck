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

router.put("/:id", (req, res) => {
  const post = {
    title: req.body.title,
    post: req.body.post
  };
  Post.findOneAndUpdate({ _id: req.params.id }, post, { new: true }).then(
    post => {
      res.redirect("/post");
    }
  );
});
router.delete("/:id", (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/post");
  });
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.render("show", post);
    })
    .catch(console.error);
});
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    post: req.body.post
  })
    .then(post => {
      res.redirect("/post");
    })
    .catch(console.error);
});
//posts to the index.hbs page, try and get to add to show

module.exports = router;
