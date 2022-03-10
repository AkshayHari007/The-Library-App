const mongoose = require("mongoose"); //! Accessing the mongoose package
// mongoose.connect("mongodb://localhost:27017/library"); //! Database construction
mongoose.connect("mongodb+srv://userone:userone@projects.rxlpt.mongodb.net/LibraryApp?retryWrites=true&w=majority");
//!Schema definition
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    Email_Id: String,
    Phone_Number: String,
    Password: String
});

//! Model creation
var Userdata = mongoose.model("userdata", UserSchema);

module.exports = Userdata;