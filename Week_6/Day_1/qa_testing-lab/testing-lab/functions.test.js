const {
	returnTwo,
	greeting,
	add,
	subtract,
	multiply,
	divide,
} = require("./functions");

describe("Test returnTwo Function", () => {
	test("Basic functionality", () => {
		expect(returnTwo()).toEqual(2);
	});
});

describe("Test greeting Function", () => {
	test("Name One", () => {
		expect(greeting("James")).toEqual("Hello, James.");
	});

	test("Name Two", () => {
		expect(greeting("Jill")).toEqual("Hello, Jill.");
	});
});

describe("Test add Function", () => {
	test("First Set of Numbers", () => {
		expect(add(1, 2)).toEqual(3);
	});

	test("Second Set of Numbers", () => {
		expect(add(5, 9)).toEqual(14);
	});
});

describe("Test Math Functions", () => {
	test("First Set of Numbers", () => {
		let testNum1 = 10;
		let testNum2 = 10;

		expect(add(testNum1, testNum2)).toEqual(20);
		expect(subtract(testNum1, testNum2)).toEqual(0);
		expect(multiply(testNum1, testNum2)).toEqual(100);
		expect(divide(testNum1, testNum2)).toEqual(1);
	});

	test("Second Set of Numbers", () => {
		let testNum1 = 5;
		let testNum2 = 5;

		expect(add(testNum1, testNum2)).toEqual(10);
		expect(subtract(testNum1, testNum2)).toEqual(0);
		expect(multiply(testNum1, testNum2)).toEqual(25);
		expect(divide(testNum1, testNum2)).toEqual(1);
	});
});
