const express = require("express");
const booksRouter = express.Router();
// const Bookdata = require("../model/Bookdata");

booksRouter.get("/", function (req, res) {
    res.render('books');
});

module.exports = booksRouter;