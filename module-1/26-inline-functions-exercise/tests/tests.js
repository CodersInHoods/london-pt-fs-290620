// Exercise 1
describe("reverseArray", () => {
	test("reverseArray is declared and has type function", () => {
		expect(typeof reverseArray).toEqual("function");
	});

	test("reverseArray is inline function", () => {
		const isInlineFunction = reverseArray.toString().includes("function");
		expect(isInlineFunction).toEqual(true);
	});

	test("reverseArray return reversed array", () => {
		expect(reverseArray([1, 4, "kitten", 5])).toEqual([5, "kitten", 4, 1]);
	});

	test("reverseArray return empty array", () => {
		expect(reverseArray()).toEqual([]);
	});

	test("reverseArray log error message on wrong type", () => {
		expect(reverseArray("kitten")).toEqual("Please, pass correct type");
	});
});

// Exercise 2
describe("nextOddNum", () => {
	test("nextOddNum is declared and has type function", () => {
		expect(typeof nextOddNum).toEqual("function");
	});

	test("nextOddNum is inline function", () => {
		const isInlineFunction = nextOddNum.toString().includes("function");
		expect(isInlineFunction).toEqual(true);
	});

	test("nextOddNum returns next odd number", () => {
		expect(nextOddNum(1)).toEqual(3);
		expect(nextOddNum(2)).toEqual(3);
	});
});

// Exercise 3
describe("isLessThan100", () => {
	test("isLessThan100 is declared and has type function", () => {
		expect(typeof isLessThan100).toEqual("function");
	});

	test("isLessThan100 is inline function", () => {
		const isInlineFunction = isLessThan100.toString().includes("function");
		expect(isInlineFunction).toEqual(true);
	});

	test("isLessThan100 returns correct boolean", () => {
		expect(isLessThan100(1, 25)).toEqual(true);
		expect(isLessThan100(50, 50)).toEqual(false);
		expect(isLessThan100(50, 51)).toEqual(false);
	});
});

// Exercise 4
describe("incrementBy5", () => {
	test("incrementBy5 is declared and has type function", () => {
		expect(typeof incrementBy5).toEqual("function");
	});

	test("incrementBy5 is inline function", () => {
		const isInlineFunction = incrementBy5.toString().includes("function");
		expect(isInlineFunction).toEqual(true);
	});

	test("incrementBy5 increment by 5", () => {
		expect(incrementBy5(7)).toEqual(12);
	});
});

// Exercise 5
describe("incrementAllBy5", () => {
	test("incrementAllBy5 is declared and has type function", () => {
		expect(typeof incrementAllBy5).toEqual("function");
	});

	test("incrementAllBy5 uses incrementBy5 to increment numbers", () => {
		const incrementBy5 = jest.fn();
		incrementAllBy5([3, 4, 5], incrementBy5);
		expect(incrementBy5).toHaveBeenCalledTimes(3);
	});

	test("incrementAllBy5 returns incremented numbers", () => {
		expect(incrementAllBy5([3, 4, 5], incrementBy5)).toEqual([8, 9, 10]);
	});
});
