const toRoman = (int) => {
	const roman = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	};
	let str = "";

	for (let i in roman) {
		if (int >= roman[i]) {
			let romanMuliple = Math.floor(int / roman[i]);
			str += i.repeat(romanMuliple);
			int -= romanMuliple * roman[i];
		}
	}
	return str;
};

console.log(toRoman(449));
console.log(toRoman(99));
console.log(toRoman(267));
console.log(toRoman(5));
