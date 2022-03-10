const express = require('express');
const signinRouter = express.Router();
const Userdata = require("../model/signinData");

signinRouter.get('/', function (req, res) {

    res.render('signin', {});

});

signinRouter.post('/adduser', function (req, res) {
    var details = {
        First_Name: req.body.FirstName,
        Last_Name: req.body.LastName,
        Email_Id: req.body.EmailId,
        Phone_Number: req.body.PhoneNumber,
        Password: req.body.Password
    };
    var user = Userdata(details);
    user.save();
    res.redirect("/login");
});


module.exports = signinRouter;