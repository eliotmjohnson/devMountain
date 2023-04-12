const pokeContainer = document.querySelector("#poke-container");
const form = document.querySelector("form");
const input = document.querySelector("input");

const clearContainer = () => {
	pokeContainer.innerHTML = "";
};

const getPokemon = (evt) => {
	evt.preventDefault();
	let pokeName = input.value.toLowerCase();

	axios
		.get(`http://localhost:4000/api/pokemon/${pokeName}`)
		.then((response) => {
            console.log(response.data);
            displayPokemon(response.data)
		})
		.catch((error) => console.log(error));

	input.value = "";
};

const displayPokemon = (obj) => {
	clearContainer();
	let { name, sprite } = obj;
	const pokeCard = document.createElement("div");
	pokeCard.innerHTML = `
        <div>
            <img src="${sprite}"/>
        </div>
        
        <h1>${name}</h1>
    `;

    pokeContainer.appendChild(pokeCard);
};

form.addEventListener("submit", getPokemon);
