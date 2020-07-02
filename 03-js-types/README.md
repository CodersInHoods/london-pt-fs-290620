# Types

When we refer to a _value_ in our code, the computer needs to know what _type_ of data it is.

In Javascript there are 4 primitive types and 2 complex types. For now, we'll only look at the primitive types.

## Primitive types

### `string`

A string is the type given to something we will _usually assume_ is some text. It is denoted using quotes, there are 3 different quotes we can use: single, double or backticks.

```javascript
const country = "UK";
const city = "London";
const area = `Moorgate`;
```

The type of all of these variables `string`. Single quotes and double quotes are mostly interchangeable, depending on your preference, but backticks have some special behaviour.

Inside backticks, we can actually _execute JS code_. Take a look at this example:

```javascript
const country = "UK";
const city = "London";

const location = `Country: ${country} and city: ${city}`;
```

The variable `location` will be set to `"Country: UK and city: London"`. This is called _interpolation_.

### `number`

Numbers in JS have their own type: `number`. Numbers don't have quotes around them, which is how our computer can tell between the actual number `5` and a string which is set to `"5"`.

```javascript
const quantity = 43;
const price = 10.99;
const total = quantity * price;
```

Here we have 3 variables, all with the type of `number`. A `number` can be an integer (a whole number) or a floating point number (a float, a number with decimal places). Other programming languages have separate types for integers and floats, but in JS we use `number` for both.

### `boolean`

A boolean value is something which can either be `true` or `false` and nothing else. Again, we don't use quotes like we do with strings. If you think it has a slightly odd name, it's named after George Boole, a mathematician who defined this concept in the 19th century.

```javascript
const yes = true;
const no = false;
```

### `undefined`

This is probably the most confusing of the primitive types. In JS, we use the keyword `undefined` to say that a variable does not yet have a value.

```javascript
const name = undefined;
let age = undefined;
```

This has its own type because it is _an empty value_. It has no value, so it cannot be a `string`, `number` or `boolean`.

If we declare a variable without assigning it a value, the value will in fact be set to `undefined`

```javascript
let age;
```

In this example, `age` will be `undefined`.

Notice we used `let` in this example, not `const`. When declaring a `const` variable, we must _always_ initialize it with a value.

# Types and functions

Javascript gives us a lot of useful functions straight out of the box. Sometimes the functions are a _property of a value_, sometimes they are defined _globally_, other times they are available as a property of a _global object_. We'll take a look at these now.

## Functions as a property of a value

A property on a value can be accessed using _dot notation_: `value.property`. If that property is a function, we can call that function: `value.property()`.

### strings

```javascript
const name = "anderson";
```

Here are just a small selection of the things we can do on a string. If you find you need to do something on a string, always Google to find out what possibilities you have available!

```javascript
// charAt returns the character at an index, starting at 0
name.charAt(0); // a
name.charAt(2); // d

// toUpperCase returns a version of the string
// where every character is UPPER CASE
name.toUpperCase(); // ANDERSON

// length will give us the number of characters
// in the string. length is not a function, just
// a property
name.length; // 8

// padStart returns a version of the string
// which has been filled with whatever we pass it
// until it meets the length we specify
name.padStart(15, "A"); // AAAAAAAanderson
```

### numbers

```javascript
const price = 149.99;

// toFixed returns a string with the number
// rounded to the number of decimal places specified
price.toFixed(0); // "150"
price.toFixed(1); // "150.0"
price.toFixed(2); // "149.99"
price.toFixed(10); // "149.9900000000"
```

## globally defined functions

There are many things that Javascript gives us access to from everywhere. This is known as being _globally defined_. We'll explore more about global vs local definitions when we learn about _scope_. For now, here are a few examples of some globally defined functions that we can use.

```javascript
// parseInt converts a string representation of a number
// into a value with the type number
const numberAsString = "15";
const numberAsNumber = parseInt(numberAsString); // 15
numberAsNumber === numberAsString; // false
numberAsNumber === 15; // true

// if we try to do some maths with a string,
// we get NaN, short for "Not a Number".
// isNan checks if the value is not a number
isNaN("Hello"); // true
isNaN(55); // false
isNaN("55"); // false - type coercion! it's converted our string to a number
```

## Functions as properties of global objects

Most of the time, Javascript has grouped functions together. Usually on _globally defined_ objects.

### Math

```javascript
// Math.random() returns a random decimal between 0 and 1
let number = Math.random(); // 0.6281409858832498
number = Math.random(); // 0.5971380312430836
number = Math.random(); // 0.024064464737883595
number = Math.random(); // 0.38830225752094827

// Math.abs() returns the absolute value of a number
// In other words, the positive version of a number
Math.abs(-5); // 5
Math.abs(5); // 5
Math.abs(0); // 0

// Math.round() returns a number rounded to the
// nearest integer
Math.round(0.38830225752094827); // 0
Math.round(124.765875); // 125
Math.round(5); // 5
```

### Date

```javascript
// Date.now() returns the number of
// milliseconds since January 1, 1970
// This can be useful for timing how long
// your code takes to run
const start = Date.now();
lotsOfVeryComplicatedOperations();
const end = Date.now();
const timeTaken = end - start; // the number of milliseconds it took
```
