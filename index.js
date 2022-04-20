const mongoose = require("mongoose");
const Book = require("./models/books");
const booksController = require("./controllers/booksController");
const express = require("express"),
    app = express();
require("dotenv").config();
const routes = require("./router");
const uri = process.env.ATLAS_URI;
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use("/",routes)
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

mongoose.connect(uri, { useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => {
    console.log("we have connected to the DB");
});

app.get(
    "/home",
    booksController.getAllBooks,
    (req, res, next) => {
        console.log(req.data);
        res.render("books", { books: req.data});
    }
);

app.get("/books/0",
    booksController.a1984r,
    (req, res, next) => {
        console.log(req.data);
        res.render("books/0",{ books: req.data});
    }
)

app.get("/books/1",
    booksController.TGT,
    (req, res, next) => {
        console.log(req.data);
        res.render("books/1",{ books: req.data});
    }
)

app.get("/books/2",
    booksController.ArtWar,
    (req, res, next) => {
        console.log(req.data);
        res.render("books/2",{ books: req.data});
    }
)

app.get(
    "/deleteabook",
    booksController.getAllBooks,
    (req, res, next) => {
        console.log(req.data);
        res.render("deleteabook", { books: req.data});
    }
);


app.get("/addnewbook", booksController.addnewbook)
app.post("/addsbook", booksController.saveBook);


app.listen(app.get("port"), () => {
    console.log("server is up");
})

var myQuery = Book.findOne({
    name: "1984"
});

myQuery.exec((error, data) => {
    if (data) console.log(data.name+":"+data.link);
});