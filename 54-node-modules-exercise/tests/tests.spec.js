const calculator = require("../lib/calculator");

describe("calculator", () => {
  test("should has total property", () => {
    expect(calculator.total).toBeTruthy();
  });

  test("should total property be a function", () => {
    expect(typeof calculator.total).toEqual("function");
  });

  test("should has add property", () => {
    expect(calculator.add).toBeTruthy();
  });

  test("should add property be a function", () => {
    expect(typeof calculator.add).toEqual("function");
  });

  test("should has subtract property", () => {
    expect(calculator.subtract).toBeTruthy();
  });

  test("should subtract property be a function", () => {
    expect(typeof calculator.subtract).toEqual("function");
  });

  test("should has multiply property", () => {
    expect(calculator.multiply).toBeTruthy();
  });

  test("should multiply property be a function", () => {
    expect(typeof calculator.multiply).toEqual("function");
  });

  test("should has divide property", () => {
    expect(calculator.divide).toBeTruthy();
  });

  test("should divide property be a function", () => {
    expect(typeof calculator.divide).toEqual("function");
  });
});

describe("calculator methods", () => {
  test("should return total value on {total} method call", () => {
    expect(calculator.total()).toEqual(0);
  });

  test("should return total value with type number on {total} method call", () => {
    expect(typeof calculator.total()).toEqual("number");
  });

  test("should reset a value on {total} method call", () => {
    calculator.add(6).total();
    expect(calculator.total()).toEqual(0);
  });

  test("should add provided value on {add} method call", () => {
    expect(calculator.add(5).total()).toEqual(5);
  });

  test("should subtract provided value on {subtract} method call", () => {
    expect(calculator.subtract(5).total()).toEqual(-5);
  });

  test("should multiply by provided value on {multiply} method call", () => {
    expect(calculator.subtract(5).total()).toEqual(-5);
  });

  test("should be able to chain methods", () => {
    expect(calculator.add(5).multiply(2).total()).toEqual(10);
    expect(calculator.add(10).divide(2).total()).toEqual(5);
    expect(calculator.add(10).subtract(2).total()).toEqual(8);
    expect(calculator.add(10).subtract(2).total()).toEqual(8);
    expect(calculator.add(10).add(2).total()).toEqual(12);
    expect(
      calculator.add(10).add(2).divide(2).multiply(6).subtract(5).total()
    ).toEqual(31);
  });
});
