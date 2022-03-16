const mongoose = require("mongoose"); //! Accessing the mongoose package
// mongoose.connect("mongodb://localhost:27017/library"); //! Database construction
mongoose.connect("mongodb+srv://userone:userone@projects.rxlpt.mongodb.net/LibraryApp?retryWrites=true&w=majority");
//!Schema definition
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    Admin_Id: String,
    Phone_Number: String,
    Email_Id: String,
    Password: String
});

//! Model creation
var Admindata = mongoose.model("admindata", AdminSchema);

module.exports = Admindata;