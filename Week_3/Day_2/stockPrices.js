let best = (prices) => {
	let checker = prices[0];
	let profit = 0;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < checker) {
			checker = prices[i];
		}
		let diff = prices[i] - checker;
		if (diff > profit) {
			profit = diff;
		}
	}
	console.log(profit);
};

best([1, 2, 3, 4, 5]);
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1]);
// 8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2]);
// 2 - buy at $7, sell at $9

best([0, 100]);
// 100 - buy at $0, sell at $100

best([5, 4, 3, 2, 1]);
// 0

best([100]);
// 0

best([100, 0]);
// 0
