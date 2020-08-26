const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require ('express-handlebars');
const nodemailer = require ('nodemailer');

const app = express();

// View engine setup
app.engine(
    'handlebars',
     exphbs({
         extname: "hbs",
         defaultLayout: "",
         layoutsDir: "",
     })
);
app.set('view engine', 'handlebars');

app.get('contact', (req, res) => {
    console.log("tutu")
})

app.post('/contact', (req, res) => {
    console.log(req.body)
})

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));



// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.render('contact');
// });

app.listen(8080, () => console.log('Server started'));

