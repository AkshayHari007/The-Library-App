const express = require('express');
const loginRouter = express.Router();
const Userdata = require("../model/signinData");
const Admindata = require("../model/adminsigninData");



loginRouter.get('/', function (req, res) {

    res.render('login', {});

});

loginRouter.get('/check', function (req, res) {
    var input = {
        Email_Id: req.query.EmailId,
        Password: req.query.Password
    };
    console.log(input);
    Userdata.find().then(function (user) {
        console.log(user);
        var check = false;
        for (let i = 0; i < user.length; i++) {
            if ((input.Email_Id == user[i].Email_Id) && (input.Password == user[i].Password)) {
                check = true;
                break;

            } else {
                check = false;

            }
        }

        if (check) {
            // alert("LogIn Successful");
            res.redirect('/books');
        } else {
            // console.log('false');
            // alert("Login Failed. Please Try Again!");
            res.redirect('/login');
        }

    });
});

loginRouter.get('/acheck', function (req, res) {
    var input = {
        Email_Id: req.query.EmailId,
        Admin_Id: req.query.AdminId,
        Password: req.query.Password
    };
    console.log(input);
    Admindata.find().then(function (user) {
        console.log(user);
        var check = false;
        for (let i = 0; i < user.length; i++) {
            if ((input.Email_Id == user[i].Email_Id) && (input.Admin_Id == user[i].Admin_Id) && (input.Password == user[i].Password)) {
                check = true;
                break;

            } else {
                check = false;

            }
        }

        if (check) {
            // alert("LogIn Successful");
            res.redirect('/booksadmin');
        } else {
            // console.log('false');
            // alert("Login Failed. Please Try Again!");
            res.redirect('/login');
        }

    });
});

module.exports = loginRouter;