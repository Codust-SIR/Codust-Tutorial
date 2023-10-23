---
sidebar_position: 5
---

# Hoisting

## Objectives

By the end of this chapter, you should be able to:

- Explain where a variable name gets defined in your code
- Describe how hoisting affects function expressions vs function declarations
- Write functions that call other functions
- Understand what function decomposition is and how to break up your functions

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#let_hoisting):

> Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. When we used to use the `var` keyword, it meant that a variable could appear to be used before it’s declared. This behavior is called “hoisting”, as it appears that the variable declaration is moved to the top of the function or global code. When we use the `let` and `const` keyword, we simply can not access a variable before it is declared. You will encounter hoisting when you compare function declarations and function expressions.

## Hoisting In Function Declarations vs Function Expressions

So how does this work with function declarations vs function expressions?

Function declarations are fully defined before the code is run. So in the following example, we can call the `sayHi` function above the lines that define the `sayHi` function:

```js
sayHi("Matt"); // "Hello Matt"

function sayHi(name) {
  return "Hello " + name;
}
```

However, function expressions act differently. In the following example, there is an error because we are trying to invoke a function called `sayHi` but at that point in the code `sayHi` is not equal to a function. In fact, `sayHi` exists in memory but we can not access it and JavaScript will throw an error.

```js
sayHi("Matt"); // Throws an error!

let sayHi = function (name) {
  return "Hello " + name;
};
```

This is why we recommend that for now, you just use function declarations where you do not need to use the `let` or `const` keyword.

You can read more about hoisting [here](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

## Functions with a single responsibility

Now that you’ve gotten some more experience writing functions, let’s examine a best practice when writing functions. When writing functions, you should strive to make your functions do one thing and do them well. Instead of trying to combine different pieces of logic all into one function, write smaller functions that each do one thing well independently, and then call your functions in other functions. Let’s see what we mean!

### Calling functions from other functions

Let’s imagine we need to write a function that accepts an array of values and returns the lowest number in the array and console.log’s any values that are not a number. It’s possible that our array of values may contain values that are not numbers, so we’ll want to ignore those values and only return the lowest number.

Here’s what that might look like.

```js
function findLowest(values) {
  let lowestNumber = Infinity; // start with the highest possible number
  for (let val of values) {
    if (isNaN(val)) {
      console.log(`not a number: ${val}`);
    } else {
      if (val < lowestNumber) {
        lowestNumber = val;
      }
    }
  }
  return lowestNumber;
}
```

While this works, we’re doing quite a bit of work in this single function. The purpose of this function is to find the lowest value in an array of values. It should not also have to worry about checking each value to see if it is not a number and doing a console.log when it does not find a valid number.

Let’s break this up into two functions – one that can return `true` or `false` if a given value is a number and the other to actually find the lowest value. The second function will call the `trueIfNum` function inside of it to see if the value that is being iterated over is a number. `findLowest` does not have to worry about how to check for a number or what to do when a value that is not a number is found, it only has one responsibility – to find a the lowest value in an array of values.

```js
function trueIfNum(num) {
  if (isNaN(num)) {
    console.log(`not a number: ${num}`);
    return false;
  } else {
    return true;
  }
}

function findLowest(values) {
  let lowestNumber = Infinity; // start with the highest possible number
  for (let val of values) {
    if (trueIfNum(val) && val < lowestNumber) {
      lowestNumber = val;
    }
  }
  return lowestNumber;
}
```

While this may seem like you are writing “more” lines of code, this is a much better design since it allows us to reuse our `trueIfNum` function in other parts of our code and it follows our principle of giving each function that we make a single responsibility.

As you start writing more complex functions, think about what “exactly” each function needs to do and if you find yourself doing more than just that, break your functions up into smaller functions! This idea of breaking up functions into smaller functions is commonly called **function decomposition**.
