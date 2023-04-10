// Write your code below this line

const decoder = (string) => {
	let result = "";
	for (let i = 1; i < string.length; i++) {
		let index = string[i].charCodeAt();
		index += +string[0];
		result += String.fromCharCode(index);
	}
	return result;
};

console.log(decoder("1a"));
console.log("==========");
console.log(decoder("3ce"));
console.log("==========");
console.log(decoder("2fcjjm"));
