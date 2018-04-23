'use strict';

var request = new XMLHttpRequest();
request.open("GET", '/movie-data.json', true);
request.onreadystatechange = function () {
    if (request.readyState ==4 ){
        if(request.status==200){
            console.log('successssssss')
        }
        else {
            console.log(request.status, 'what');
        }
    }
};

request.send(null);

var searchResults = request.responseText;


function createArticle(film) {
    var article = document.createElement('article');

    article.appendChild(createHeader(film.header));
    article.appendChild(createDetails(film.details));
    article.appendChild(createAside(film.aside));

    return article;
}

function createHeader(header) {

    var divContainer = document.createElement('div');
    divContainer.className = 'article-header filter';

    var head = document.createElement('header');
    var link = document.createElement('a');
    link.setAttribute('href', header.url);
// нагло подсмотрено и украдено
    var chunks = header.title.split(':');// разделение
    var mark = document.createElement('mark');
    mark.appendChild(document.createTextNode(chunks[0]));// array 0
    link.appendChild(mark);

    link.appendChild(document.createTextNode(':' + chunks[1]));//array1
    head.appendChild(document.createElement('h1')).appendChild(link);

    divContainer.appendChild(head);

    return divContainer;

}

function createDetails(details) {
    var divFlex = document.createElement('div');
    divFlex.className ='flex-kino';
//root element
    var divFigure = document.createElement('div');
    divFigure.setAttribute('class','figure');

    var image = document.createElement('figure');
    image.innerHTML ='<img class="animate" src="'+ details.poster + ' " alt="Властелин колец братство кольца">'+
        '<figcaption>Обложка фильма</figcaption>';
    divFigure.appendChild(image);
//root element
    var divDescription = document.createElement('div');
    divDescription.className ='movie-description';

    var sections = document.createElement('section');
    sections.innerHTML = '<h1>Описание</h1><p> ' +details.description + '</p><h1>Актеры</h1>'+
        '<p>' + details.actors + '</p>';

    divDescription.appendChild(sections);

    divFlex.appendChild(divFigure);
    divFlex.appendChild(divDescription);

    return divFlex;

}

function createAside(aside) {

    var asideR = document.createElement('aside');

    var paragraph = document.createElement('p');
    paragraph.innerHTML ='<strong>Год </strong>'+aside.time +'<strong> Оценка <span class="tooltip"> IMDb:'+
        '<span class="IMDb">Internet Movie Database</span></span>' +aside.imdb.number+ '</strong>' +
        '<small>' + aside.imdb.add + '</small><strong> Бюджет:</strong>' + aside.money +
        '<strong> Страна: </strong>'+aside.country;

    asideR.appendChild(paragraph);

    return asideR;
}


window.onload = function () {

    for (var i = 0; i < searchResults.length; i++) {
        document.querySelector('main').appendChild(createArticle(searchResults[i]));
    }

};