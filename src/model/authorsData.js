const mongoose = require("mongoose"); //! Accessing the mongoose package
// mongoose.connect("mongodb://localhost:27017/library"); //! Database construction
mongoose.connect("mongodb+srv://userone:userone@projects.rxlpt.mongodb.net/LibraryApp?retryWrites=true&w=majority");
//!Schema definition
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    Author_Name: String,
    Born: String,
    Nationality: String,
    About: String,
    Image: String
});

//! Model creation
var Authordata = mongoose.model("authordata", AuthorSchema);

module.exports = Authordata;