const mongoose = require("mongoose"); //! Accessing the mongoose package
// mongoose.connect("mongodb://localhost:27017/library"); //! Database construction
mongoose.connect("mongodb+srv://userone:userone@projects.rxlpt.mongodb.net/LibraryApp?retryWrites=true&w=majority");
//!Schema definition
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    Book_Name: String,
    Author_Name: String,
    Genre: String,
    Description: String,
    Image: String
});

//! Model creation
var Bookdata = mongoose.model("bookdata", BookSchema);

module.exports = Bookdata;