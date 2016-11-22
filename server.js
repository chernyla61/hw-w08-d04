require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home_route');
//const showRoute = require('./routes/show_route');

const app = express();
const port = process.env.PORT || 3000;

// # // This tests to see if we have NODE_ENV in our environment.
// # // Only load the dotenv if we need it.
const isDev = !('NODE_ENV' in process.env)
              && require('dotenv').config()
              && true;

app.use(logger('dev'));

// We are only going to accept json
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));


// set up some logging
app.use(logger(isDev ? 'dev' : 'common'));

app.use('/', homeRoute);
// app.use('/show', showRoute);

// generic error handler
app.use((err, req, res, next) => {
 console.log(err);
 res.status(500).send('Something Broke!');
});



app.listen(port, () => console.log(' Moviehouse Server is listening on', port));

