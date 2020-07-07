// Exercise #1
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Exercise #2
test("subtract 10 - 3 to equal 7", () => {
  expect(subtract(10, 3)).toBe(7);
});

// Exercise #3
test("multiply 5 * 4 to equal 20", () => {
  expect(multiply(5, 4)).toBe(20);
});

// Exercise #4
test("divide 49 / 7 to equal 7", () => {
  expect(divide(49, 7)).toBe(7);
});

// Exercise #5
test("remainder 8 of 18 to equal 2", () => {
  expect(getRemainder(18, 8)).toBe(2);
});

// Exercise #6
test("incremented 13 to equal 14", () => {
  expect(increment(13)).toBe(14);
});

// Exercise #7
test("decrementer 13 to equal 12", () => {
  expect(decrement(13)).toBe(12);
});