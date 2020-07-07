// Exercise 1
describe("age", () => {
	test("age is declared and has value with type 'number'", () => {
		expect(age).toBeDefined();
		expect(typeof age).toBe("number");
	});
});

// Exercise 2
describe("favoriteLanguage", () => {
	test("favoriteLanguage is declared and has value 'JavaScript'", () => {
		expect(favoriteLanguage).toBeDefined();
		expect(favoriteLanguage).toBe("JavaScript");
	});
});

// Exercise 4
describe("favoriteCity", () => {
	test("favoriteCity is declared", () => {
		expect(favoriteCity).toBeDefined();
	});
});

// Exercise 5
describe("isAccessGranted", () => {
	test("isAccessGranted should return true", () => {
		expect(isAccessGranted(18, "PHP")).toBe(true);
		expect(isAccessGranted(16, "PHP")).toBe(false);
	});
});

// Exercise 6
describe("greeting", () => {
	test("greeting should take 'age' and 'favoriteLanguage' and return a valid string", () => {
		expect(greeting(18, "JavaScript")).toBe("You are a frontend developer");
		expect(greeting(20, "PHP")).toBe("You pick the wrong career");
	});
});

// Exercise 7
describe("checkTheNumber", () => {
	test("checkTheNumber should take 15 as a param and return 'More then 10'", () => {
		expect(checkTheNumber(15)).toBe("More than 10");
	});

	test("checkTheNumber should take 7 as a param and return 'Less than 10'", () => {
		expect(checkTheNumber(7)).toBe("Less than 10");
	});

	test("checkTheNumber should take 3 as a param and return 'Less than 5'", () => {
		expect(checkTheNumber(3)).toBe("Less than 5");
	});
});

// Exercise 8
describe("greetOnLocalLanguage", () => {
	test("greetOnLocalLanguage should take city as a parameter and and return local greetings", () => {
		const cities = ["London", "Paris", "Milan", "Barcelona", "Kiev"];
		const greetings = [
			"Hello",
			"Bonjour",
			"Ciao",
			"Hola",
			"I don't speak your language"
		];

		cities.forEach((city, index) => {
			expect(greetOnLocalLanguage(city)).toBe(greetings[index]);
		});
	});
});
