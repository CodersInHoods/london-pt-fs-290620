const factorial = require("./factorial");

const numbersToTest = [
  { number: 5, outcome: 120 },
  { number: 0, outcome: 1 },
  { number: 10, outcome: 3628800 },
];

test("factorial give the factorial of the number", () => {
  numbersToTest.forEach((testData) => {
    expect(factorial(testData.number)).toBe(testData.outcome);
  });
});
