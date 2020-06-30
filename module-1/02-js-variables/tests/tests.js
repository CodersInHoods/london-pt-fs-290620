test("`userName` is defined", () => {
  expect(userName).toBeDefined();
});

test("`userName` is a string", () => {
  expect(typeof userName).toBe("string");
});

test("`userName` cannot be reassigned", () => {
  expect(() => {
    userName = "Hello";
  }).toThrow();
});

test("`age` is defined", () => {
  expect(age).toBeDefined();
});

test("`age` can be reassigned", () => {
  const previousAge = age;
  expect(() => {
    age = age + 1;
  }).not.toThrow();
  expect(age).toEqual(previousAge + 1);
});
