var app = app || {};

//
//$(function() {
//	$( '#releaseDate' ).datepicker();
//	new app.LibraryView();
//});

$(function () {
    var books = [
        {title:'Javascript', author:'some guy', releaseDate:'2008', keywords:'Javascript programming'},
        {title:'Book', author:'other guy', releaseDate:'2010', keywords:'CSS programming'},
        {title:'Eloquent JavaScript', author:'Marijn Haverbeke', releaseDate:'2011', keywords:'More JavaScript Programming'}

    ];

    new app.LibraryView( books );
});


