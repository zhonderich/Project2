const books = require("../models/books");

exports.getAllBooks = (req, res, next) => {
    books.find({}, (error , books) => {
        if (error) next(error);
        req.data = books;
        next();

    });
};

exports.a1984r = (req, res, next) => {
    books.find({name: "1984"}, (error, books)=>{
     if (error) next(error);
    req.data = books;
    next(); 
    });
}

exports.TGT = (req, res, next) => {
    books.find({name: "The Giving Tree"}, (error, data)=>{
     if (error) next(error);
    req.data = data;
    next(); 
    });
}

exports.ArtWar = (req, res, next) => {
    books.find({name: "The Art of War"}, (error, data)=>{
     if (error) next(error);
    req.data = data;
    next(); 
    });
}

exports.addnewbook = (req, res) => {
    res.render("addnewbook");
}

exports.saveBook = (req, res) => {
    let newBook = new books({
        name: req.body.name,
        Author: req.body.Author,
        link: req.body.link,
    });
    newBook.save((error, result) => {
        if (error) res.send(error);
        res.render("uploaded");
    });
};

exports.deleteBook = (req, res) => {
    let delBook = new books({
        name: req.body.name,
        Author: req.body.Author,
        link: req.body.link,
    });
    delBook.save((error, result) => {
        if (error) res.send(error);
        res.render("deleted");
    });
};