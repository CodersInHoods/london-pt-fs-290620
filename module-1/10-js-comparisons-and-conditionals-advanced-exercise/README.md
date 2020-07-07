# Advanced Comparisons and Conditionals

If the user's balance is greater than or equal to the price, then sell the product.

This is a pretty straighforward conditional. But what if the product is sold out? We'd need to compare multiple things at once. Luckily we can do that.

## && AND

```javascript
if (balance >= price && availableProducts > 0) {
  productStatus = "SOLD";
}
```

Here we are using the AND comparison `&&` to create some conditional code which will only run **if both conditions are true**. We can use this to combine as many comparisons as we want. Javascript also allows us to write these over multiple lines:

```javascript
if (
  balance >= price &&
  availableProducts > 0 &&
  loggedIn === true &&
  shopStatus === "OPEN"
) {
  productStatus = "SOLD";
}
```

## || OR

We can also use the OR comparison `||` to create code which only runs **if any of the comparisons** is `true`. The `|` character is called a "pipe".

```javascript
if (balance >= price || giftVoucherBalance >= price) {
  productStatus = "SOLD";
}
```

Here we have two different comparisons: `balance >= price` and `giftVoucherBalance >= price`. If either of these are `true`, we will sell the product, therefore we use double pipes: `||`.

## else

In the above scenario, if the user tries to purchase the product but they don't have enough money, we should give them some feedback: if the user has enough money, then sell the product, **else** display a message. To achieve this we use the `else` keyword and another block of code surrounded by `{}`.

```javascript
if (balance >= price || giftVoucherBalance >= price) {
  productStatus = "SOLD";
} else {
  displayMessage = "Sorry, you don't have enough funds!";
}
```

## else if

If we want to have multiple conditions in the same place, we can use `else` and `if` together.

```javascript
if (availableProducts === 0) {
  displayMessage = "Sorry, this product is sold out.";
} else if (balance < price || giftVoucherBalance < price) {
  displayMessage = "Sorry, you don't have enough funds!";
} else {
  productStatus = "SOLD";
}
```

By chaining these conditionals together, the chain stops once something evaluates to `true`. If availableProducts _is_ 0, there's no point checking the balances.

## switch

Let's say we have a function called `calculator`. It takes 3 parameters, `a` is a number, `b` is another number and `operation` is a string of either `"ADD"`, `"SUBTRACT"`, `"MULTIPLY"` or `"DIVIDE"`. We could use some `if else` statements:

```javascript
function calculator(a, b, operation) {
  if (operation === "ADD") {
    return a + b;
  } else if (operation === "SUBTRACT") {
    return a - b;
  } else if (operation === "MULTIPLY") {
    return a * b;
  } else if (operation === "DIVIDE") {
    return a / b;
  } else {
    return "OPERATION NOT SUPPORTED";
  }
}
```

Another way to write this is to use a `switch` statement. We give a value to `switch` and based on each possible `case` that value could be, we run some code. Lastly we define a `default` case at the bottom of the statement.

```javascript
function calculator(a, b, operation) {
  switch (operation) {
    case "ADD":
      return a + b;
    case "SUBTRACT":
      return a - b;
    case "MULTIPLY":
      return a * b;
    case "DIVIDE":
      return a / b;
    default:
      return "OPERATION NOT SUPPORTED";
  }
}
```
