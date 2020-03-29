var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('./models/Category');


var indexRouter = require('./routes/index');

const PORT = process.env.PORT || 9000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




mongoose.connect('mongodb://localhost:27017/Burgermania', { useNewUrlParser: true });
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
    mongoose.pluralize(null);

    // const Schema = mongoose.Schema;
    const Category = mongoose.model('Category');

    // const CategorySchema = new Schema({
    //     title: {
    //         type: String,
    //         required: true,
    //     },
    // });
    // const Category = mongoose.model('Category', CategorySchema);
    const test = new Category({ title: 'karol' })

    console.log('Connected to mlab database!');
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
    app.use('/', indexRouter);
    test.save().then(() => {
        Category.find({ title: 'karol' }, (x, y) => {
            console.log(y)
        })
    })

});
module.exports = app;

