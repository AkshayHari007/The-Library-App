const express = require("express");
const adminbooksRouter = express.Router();
const Bookdata = require("../model/booksData");


adminbooksRouter.get("/", function (req, res) {
    Bookdata.find().then(function (books) {
        // console.log(books);
        res.render("booksadmin", {
            books
        });
    });
});

// ! for single access on clicking the read more
adminbooksRouter.get("/:id", function (req, res) {

    const id = req.params.id;
    Bookdata.findOne({
        _id: id
    }).then(function (book) {
        res.render("bookadmin", {
            book
        });
    });
});


module.exports = adminbooksRouter;