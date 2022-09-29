const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Blogpost = new Schema({
    header: {
        type: String
    },
    title: {
        type: String
    },
    paragraph: {
        type: Array
    },
    date: {
        type: Boolean
    }
});

module.exports = mongoose.model('Blogpost', Blogpost);