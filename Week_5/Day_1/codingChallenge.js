const findOutlier = (arr) => {
	let evenArr = arr.filter((num) => {
		if (num % 2 === 0) {
			return num;
		}
	});

	let oddArr = arr.filter((num) => {
		if (num % 2 === 1) {
			return num;
		}
	});

	if (evenArr.length > oddArr.length) {
		return oddArr;
	} else return evenArr;
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log("==============");
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
