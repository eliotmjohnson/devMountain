const tshirtSorter = (string) => {
	let sorted = string.split("").sort().reverse().join("");
	return sorted;
};

console.log(tshirtSorter("smllms"));

console.log("==========");

const tshirtSorterTwo = (string) => {
	let small = [];
	let medium = [];
	let large = [];

	string.split("").forEach((elem) => {
		if (elem === "s") {
			small.push(elem);
		} else if (elem === "m") {
			medium.push(elem);
		} else if (elem === "l") {
			large.push(elem);
		}
	});
	return small.join("") + medium.join("") + large.join("");
};

console.log(tshirtSorterTwo("smllms"));
