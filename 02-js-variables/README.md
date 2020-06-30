# Variables

In life, we remember the names of things (objects, people, places) which we use later on to help us communicate with others. Imagine you are in a room with a table, a blue chair and a red chair and you needed to instruct someone else to rearrange the furniture, but you could only describe the position of the objects, not anything about the objects themselves.

A pretty efficient approach might be something like “pick up the object which is 10cm away from the west wall and place it next to the object which is 30cm away from the east wall”. This would require you to measure everything, figure out the direction the walls are facing and the person you are instructing to do the same thing.

Therefore we give _descriptive names_ to things to make it easier to refer to those objects. “Pick up the blue chair and place it next to the red chair” is so much simpler.

This is a bit like variables in programming. A variable is a _name_ given to a _value_. Under the hood, variables are actually specific _memory addresses_ which are storing something in the memory of the application, so it’s a bit like a description of the exact location of those objects in the room.

Look at this pseudo-code (pseudo-code is not a specific language, but is written a little like real code):

```(javascript)
the eastWall is the wall which faces east
the westWall is the wall which faces west

the redChair is the object which is 10cm away from the westWall
the blueChair is the object which 30cm away from the eastWall
the table is the object which is 90cm away from the eastWall

move the blueChair next to the redChair and move both chairs next to the table

```

We’re describing the parameters of the room and the objects in the room, which allows us to easily describe what we want to happen with to those objects.

## Variables in JS

In life, we remember the names of things (objects, people, places) which we use later on to help us communicate with others. Imagine you are in a room with a table, a blue chair and a red chair and you needed to instruct someone else to rearrange the furniture, but you could only describe the position of the objects, not anything about the objects themselves.

A pretty efficient approach might be something like “pick up the object which is 10cm away from the west wall and place it next to the object which is 30cm away from the east wall”. This would require you to measure everything, figure out the direction the walls are facing and the person you are instructing to do the same thing.

Therefore we give descriptive names to things to make it easier to refer to those objects. “Pick up the blue chair and place it next to the red chair” is so much simpler.

This is a bit like variables in programming. A variable is a name given to a value. Under the hood, variables are actually specific memory addresses which are storing something in the memory of the application, so it’s a bit like a description of the exact location of those objects in the room.

Look at this pseudo-code (pseudo-code is not a specific language, but is written a little like real code):

```
the eastWall is the wall which faces east
the westWall is the wall which faces west

the redChair is the object which is 10cm away from the westWall
the blueChair is the object which 30cm away from the eastWall
the table is the object which is 90cm away from the eastWall

move the blueChair next to the redChair and move both chairs next to the table
```

We’re describing the parameters of the room and the objects in the room, which allows us to easily describe what we want to happen with to those objects.

In Javascript, there are three ways to _declare_ a variable: `const`, `let` and `var`. The vast majority of the time you’ll be using `const` and `let`, so we’ll focus on those for now. These are two slightly different types of variable which allow us to use them in slightly different ways.

## `const`

`const` is short for _constant_. This is because a variable declared using `const` _cannot be reassigned_.

```javascript
const country = "UK";
const city = "London";
```

In this code, we have declared two constant variables. The _values_ of these variables are both strings. A string is a _type_, we’ll explore types very soon.

Imagine we want to search for some flights, now we can search using the values stored in `country` and `city`. This might involve a _function_ called `searchForFlightsTo`, we’ll explore functions later on.

```javascript
searchForFlightsTo(country, city);
```

Because we used `const`, we _cannot reassign_ these variables to another value. This code will produce an error:

```javascript
const country = "UK";
const city = "London";

searchForFlightsTo(country, city);

country = "France";
city = "Paris";

searchForFlightsTo(country, city);
```

In general, this is often the behaviour we want. It makes life easier for us as developers to know that once we create this variable, _we can be confident that it’s value hasn’t changed to something else_.

## `let`

Declaring variables using `let` is done in exactly the same way as `const`. Here, we'll create a couple of variables, both being assigned to `numbers`:

```javascript
let counter = 0;
let increment = 5;
```

The difference here is that _we can reassign the values_:

```javascript
let counter = 0;
let increment = 5;

counter = counter + increment;
```

The value stored in `counter` was initialised as `0`, but then we reassigned the value to `5` (or the current value of `counter` plus the current value of `increment`).

What would the value of `counter` be after this code?

```javascript
let counter = 0;
let increment = 5;

counter = counter + increment;
counter = counter + increment;
counter = counter + increment;
```

### Exercise

In your terminal, run `npm test`. You should see a list of tests which need to pass. Only once all of these tests pass should you move on to the next exercise.

Note: you will need to run `npm install` if you haven't already.
