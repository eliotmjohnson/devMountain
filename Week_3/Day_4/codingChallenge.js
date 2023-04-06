const printDigits = (num) => {
	let revNum;
	while (num > 0) {
		revNum = num % 10;
		console.log(revNum);
		num = Math.floor(num / 10);
	}
};

printDigits(1);
console.log("================");
printDigits(314);
console.log("================");
printDigits(1298928734982739847);
