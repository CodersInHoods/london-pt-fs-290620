# Operators

Operators are used when you want to **perform an operation** on a value.

If you've compared values using `===`, that's an operator. If you've set a variable to a value, that's an operator. In fact there are lots of things we can do with values which come under the category of 'operations'. For now, we'll just cover the basics.

## Mathematical operations

```javascript
let age = 29;
```

We've declared a variable called `age` and we've used the _assignment operator_ `=` to assign the value of `29`.

If we want to increase the number by 1, we can use the assignment operator again:

```javascript
age = age + 1;
```

We have now assigned the variable a value of `whatever age currently is, plus one`. We can do this another way:

```javascript
age += 1;
```

This does exactly the same thing. This is _addition assignment_. There's event a _third_ way to do exactly the same thing!

```javascript
age++;
```

It's quite often that we want to increase a number by 1, which is why many programming languages include this _increment operator_. It only increases the value by 1, so if it's anything else, you should use `age += 1;`.

We can do other mathematical assignments in a similar way.

```javascript
// subtraction
// these all do the same thing
age = age - 1;
age -= 1;
age--;

// multiplication
age = age * 2;
age *= 2;

// division
age = age / 10;
age /= 10;
```

The last mathematical operator we'll look at is to give the _remainder operator_ `%`. The remainder operator returns _the remainder left over_ when one number is divided by a second number. This can be useful if we want a repeating set of numbers, we'll use this again when we're learning about loops.

```javascript
0 % 3; // 0
1 % 3; // 1
2 % 3; // 2
3 % 3; // 0
4 % 3; // 1
5 % 3; // 2
6 % 3; // 0
7 % 3; // 1
// and so on
```

We can use this in combination with the assignment operator `=` to create the _remainder assignment_ operator.

```javascript
let age = 29;
age %= 3;
// age is now 2
```

## String operations

We can add two strings together to make longer words: `"motor" + "way" === "motorway"`. We can also use the _addition assignment_ operator on strings:

```javascript
let location = "London";
location += ", UK";
```

When using strings, Javascript doesn't know how to subtract, multiply, divide or do anything else except add.
