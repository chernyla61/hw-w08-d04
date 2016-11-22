$(document).ready(onLoad);

function onLoad(){
    
    let qStr =  parseQueryString();
    // save global variable to use it later
    window.id = qStr['id'];
    doMovieFetchRequest(id);

};

function parseQueryString(){
    let oRetVal ={};
    let url = window.location.href;
    let queryString = url.split('?')[1];
    let arrayParams = queryString.split('&');
    for (let i=0; i < arrayParams.length; i++){
        let paramPair = arrayParams[i].split('=');
        oRetVal[paramPair[0]]=paramPair[1];
    }
        return oRetVal;
};

function doMovieFetchRequest(movieId){
    fetch('/api/movies/'+ movieId, {  
        method: 'get'      
    })
    .then(r => r.json()) 
    .then(function (data) {  
        console.log('Request movies succeeded with JSON response', data.length);
        //call function displayBuildings
        displayMovieData(data);  
    })  
    .catch(function (error) {  
        console.log('Request MOVIES failed', error);  
    });
};

function displayMovieData(dataArray){
    let movie = dataArray[0];
    $('#title').text(movie.title);
    $('#year').text(movie.year);
    $('#rated').text(movie.rated);
    $('#notes').text(movie.notes);
    $('#poster').append($('<img src="' + movie.poster + '"/>'))

}