const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

//const adminData = require('./routes/admin');
//const shopRoutes = require('./routes/shop');
const fcsRoutes = require('./routes/fcs');

const app = express();

// Hanldebars
// app.engine('hbs', expressHbs({defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');

// EJS
app.set('view engine', 'ejs');

//Pug
// app.set('view engine', 'pug');
// app.set('views', 'views'); // No needed, default is already views.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(fcsRoutes.routes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Not Found'});
});

const port = process.env.PORT || 5000;

app.listen(port);