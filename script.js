'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for ( let i = 0; i < 2; i++ ) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
    
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Мало');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Классика');
		} else if (personalMovieDB.count >= 30) {
			console.log('Супер');
		} else {
			console.log('Ошибка');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let gen = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();

			if (gen == '' || gen == null) {
				console.log('Некорректные данные');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = gen;
			}
		}

		personalMovieDB.genres.forEach((item, index) => {
			console.log(`Любимый жанр ${index + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};
