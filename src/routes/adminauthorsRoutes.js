const express = require("express");
const adminauthorsRouter = express.Router();
const Authordata = require("../model/authorsData");


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


module.exports = adminauthorsRouter;