const express = require("express");
const authorsRouter = express.Router();
const Authordata = require("../model/authorsData");


authorsRouter.get("/", function (req, res) {
    Authordata.find().then(function (authors) {
        // console.log(authors);
        res.render("authors", {
            authors
        });
    });
});

// ! for single access on clicking the read more
authorsRouter.get("/:id", function (req, res) {

    const id = req.params.id;
    Authordata.findOne({
        _id: id
    }).then(function (author) {
        res.render("author", {
            author
        });
    });
});


module.exports = authorsRouter;