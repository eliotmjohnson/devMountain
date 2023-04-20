const guessGifts = (wishList, presents) => {
	let finalArr = [];
	for (let i = 0; i < wishList.length; i++) {
		for (let j = 0; j < presents.length; j++) {
			if (wishList[i].size === presents[j].size) {
				if (wishList[i].clatters === presents[j].clatters) {
					if (wishList[i].weight === presents[j].weight) {
						finalArr.push(wishList[i].name);
					}
				}
			}
		}
	}
	return finalArr;
};

const wishlist = [
	{ name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
	{ name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
	{ name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

const presents = [
	{ size: "medium", clatters: "a bit", weight: "medium" },
	{ size: "small", clatters: "yes", weight: "light" },
];

console.log(guessGifts(wishlist, presents));
