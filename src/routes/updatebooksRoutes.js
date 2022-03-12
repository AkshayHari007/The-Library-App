const express = require("express");
const updatebooksRouter = express.Router();
const Bookdata = require("../model/booksData");

updatebooksRouter.get("/", function (req, res) {
    res.render('updatebooks');
});

updatebooksRouter.post('/addbook', function (req, res) {
    var details = {
        Book_Name: req.body.BookName,
        Author_Name: req.body.AuthorName,
        Genre: req.body.Genre,
        Description: req.body.Description,
        Image: req.body.Image
    };
    var book = Bookdata(details);
    book.save();
    res.redirect("/books");
});

module.exports = updatebooksRouter;