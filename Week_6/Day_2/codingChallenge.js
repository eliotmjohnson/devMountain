const findTheSquare = (int) => {
	if (Math.sqrt(int) % 1 === 0) {
		let magicNum = Math.sqrt(int);
		magicNum++;
		const newSquare = magicNum * magicNum;
		return newSquare;
	}
	return -1;
};

console.log(findTheSquare(9));
console.log("===========");
console.log(findTheSquare(289));
console.log("=============");
console.log(findTheSquare(3000));
