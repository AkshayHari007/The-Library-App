const express = require("express");
const adminauthorsRouter = express.Router();
const Authordata = require("../model/authorsData");
const Bookdata = require("../model/booksData");
const multer = require('multer');
const alert = require('alert');


adminauthorsRouter.get("/", function (req, res) {
    Authordata.find().then(function (authors) {
        // console.log(authors);
        res.render("authorsadmin", {
            authors
        });
    });
});

// ! for single access on clicking the read more
adminauthorsRouter.get("/:id", function (req, res) {

    const id = req.params.id;
    Authordata.findOne({
        _id: id
    }).then(function (author) {
        res.render("authoradmin", {
            author
        });
    });
});



// ! for delete
adminauthorsRouter.post("/:id", function (req, res) {

    // const id = req.params.id;
    Authordata.findByIdAndDelete(req.params.id).then(function () {
        // alert("Are you sure you want to delete this book");
        res.redirect("/authorsadmin");
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
adminauthorsRouter.post("/update/:id", upload.single("Image"), function (req, res) {
    const id = req.params.id;
    Authordata.findByIdAndUpdate(
        id, {
            $set: {
                Author_Name: req.body.AuthorName,
                Born: req.body.Born,
                Nationality: req.body.Nationality,
                About: req.body.About,
                Image: req.file.filename
            }

        },
        function (err, data) {
            res.redirect("/authorsadmin");
        });

});


module.exports = adminauthorsRouter;