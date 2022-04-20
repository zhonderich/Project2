const express = require('express');
    const app = express();
    const router = express.Router();
const path = require('path');

app.use(express.static(__dirname+"views"));
app.use(express.static(__dirname+"model"));
app.use(express.static(__dirname+"controllers"));

module.exports = router;

app.use('/',router);

//router.get("/books/0", function(req,res) {
//    res.sendFile(path.join(__dirname + "/views/1984.ejs"))
//});