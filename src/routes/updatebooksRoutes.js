const express = require("express");
const updatebooksRouter = express.Router();
const Bookdata = require("../model/booksData");
const multer = require('multer');



updatebooksRouter.get("/", function (req, res) {
    res.render('updatebooks');
});


const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: imageStorage
});

updatebooksRouter.post('/addbook', upload.single("Image"), function (req, res) {
    var details = {
        Book_Name: req.body.BookName,
        Author_Name: req.body.AuthorName,
        Genre: req.body.Genre,
        Description: req.body.Description,
        Image: req.file.filename
    };
    var book = Bookdata(details);
    book.save();
    res.redirect("/books");
});

module.exports = updatebooksRouter;