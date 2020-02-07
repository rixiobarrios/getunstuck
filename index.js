const express = require('express');
const app = express();
const postController = require('./controllers/post');
var methodOverride = require('method-override');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));

app.use('/post', postController);

app.listen(3000, () => {
    console.log('Gangstas rolling on port 3000');
});
