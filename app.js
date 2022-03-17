// install: git init
// install: npm install express --save
// install: npm install-g nodemon
// install: npm install mongoose  
// install: npm install multer
// install: npm install alert 

const express = require("express");
const app = new express();

const signinRouter = require('./src/routes/signinRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const booksRouter = require('./src/routes/booksRoutes');
const adminbooksRouter = require('./src/routes/adminbooksRoutes');
const authorsRouter = require('./src/routes/authorsRoutes');
const adminauthorsRouter = require('./src/routes/adminauthorsRoutes');
const updatebooksRouter = require('./src/routes/updatebooksRoutes');
const updateauthorsRouter = require('./src/routes/updateauthorsRoutes');




app.use(express.urlencoded({
    extended: true
}));


app.set('view engine', 'ejs'); //install: npm install ejs --save
app.set('views', './src/views');


app.use(express.static('./public'));
app.use('/signin', signinRouter);
app.use('/login', loginRouter);
app.use('/books', booksRouter);
app.use('/booksadmin', adminbooksRouter);
app.use('/authors', authorsRouter);
app.use('/authorsadmin', adminauthorsRouter);
app.use('/updatebooks', updatebooksRouter);
app.use('/updateauthors', updateauthorsRouter);




app.get('/', function (req, res) {
    res.render('index');
});

app.listen(5000, () => {
    console.log("Server Ready on 5000");
});