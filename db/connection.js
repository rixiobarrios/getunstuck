const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/post", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports = mongoose;