'use strict'
const Router = require('express').Router();
const movieDB = require('../models/movies_model');

const movieExternalApi = require('../services/find_movie_api');
const path = require('path');
// const {getApartments}  = require('../models/apartment_model');


const bodyParser = require('body-parser');
Router.use(bodyParser.json()); // for parsing application/json
Router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const sendJSONresp = (req, res) => res.json(res.returnRecords);

// To show the landing page
Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/landing.html'));

});

// To show the details page
Router.get('/details', (req, res) => {
    res.render('details')
});


Router.route('/api/movies')
    // To get all movies from the database
    .get(movieDB.getMovies, sendJSONresp)
    // To update notes for a single movie
    .post(movieDB.insertMovie, sendJSONresp);

Router.route('/api/movies/:id')
    // To get single movie by id
    .get(movieDB.getMovies, sendJSONresp)
    // To delete entire movie from the database
    .delete(movieDB.deleteMovie, sendJSONresp);


Router.route('/api/movieinfo')
    // Request to external api
    .get(movieExternalApi.getMovieInfo, sendJSONresp)





module.exports = Router;
