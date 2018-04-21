window.onload = function () {
    var s = [
        {
            header: {
                title: 'Властелин колец:Возвращение короля.',
                url: 'film_page1.html'
            },
            details: {
                poster: 'img1.jpg',
                actors: 'Элайджа Вуд, Вигго Мартенсен, Шон Эстин,' +
                ' Иэн Маккелен, Орландо Блум,Доминик Монахэн, Билли Бойд, Энди' +
                ' Серкис, Миранда Отто, Бернард Хилл',
                description: 'Последняя часть трилогиии о Кольце всевластия и героях,' +
                ' взявших на себя бремя спасения Средиземья. Повелитель сил' +
                ' Тьмы Саурон направляет свои бесчисленные рати под Минас-Тирита,' +
                ' крепости последней надежды.'
            },
            aside: {
                country: 'США',
                imbd: 8.90,
                year: 2003,
                money: '$'+94000000
            },
        }
        {
            header: {
                title: 'Властелин колец:Две крепости.',
                url: 'film_page2.html'
            },
            details: {
                poster: 'img1.jpg',
                actors: 'Элайджа Вуд, Шон Эстин, Орландо Блум,' +
                ' Доминик Монахэн, Миранда Отто, Джон ' +
                'Рис-Дэвис, Энди Серкис, Билли Бойд',
                description: 'Братство распалось, но Кольцо Всевластья должно быть уничтожено.' +
                ' Фродо и Сэм вынуждены доверить свои жизни Голлуму,' +
                ' который взялся провести их к вратам Мордора. Громадная Армия' +
                ' Сарумана приближается: члены братства и их союзники готовы принять бой.',
            },
            aside: {
                country: 'США',
                imbd: 8.70,
                year: 2002,
                money: '$' + 94000000
            },
        }

        {
            header: {
                title: 'Властелин колец:Две крепости.',
                url: 'film_page2.html'
            },
            details: {
                poster: 'img3.jpg',
                actors: 'Элайджа Вуд, Шон Эстин, Орландо Блум,' +
                ' Доминик Монахэн, Миранда Отто, Джон ' +
                'Рис-Дэвис, Энди Серкис, Билли Бойд',
                description: 'Братство распалось, но Кольцо Всевластья должно быть уничтожено.' +
                ' Фродо и Сэм вынуждены доверить свои жизни Голлуму,' +
                ' который взялся провести их к вратам Мордора. Громадная Армия' +
                ' Сарумана приближается: члены братства и их союзники готовы принять бой.',
            },
            aside: {
                country: 'США',
                imbd: 8.70,
                year: 2002,
                money: "$94 000 000"
            },
        },

        {
            header: {
                title: 'Властелин колец:Братство кольца.',
                url: 'film_page3.html'
            },
            details: {
                poster: 'img2.jpg',
                actors: 'Элайджа Вуд, Шон Эстин, Орландо Блум,' +
                ' Доминик Монахэн, Миранда Отто, Джон' +
                'Рис-Дэвис, Энди Серкис, Билли Бойд',
                description: 'Сказания о Средиземье — это хроника Великой войны за Кольцо,' +
                ' войны, длившейся не одну тысячу лет. Тот, кто владел' +
                ' Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.'
            },
            aside: {
                country: 'США',
                imbd: 8.80,
                year: 2001,
                money: '$'+93000000
            },
        }

    ];

    function createHeader(header) {
        var divHeader = document.createElement('div');
        divHeader.className = 'article_header filter';
        var head = document.createElement('header');
        divHeader.appendChild(head);
        var h1 = document.createElement('h1');
        head.appendChild(h1);
        var a = document.createElement('a');
        h1.appendChild(a);
        a.innerText = header.title;
        a.setAttribute(href, "header.url");

        return divHeader;

    };

    function createDescription(details) {
        var div = document.createElement('div');
        div.className = 'flex-kino';
        detailsElement.innerHTML = '<div class="figure"><figure>' +
            '<img class="animate" src=header.url>' +
            '<figcaption>Обложка фильма</figcaption></figure></div>' +
            '<div class="movie-description"><section><h1>Описание</h1><p>' + details.description + '</p>' +

            '<h1>Актеры</h1><p>' + details.actors + '</p></section></div>'
        return detailsElement;
    };

    function createAside(aside) {
        var asider = document.createElement('aside');
        article.appendChild(asider);
        aside.innerHTML = '<p><strong>Год </strong> 2003<strong> Оценка <span class="tooltip"> IMDb:<span class="IMDb">Internet Movie Database</span></span> 8,9 </strong>\n' +
            ' <small>(1 349 172 )</small><strong> Бюджет:</strong> ' +aside.money + '<strong> Страна: </strong>' + aside.country + '</p>'
    };

    function createArticle(film) {
        var article = document.createElement('article');
        article.appendChild(createHeader(film.header));
        article.appendChild(createDescription(film.details));
        article.appendChild(createAside(film.aside));

        return article;
    };


        for (var i = 0; i < s.length; i++) {
            console.log(s[i]);
            document.querySelector('main').appendChild(createArticle(s[i]));
        }
}

