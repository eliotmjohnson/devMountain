const decoder = (string) => {
	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const newString = [];

	for (let i = 1; i < string.length; i++) {
		for (let j = 0; j < letters.length; j++) {
			if (string[i] === letters[j]) {
				j += +string[0];
				newString.push(letters[j]);
			}
		}
	}
	return newString.join("");
};

console.log(decoder("1a"));
console.log("=============");
console.log(decoder("3ce"));
console.log("=============");
console.log(decoder("2fcjjm"));
