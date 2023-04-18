const createPhoneNumber = (arr) => {
	arr.splice(0, 0, "(");
	arr.splice(4, 0, ") ");
	arr.splice(8, 0, "-");
	let newNumber = arr.join("");
	return newNumber;
};

console.log(createPhoneNumber([5, 2, 7, 4, 8, 6, 7, 3, 9, 0]));
