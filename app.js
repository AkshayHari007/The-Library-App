// install: git init
// install: npm install express --save
// install: npm install-g nodemon
// install: npm install mongoose   

const express = require("express");
const app = new express();

const signinRouter = require('./src/routes/signinRoutes');
const loginRouter = require('./src/routes/loginRoutes');

app.use(express.urlencoded({
    extended: true
}));


app.set('view engine', 'ejs'); //install: npm install ejs --save
app.set('views', './src/views');


app.use(express.static('./public'));
app.use('/signin', signinRouter);
app.use('/login', loginRouter);

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(5000);