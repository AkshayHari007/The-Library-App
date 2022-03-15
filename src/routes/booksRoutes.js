const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/booksData");


booksRouter.get("/", function (req, res) {
    Bookdata.find().then(function (books) {
        // console.log(books);
        res.render("books", {
            books
        });
    });
});

// ! for single access on clicking the read more
booksRouter.get("/:id", function (req, res) {

    const id = req.params.id;
    Bookdata.findOne({
        _id: id
    }).then(function (book) {
        res.render("bookadmin", {
            book
        });
    });
});


module.exports = booksRouter;