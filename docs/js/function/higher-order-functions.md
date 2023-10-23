---
sidebar_position: 3
---

# Higher Order Functions

## Objectives

By the end of this chapter, you should be able to:

- Define what a higher order function is
- Define what a callback function is
- Understand why higher order functions can help reduce code duplication

## A quick review of parameters and functions

So far we have seen functions that take in all kinds of parameters: strings, numbers, booleans, and even arrays and objects. We can also pass functions as parameters! We call functions that accept functions as parameters “higher order functions.” This is actually something special about JavaScript. Not all languages allow us to pass _other functions_ as parameters to functions!

This might sound a bit strange at first, so let’s check out an example. Let’s create a function called `sendMessage` that accepts a string and a function. The `sendMessage` function will return the result of the function being passed to it with the message as a parameter:

```js
// sendMessage is a higher order function as it accepts a parameter called fn.
// How do we know fn is a function? We can see the fn parameter is being
// invoked with ()
function sendMessage(message, fn) {
    return fn(message);
}

sendMessage("Hello World", console.log); // Hello World
sendMessage("Hello World", alert); // Hello World is alerted
sendMessage("What is your name?", prompt); // value from prompt is returned
sendMessage("Do you like JavaScript?", confirm); // true or false is returned
```

It is important to remember the difference between referencing a function here, and _invoking_ a function. In the following line of code, `sendMessage("Hello World", console.log);`, console.log is a function that is being referenced but not invoked. Nothing is actually written to the console until the function is invoked. When you pass a function in to a higher order function, you must always pass in the function _name_, not an _invocation_ of the function. You can tell the difference by looking at the end of the function name. Did you use parentheses to call the function? If so, you didn’t pass in the function itself, which is what the higher order function wants you to do.

But if we don’t invoke the function when we pass it in, where _does_ the function get invoked? It happens inside the logic of the higher order function itself! In the example above, for instance, it happens at the line `return fn(message);`. `fn` is the variable that will hold a reference to the `console.log` function. When `fn` is used with parenthesis, that is actually invoking the function. So on the line `return fn(message);` the function will be invoked, something will be written to the console and then the return from that function will be returned from the `sendMessage` function. `console.log` always returns undefined, therefore `fn`‘s invocation will return undefined which will then return undefined from `sendMessage`.

## Anonymous Functions As Parameters

We can even pass an anonymous function as a parameter!

```js
sendMessage("Hello World", function(message) {
    // message refers to the string "Hello World"
    console.log(message + " from a callback function!");
});  // Hello World from a callback function!
```

The previous example is equivalent to doing the following:

```js
let myFunction = function(message) {
    // message refers to the string "Hello World"
    console.log(message + " from a callback function!");
};

sendMessage("Hello World", myFunction);
```

However, when programming in JavaScript, you will see anonymous functions being passed as parameters very often, so it’s good to get used to it now.

## Why Higher Order Functions?

One advantage of higher order functions is code reuse. In our previous examples we would have had to do a lot of work to get the same code. Higher order functions allow us to avoid writing seperate functions like this:

```js
function sendMessageWithConsoleLog(message) {
    return console.log(message);
}

function sendMessageWithAlert(message) {
    return alert(message);
}

function promptWithMessage(message) {
    return prompt(message);
}

function confirmWithMessage(message) {
    return confirm(message);
}

function sendMessageWithFromCallback(message) { 
    return console.log(message + " from a callback function!");
}
```

Instead of writing five different functions, we can just write one and pass another function to it! We call a function that is passed as an argument to a higher order function a **callback**. The concept of callbacks and higher order functions can be a little tricky to understand at first, so let’s take a look at some more examples.

## Callback Functions

To reiterate, a _callback function_ is the function that is being passed to a higher order function and that callback function will be invoked within the higher order function. In our `sendMessage` example, `sendMessage` is the higher order function and `fn` is the callback function.

Now, let’s see another use case for higher order functions.

```js
function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function math(a,b,callback) {
    return callback(a,b);
}

math(1, 4, add); // returns 5
math(5, 5, subtract); // returns 0

/*
as we start making additional functions that perform operations on
two numbers we can pass them to the math function. So if we make a
divide or multiply function we can call all of them just using the
math function.
*/
```

Let’s take a look at another example – say we want to build a function that accepts an array and returns a new array with only even numbers. We’ll call this function  `onlyEvens`

```js
function onlyEvens(numbers) {
  let evens = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

```

Easy enough! Now, our boss comes back and says, “let’s make this return only odd numbers”. So what can we do? One option is to write another function that looks like this

```js
function onlyOdds(numbers) {
  let odds = [];
  for (let num of numbers) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }
  return odds;
}

```

Our boss might be happy for the moment, but this is not going to work once we start adding additional conditions. What happens when we want numbers divisible by three? Or numbers that are odd and also prime numbers? Instead of writing a different function for each condition, we’ll add an additional parameter to this function which is a function! We’re going to run our callback function for each value in the array and if the result of that function is truth-y, we will push that value into the array.  **This does assume that the person who calls our function understands that the callback has to return true. Instead of us as the writer of the function handling what the condition should be, we are letting the caller of the function determine what the condition should be.**

This might feel a bit strange at first, so let’s first explore the syntax.

```js
function filter(numbers, callback) {
  let filteredValues = [];
  for (let num of numbers) {
    let result = callback(num); // we're going to run a function for each value in the array
    // we're then going to see if the result of the callback function is truthy
    if (result) {
      // if so, take the value we are iterating over and push it into the filteredValues array
      filteredValues.push(num);
    }
  }
  return filteredValues;
}

```

So how do we use this function? Let’s see some examples:

```js
let numbers = [1,2,3,4,5];

filter(numbers, function (num) {
  console.log(num); // this will refer to each number -> (1,2,3,4,5)
  return num < 3;
}); // returns [1,2]

filter(numbers, function (num) {
  return num % 2 === 0;
}); // returns [2,4]
```

Copy and paste this code, put it in the Chrome Console and play around with some different examples and conditions!

## Practice

Let’s try to write a function called `each` which accepts two parameters: an array and a callback function. The `each` function should loop over the array passed to it and run the callback function on each element in it.

```js
// this function should accept 2 parameters, put them in!
function each(){
    // put your code inside here!
}


each([1,2,3,4], function(val){
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8
```

Here is a solution to the each function:

```js
function each(array, fn){
    for(let i=0; i< array.length; i++){
        fn(array[i]);
    }
}
```

In the example, `each` is the higher order function and `fn` is the callback. Inside of `each`, `fn` is being _invoked_. In fact, in both sample inputs, `fn` will be invoked 4 times because there are 4 items in the array that is being passed in and `each` loops through each item in the array.

## Exercises

- Write a function called `map` which accepts two parameters: an array and a callback. The `map` function should return a new array with the result of each value being passed to the callback function. Here’s an example:

```js
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]
```

- Write a function called `reject` which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:

```js
reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]
```
