$(document).ready(doOnLoad);

function doOnLoad(){
    doMovieFetchRequest();

};

function doMovieFetchRequest(){
    fetch('/api/movies', {  
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

    let $tbody = $('table.displ-data tbody');
    //create for loop to display movie data from our server
    for(let i=0; i < dataArray.length; i++){
        let dataElement = dataArray[i];
        let id = dataElement.id;
        let title = dataElement.title;
        let year = dataElement.year;
        let rated = dataElement.rated;
        let poster = dataElement.poster;
        let notes = dataElement.notes;


        let tableRow = '<tr><td>'+ title +'</td>'
                        + '<td>' + year + '</td>'
                        + '<td>' + rated + '</td>'
                        // + '<td><img src="' + poster + '"/></td>'
                        + '<td>' + notes + '</td>'
                        + '</tr>';
        let $row = $(tableRow).click(function(){
            // Redirect to next page
            $(location).attr('href', 'details.html?id='+id);
        });

        $tbody.append($row);
    }


}