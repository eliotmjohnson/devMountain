const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
	driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
	await driver.quit();
});

describe("Test Movies App", () => {
	test("Can add a movie", async () => {
		await driver.get("http://localhost:3000/");

		await driver
			.findElement(By.name("movieTitle"))
			.sendKeys("Holes", Key.RETURN);

		const addedMovie = await driver.wait(
			until.elementLocated(By.css('label[for="movie-0"]'), 1000)
		);
		expect(await addedMovie.getText()).toBe("Holes");
	});

	test("Can delete Movie", async () => {
		await driver.get("http://localhost:3000/");

		await driver
			.findElement(By.name("movieTitle"))
			.sendKeys("Holes", Key.RETURN);

		const addedMovie = await driver.wait(
			until.elementLocated(By.css('label[for="movie-0"]'), 1000)
		);
		expect(await addedMovie.getText()).toBe("Holes");

		await driver.findElement(By.css("#movies-list li button")).click();

		const movieList = await driver.findElement(By.css("#movies-list"));

		expect(await movieList.getText()).toBe("");
	});

	test("Can cross off movies", async () => {
		await driver.get("http://localhost:3000/");

		await driver
			.findElement(By.name("movieTitle"))
			.sendKeys("Holes", Key.RETURN);

		const addedMovie = await driver.wait(
			until.elementLocated(By.css('label[for="movie-0"]'), 1000)
		);
		expect(await addedMovie.getText()).toBe("Holes");

		await driver.findElement(By.css("#movies-list li input")).click();

		const checkbox = await driver.findElement(By.css("#movies-list li input"));

		expect(await checkbox.isSelected()).toBe(true);

		await driver.findElement(By.css("#movies-list li input")).click();

		expect(await checkbox.isSelected()).toBe(false);
	});

	test("Is alert Popping Up", async () => {
		await driver.get("http://localhost:3000/");

		await driver
			.findElement(By.name("movieTitle"))
			.sendKeys("Holes", Key.RETURN);

		const addedMovie = await driver.wait(
			until.elementLocated(By.css('label[for="movie-0"]'), 1000)
		);
		expect(await addedMovie.getText()).toBe("Holes");

		await driver.findElement(By.css("#movies-list li input")).click();
		const message = await driver.findElement(By.css("#message"));
		expect(await message.getText()).toBe("Watched Holes");

		await driver.sleep(1200);
		expect(await message.getAttribute("class")).toBe("hide");

		await driver.findElement(By.css("#movies-list li input")).click();
		expect(await message.getAttribute("class")).toBe("");
		expect(await message.getText()).toBe("Added back Holes");

		await driver.sleep(1200);

		expect(await message.getAttribute("class")).toBe("hide");
	});
});
