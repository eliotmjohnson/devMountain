const treeMaker = (size) => {
	let block = "*";
	let space = " ";
	let spaceInc = 1;
	let blockInc = 1;
	let tree = [];
	for (let i = 0; i < size; i++) {
		let string = `${space.repeat(size - spaceInc)}${block.repeat(
			blockInc
		)}${space.repeat(size - spaceInc)}`;
		tree.push(string);
		blockInc += 2;
		spaceInc += 1;
	}
	return tree;
};

console.log(treeMaker(3));
console.log(treeMaker(6));
console.log(treeMaker(20));
console.log(treeMaker(30));
