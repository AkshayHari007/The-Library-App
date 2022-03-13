const express = require("express");
const updateauthorsRouter = express.Router();
const Authordata = require("../model/authorsData");

updateauthorsRouter.get("/", function (req, res) {
    res.render('updateauthors');
});

updateauthorsRouter.post('/addauthor', function (req, res) {
    var details = {
        Author_Name: req.body.AuthorName,
        Born: req.body.Born,
        Nationality: req.body.Nationality,
        About: req.body.About,
        Image: req.body.Image
    };
    var author = Authordata(details);
    author.save();
    res.redirect("/authors");
});

module.exports = updateauthorsRouter;