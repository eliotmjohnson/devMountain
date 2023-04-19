const popGrowth = (pop, percent, aug, max) => {
	let i = pop;
	let year = 0;
	while (i <= max) {
		year++;
		i += i * (percent / 100) + aug;
	}
	return year;
};

console.log(popGrowth(1500, 5, 100, 5000));
console.log("==============");
console.log(popGrowth(1500000, 2.5, 10000, 2000000));
console.log("==========");
console.log(popGrowth(1000, 2, 50, 1200));
