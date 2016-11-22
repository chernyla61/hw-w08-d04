const fetch = require('node-fetch');
// public API to validate addresses
// to make Y address API work, we need to attach a query string with 
// ?AddressLine1= &AddressLine2=
const API_URL = 'http://www.omdbapi.com';

// validateAddress function
function getMovieInfo(req, res, next){
// split original url into two parts and get the second part  
  let queryMovie = req.url.split('?')[1];
  console.log('queryMovie: ' + queryMovie);
// connect query string to API_URL 
  let apiGetMovie = API_URL + '?' + queryMovie;
  console.log('apiGetMovie: ' + apiGetMovie);
  
  fetch(apiGetMovie)
    .then(r => r.json())
    .then((result) => {
      res.returnRecords = result;

      next();
    })
    .catch((err) => {
      res.error = err;
      next();
    })
    return false;
  };


module.exports = { getMovieInfo };