const button = document.querySelector("button");
const body = document.querySelector("body");

const clickButt = (evt) => {
	axios
		.get("https://swapi.dev/api/planets/?search=Alderaan")
		.then((res) => {
			let resArr = res.data.results[0].residents;
			for (let i = 0; i < resArr.length; i++) {
				axios
					.get(`${resArr[i]}`)
					.then((res) => {
						let person = document.createElement("h2");
						person.innerText = res.data.name;
						body.appendChild(person);
					})
					.catch((error) => console.log(error));
			}
		})
		.catch((error) => console.log(error));
};

button.addEventListener("click", clickButt);
