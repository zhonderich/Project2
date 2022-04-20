const mongoose = require("mongoose"),
    booksSchema = mongoose.Schema({
        name: {type: String},
        Author: {type: String},
        link: {type: String},
    });
module.exports = mongoose.model("Book", booksSchema);