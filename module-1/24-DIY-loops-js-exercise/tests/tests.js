// Exercise #
describe("sortedData", () => {
  test("format data correctly", () => {
    const testCase1 = sortedData([5, "kitten", 3.12, 12]);
    const testCase2 = sortedData([3, "kitten", [3.12], { test: "Alex" }]);

    expect(testCase1).toMatchObject({
      integers: [5, 12],
      strings: ["kitten"],
      floats: [3.12],
    });

    expect(testCase2).toMatchObject({
      integers: [3],
      strings: ["kitten"],
      arrays: [[3.12]],
      objects: [{ test: "Alex" }],
    });
  });
});

describe("multipliedByNextNumber", () => {
  test("should return empty array", () => {
    expect(multipliedByNextNumber([])).toMatchObject([]);
  });

  test("should return an array with one correct number", () => {
    expect(multipliedByNextNumber([4])).toMatchObject([4]);
  });

  test("should return an array with correct numbers", () => {
    expect(multipliedByNextNumber([5, 2, 6, 3, 2])).toMatchObject([
      10,
      12,
      18,
      6,
      2,
    ]);
  });
});

describe("multipliedEvenNumbers", () => {
  test("should return empty array", () => {
    expect(multipliedEvenNumbers([])).toMatchObject([]);
  });

  test("should return an array with 0", () => {
    expect(multipliedEvenNumbers([0])).toMatchObject([0]);
  });

  test("should return an array with correct number", () => {
    expect(multipliedEvenNumbers([4])).toMatchObject([8]);
  });

  test("should return identical array", () => {
    expect(multipliedEvenNumbers([3, 5])).toMatchObject([3, 5]);
  });

  test("should return correctly modified array", () => {
    expect(multipliedEvenNumbers([4, 3, 6, 8, 5, 7])).toMatchObject([
      24,
      3,
      48,
      16,
      5,
      7,
    ]);
  });
});

describe("multipliedOddNumbers", () => {
  test("should return empty array", () => {
    expect(multipliedOddNumbers([])).toMatchObject([]);
  });

  test("should return an array with 0", () => {
    expect(multipliedOddNumbers([0])).toMatchObject([0]);
  });

  test("should return an array with correct number", () => {
    expect(multipliedOddNumbers([4])).toMatchObject([4]);
  });

  test("should return identical array", () => {
    expect(multipliedOddNumbers([3, 5])).toMatchObject([15, 5]);
  });

  test("should return correctly modified array", () => {
    expect(multipliedOddNumbers([4, 3, 6, 8, 5, 7])).toMatchObject([
      4,
      15,
      6,
      8,
      35,
      7,
    ]);
  });
});

describe("multipliedEvenOddNumbers", () => {
  test("should return identical array", () => {
    expect(multipliedEvenOddNumbers([3, 5])).toMatchObject([3, 5]);
  });

  test("should return correctly modified array", () => {
    expect(multipliedEvenOddNumbers([4, 3, 6, 8, 5, 7], "odd")).toMatchObject([
      4,
      15,
      6,
      8,
      35,
      7,
    ]);
  });

  test("should return correctly modified array", () => {
    expect(multipliedEvenOddNumbers([4, 3, 6, 8, 5, 7], "even")).toMatchObject([
      24,
      3,
      48,
      16,
      5,
      7,
    ]);
  });
});
