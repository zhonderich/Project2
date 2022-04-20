const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static("../"+__dirname+"views"));
app.use(express.static("../"+__dirname+"model"));
app.use(express.static("../"+__dirname+"controllers"));
app.use(express.static("../view/books"));
module.exports = router;

app.use('/',router);