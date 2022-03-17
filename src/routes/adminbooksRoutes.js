const express = require("express");
const adminbooksRouter = express.Router();
const Bookdata = require("../model/booksData");
const multer = require('multer');
const alert = require('alert');


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


// ! for delete
adminbooksRouter.post("/:id", function (req, res) {

    // const id = req.params.id;
    Bookdata.findByIdAndDelete(req.params.id).then(function () {
        // alert("Are you sure you want to delete this book");
        res.redirect("/booksadmin");
    });
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

// ! for update
adminbooksRouter.post("/update/:id", upload.single("Image"), function (req, res) {
    const id = req.params.id;
    Bookdata.findByIdAndUpdate(
        id, {
            $set: {
                Book_Name: req.body.BookName,
                Author_Name: req.body.AuthorName,
                Genre: req.body.Genre,
                Description: req.body.Description,
                Image: req.file.filename
            }

        },
        function (err, data) {
            res.redirect("/booksadmin");
        });

});


module.exports = adminbooksRouter;