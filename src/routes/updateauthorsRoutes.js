const express = require("express");
const updateauthorsRouter = express.Router();
const Authordata = require("../model/authorsData");
const multer = require('multer');

updateauthorsRouter.get("/", function (req, res) {
    res.render('updateauthors');
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

updateauthorsRouter.post('/addauthor', upload.single("Image"), function (req, res) {
    var details = {
        Author_Name: req.body.AuthorName,
        Born: req.body.Born,
        Nationality: req.body.Nationality,
        About: req.body.About,
        Image: req.file.filename
    };
    var author = Authordata(details);
    author.save();
    res.redirect("/authors");
});

module.exports = updateauthorsRouter;