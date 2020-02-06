const Post = require("./schema");
const seedData = require("./seeds.json");

Post.remove({})
  .then(() => {
    return Post.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
