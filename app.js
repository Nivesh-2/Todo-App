const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todo');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(todoRoutes);


app.listen(3000);