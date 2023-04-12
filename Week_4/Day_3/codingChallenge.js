const paranthChecker = (string) => {
	let closeChecker = 0;
	let openChecker = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === "(") {
			openChecker++;
		} else if (string[i] === ")") {
			closeChecker++;
		}
	}
	if (closeChecker !== openChecker) {
		return false;
	} else if (closeChecker === 0 && openChecker === 0) {
		return "Hey!! There aren't any parantheses in here!";
	} else return true
};

console.log(paranthChecker("(Oh Noes!)("));
console.log("==========");
console.log(paranthChecker("()"));
console.log("==========");
console.log(paranthChecker("((There's a bonus open paren here.)"));
console.log("==========");
console.log(paranthChecker("Hey...there are no parens here!"));
