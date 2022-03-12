const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/booksData");

// booksRouter.get("/", function (req, res) {
//     res.render('books');
// });

booksRouter.get("/", function (req, res) {
    Bookdata.find().then(function (books) {
        console.log(books);
        res.render("books", {
            books
        });
    });
});


module.exports = booksRouter;