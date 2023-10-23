---
sidebar_position: 4
---

# Anonymous Functions and IIFEs

## Objectives

By the end of this chapter, you should be able to:

- Create a function expression
- Write an immediately invoked function expression
- Describe some use cases for immediately invoked function expressions
- Define what closure is and where it can be used
- Explain what recursion is and where it can be used

## Creating Functions: 2 Different Ways

We mentioned earlier that there are two ways to create functions.

The first is a function declaration:

```js
function declaredFunction() {
  return "I am a function declaration!";
}
```

The second is a function expression:

```js
let expression = function () {
  return "I am a function expression!";
};
```

So what is the difference between these two? One difference is that when we use a function expression, we do not assign a “name” to the function. A function’s name is the string of characters that come in between the `function` keyword and the set of parentheses `()`. The first function has a name, `declaredFunction`, but the second function, a function expression, does not have a name. The function without a name is called an **anonymous function**.

The second difference is a little more subtle. It has to do with how a variable gets created in your program. We will talk about the second difference in much more detail in the next chapter.

## IIFE: Immediately Invoked Function Expressions

An immediately invoked function expression (IIFE for short) is a function which immediately gets called after it is written. To create an IIFE, simply wrap your anonymous function in parentheses, and then call the function:

```js
(function () {
  let person = "Elie";
  return person;
})();
```

The example defines an anonymous function that is immediately invoked. Therefore, the function executes and returns “Elie”. We can even save the result of the immediately invoked function expression:

```js
let result = (function () {
  let person = "Elie";
  return person;
})();

console.log(result);
```

(Note: the parenthesis around the function declaration are not optional! If you don’t include them, you’ll get a `SyntaxError`. You should verify this for yourself.)

## IIFEs That Return Objects

One common use case for immediately invoked function expressions is to return an object. For example, you may have an object that has information about a person:

```js
let personObject = (function () {
  return {
    name: "Tim",
    age: 32,
    occupation: "developer",
    hobbies: "sailing",
  };
})();
```

After the code is executed, the `personObject` is equal to the object that was returned from the anonymous function. We can now use the object:

```js
personObject.name; // returns "Tim"
personObject.age; // returns 32
personObject.occupation; // returns "developer"
personObject.hobbies; // returns "sailing"
```

Now, let’s take a look at another example. This time the object will have functions for the values of the keys:

```js
let personObject = (function invokeRightAway() {
  let person = "Elie";
  return {
    getName: function () {
      return person;
    },
    setName: function (newName) {
      person = newName;
    },
  };
})();
```

Now the `personObject` we get back won’t have data for each key, but rather a function that we can execute whenever we like:

```js
personObject.getName(); // "Elie"
personObject.setName("Mary"); //
personObject.getName(); // "Mary"
person; // ReferenceError: person is not defined
```

This example highlights one use-case for IIFE’s: keeping variables out of the global scope. In this case, we can still access and change the `person` variable via the `personObject.getName` and `personObject.setName` methods. However, if we try to access `person` directly from outside of the scope of `invokeRightAway`, we get a reference error.

What is pretty interesting here is that even though `invokeRightAway` finished running, we were still able to access variables from that function inside of the `getName` and `setName` methods. How is that possible? Well, through the use of something called `closure`.

## Closure

One of the most difficult concepts to understand when first learning JavaScript is `closure`. Let’s take a stab at a definition:

> **Closure is when a function is able to access variables from an outer function that has already returned.**

Thanks to JavaScript’s inner workings, a function is able to remember variables defined in functions even if that function has returned. So far, your functions have returned specific data like a string, number, array or object, but your functions can return other functions as well. Let’s see what we mean by that with an example.

```js
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

outer(5); // this returns the inner function

// this calls the inner function right away
outer(5)(2); // 7

// we can store the inner function in a variable
let laterAdd = outer(10);

// we can now call that inner function
laterAdd(15); // 25
```

When we invoke `laterAdd(15)`, we return the sum of `10`+ `15`, but how was the inner function able to remember the parameter “a” defined in the outer function which already returned? The answer is through closure.

## Closures in the wild

There are many use cases for closures. One of the more common ones is to create a “private variable,” or a variable that can not be accessed directly (and overwritten). Here’s an example that uses closure to create a “private” variable.

```
function defineAge(){
    let age = 28;
    return function growUp(){
        age += 1; // increment the age by 1
        return age;
    }
}

let ageOnce = defineAge();
ageOnce(); // 29
ageOnce(); // 30
```

So who can access our `age` variable? Only the `defineAge` function, which has returned, and the `growUp` function, which, through the use of closure, has access to the `age` variable. Amazingly, this is true even though the outer function `defineAge` has already returned. Our `age` variable is now protected and no one can gain access to it! In cases like this, we say that `growUp` (the inner function) has _closure over_ the scope of `defineAge`.

Let’s look at another example:

```js
function createInstructors() {
  let instructors = ["Elie", "Matt", "Tim"];
  return {
    showInstructors: function displayAllInstructors() {
      return instructors;
    },
    addInstructor: function addNewInstructor(instructor) {
      instructors.push(instructor);
      return instructors;
    },
  };
}

let firstClass = createInstructors();
firstClass.addInstructor("Jennifer");
firstClass.showInstructors(); // ["Elie", "Matt", "Tim", "Jennifer"]

let secondClass = createInstructors();
secondClass.addInstructor("Ashley"); // ["Elie", "Matt", "Tim", "Ashley"]

// on one line

let instructors = createInstructors().showInstructors();
["Elie", "Matt", "Tim"];
```

Now that one line we just wrote was pretty neat! `let instructors = createInstructors().showInstructors();`, but could we do better? What if we do not want to call `createInstructors` every time, so that we could write something like `createInstructors.showInstructors()`? To do that, we can use IIFEs!

```js
let instructorModule = (function createInstructors() {
  let instructors = ["Elie", "Matt", "Tim"];
  return {
    showInstructors: function displayAllInstructors() {
      return instructors;
    },
    addInstructor: function addNewInstructor(instructor) {
      instructors.push(instructor);
      return instructors;
    },
  };
})();
```

What we have just created is a small `module`, which is a piece of code that is encapsulated and can be reused quite easily. The pattern we just used to write our code is famously called the module pattern! It’s a great way to wrap everything in an IIFE that contains private data that can not be accessed globally. We can even refactor this more so that our logic is not in the `return` statement.

```js
let instructorModuleRefactored = (function createInstructors() {
  let instructors = ["Elie", "Matt", "Tim"];
  function displayAllInstructors() {
    return instructors;
  }
  function addNewInstructor(instructor) {
    instructors.push(instructor);
    return instructors;
  }
  return {
    showInstructors: displayAllInstructors,
    addInstructor: addNewInstructor,
  };
})();
```

## More on closures

### Recursion

A recursive function is a function that calls itself. That sounds pretty crazy – why would we do this? Often, recursion is an alternative to iteration and in many cases it can actually be more elegant, resulting in less code that is more readable. However, it’s essential to have what’s called a _base case_ in all recursive functions, as well as an understanding of the _call stack_. Let’s examine these terms a bit more.

### Why use recursion?

Many times, recursion can solve the same problems as iteration, but in a more elegant way. Other times, recursion is **far more useful** when solving certain types of problems. Let’s think about this problem:

Imagine we have an object and we’re trying to figure out if a certain value exists in an object. We could easily loop through all the keys in the object and see if the value exists, but what happens when the value of a key is another object? What happens when we have something like this?

```js
var obj = {
  data: {
    info: {
      innerData: {
        moreInfo: {
          name: "Bob",
        },
      },
    },
  },
};
```

We would need to loop over the `obj` variable and the `data`, `info`, `innerData` and `moreInfo` keys! Instead of writing multiple loops, we could call our function again, but with a different parameter! This idea of invoking the same function again is `recursion`. With recursive functions, each recursive call is different (accepts different input).

## Always have a base case

The most important thing to have in any recursive function is a base case. A base case is a terminating case that ends the recursive calls. Without a base case, your recursive function will keep calling itself until you run out of memory. What this means is that you have too many functions on the call stack and your stack “overflows” (that’s where the name StackOverflow comes from)!

Here’s an example of a recursive function without a base case:

```js
function thisIsAProblem() {
  thisIsAProblem();
}
```

If you invoke `thisIsAProblem`, the function will call itself. But this inner function will again call `thisIsAProblem`, which will again call `thisIsAProblem`, and so on. There’s never any way for this function to stop calling itself, which means the call stack will just fill up with copies of `thisIsAProblem`, and none of these functions will be able to pop off the stack. Try pasting this code in the console; you should get a `RangeError` with the message `Maximum call stack size exceeded`.

## Getting Started

Let’s take a look at a recursive function that won’t throw a `RangeError`. We will call this function `sumRange`. It will take a number and return the sum of all numbers from 1 up to the number passed in. For example, `sumRange(3)` should return 6, since 1 + 2 + 3 = 6.

You know enough JavaScript to write this function iteratively, but let’s try to take a recursive approach. In order to do that, we’ll need to think about a couple of things:

- The base case: how do we stop this function from overflowing the call stack?
- How should we call the function from within itself? (We need to make sure we do something a bit different each time so that we don’t overflow the stack.)

Let’s take a look at one possible solution:

```js
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

The base case here is the first line inside of the function; without it, the stack will overflow (try to answer for yourself why this is the case). Then, in the second line of the function, we’re calling `sumRange`, but passing in `num - 1`. This is another hallmark of recursion: when we call the function again, we typically modify the parameters of the function in some way so that we can eventually reach the base case. In this example, if the second line read `return num + sumRange(num)`, we’d once again overflow the stack (try to answer for yourself why this is the case, too).

To really understand what this function is doing, think about what’s happening on the `return num + sumRange(num-1);` line. If you call `sumRange(4)`, for instance, then this function will itself call `sumRange(3)`, which will then call `sumRange(2)`, which will finally call `sumRange(1)`. This process will continue until we reach the base case.

## Your Turn

Write a function called `power` which takes in a base and an exponent. If the exponent is `0`, return `1`. Otherwise, return the result of the `base` multiplied by the power function to the exponent – 1. You can think of it in terms of this example:

```js
2^4 = 2 * 2^3;
2^3 = 2 * 2^2;
2^2 = 2 * 2^1;
2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!
```

Here is what that looks like:

```js
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
```

Next, try to write a function that returns the _factorial_ of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1. For example:

```js
factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
```

Here is a possible solution:

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

## Exercises

- Write a function called `displayFullName`, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.
- Write a function called `createCalculator`, which should return an object that has four methods, `add`, `subtract`, `multiply` and divide.

```js
let calc = createCalculator();
calc.add(20, 20); // 40
calc.subtract(2, 2); // 0
calc.multiply(2, 2); // 4
calc.divide(12, 2); // 6
```

## Solutions

`**displayFullName**`

```js
(function displayName(firstName, lastName) {
  return firstName + " " + lastName;
})("Elie", "Schoppik");
```

**createCalculator**

```js
function createCalculator() {
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
  };
}
```

## Additional Resources

[Computerphile Recursion](https://www.youtube.com/watch?v=Mv9NEXX1VHc)

[Fun Fun Function Recursion](https://www.youtube.com/watch?v=k7-N8R0-KY4)
