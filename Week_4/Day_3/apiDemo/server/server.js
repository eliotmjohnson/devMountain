const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/pokemon/:name", (req, res) => {
	let { name } = req.params;
	console.log(name);
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((response) => {
			console.log(response.data);
			let pokeObj = {
				name: name,
				sprite: response.data.sprites.front_default,
			};
			// for (let sprite in res.data.sprites) {
			// 	if (typeof res.data.sprites[sprite] === "string") {
			// 		pokeObj.sprites.push(res.data.sprites[sprite]);
			// 	}
			// }
			console.log(pokeObj);
			res.status(200).send(pokeObj);
		})
		.catch((error) => console.log(error));
});

app.listen(4000, console.log(`App running on 4000`));
