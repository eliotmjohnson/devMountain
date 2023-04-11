// const makeUnique = (string) => {
// 	let newSet = new Set(string);
// 	let newString = [];
// 	newSet.forEach((e) => newString.push(e));
// 	return newString.join("");
// };

const makeUnique = (string) => {
	let arr = string.split("");
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] === arr[i]) {
				arr.splice(j, 1);
			}
		}
	}
	return arr.join("");
};

console.log(makeUnique("helloworld"));
console.log(makeUnique("iwanttoclimbamountain"));
