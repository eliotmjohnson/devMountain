let moviesDB = require("./db.json");
let movieId = 11;

module.exports = {
	getMovies: (req, res) => {
		res.status(200).send(moviesDB);
	},

	addMovie: (req, res) => {
		const { body } = req;
		body.id = movieId;
		moviesDB.push(body);
		res.status(200).send(moviesDB);
		movieId++;
	},

	updateRating: (req, res) => {
		const { params, query, body } = req;
		let index = moviesDB.findIndex((movie) => movie.id === +params.id);
		if (body.type === "plus" && moviesDB[index].rating < 5) {
			moviesDB[index].rating++;
		} else if (body.type === "minus" && moviesDB[index].rating > 1) {
			moviesDB[index].rating--;
		}
		res.status(200).send(moviesDB);
	},

	deleteMovie: (req, res) => {
		let { id } = req.params;
		let index = moviesDB.findIndex((movie) => movie.id === +id);
		moviesDB.splice(index, 1);
		res.status(200).send(moviesDB);
	},
};
