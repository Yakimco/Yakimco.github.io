'use strict';

var searchResults = [
    {
        header: {
            title: 'Властелин колец: Возвращение Короля',
            url: 'film_page1.html'
        },

        details: {
            poster: 'images/img1.jpg',
            description: 'Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья. Повелитель сил Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, крепости Последней Надежды.',
            actors: 'Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл'
        },

        aside: {
            time: '2003',
            imdb: {
                number: '8.90',
                add: '1 349 172'
            },
            money: '$94 000 000',
            country: 'США'
        }
    },

    {
        header: {
            title: 'Властелин колец: Две крепости',
            url: 'film_page2.html'
        },

        details: {
            poster: 'images/img3.jpg',
            description: 'Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены доверить свои жизни Голлуму, который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой.',
            actors: 'Элайджа Вуд, Шон Эстин, Орландо Блум, Вигго Мортенсен, Иэн МакКеллен, Доминик Монахэн, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд'
        },

        aside: {
            time: '2002',
            imdb: {
                number: '8.70',
                add: '1 221 214'
            },
            money: '$94 000 000',
            country: 'США'
        }
    },

    {
        header: {
            title: 'Властелин колец: Братство кольца',
            url: 'film_page3.html'
        },

        details: {
            poster: 'images/img1.jpg',
            description: 'Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.',
            actors: 'Элайджа Вуд, Иэн МакКеллен, Вигго Мортенсен, Шон Бин, Орландо Блум, Джон Рис-Дэвис, Иэн Холм, Шон Эстин, Билли Бойд, Доминик Монахэн'
        },

        aside: {
            time: '2001',
            imdb: {
                number: '8.80',
                add: '1 389 831'
            },
            money: '$93 000 000',
            country: 'США'
        }
    }
];

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