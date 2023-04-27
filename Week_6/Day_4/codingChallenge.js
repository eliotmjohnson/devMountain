const sortArr = (arr) => {
	let sortedArr = [];
	let newObj = arr.map((e, i) => {
		return { index: i + 1, elem: e };
	});

	newObj.sort((a, b) => {
		x = a.elem * a.index;
		y = b.elem * b.index;

		if (x < y) {
			return -1;
		}
		if (x > y) {
			return 1;
		}
		return 0;
	});

	for (let x in newObj) {
		sortedArr.push(newObj[x].elem);
	}
	return sortedArr;
};

console.log(sortArr([23, 2, 3, 4, 5]));
