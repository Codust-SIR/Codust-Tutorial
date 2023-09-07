---
sidebar_position: 1
---

# Function Basics

## Objectives

By the end of this chapter, you should be able to:

1. Define what a function is and how they are essential in programming
2. Create functions using function declarations or function expressions
3. Explain how scope works in JavaScript and compare function, block and global scope
4. Understand what hoisting is and how the JavaScript compiler works when analyzing variables and functions

## What is a function

A function is a repeatable process of procedure. A real world analogy of a function is the brew button on a coffee machine. The coffee machine has inputs (hot water, and coffee grounds), and outputs (hot coffee). When you press the button to brew a pot of coffee, you are starting a process that should return an expected output to you. The same thing is true in programming. A function takes a set of variables as inputs and returns a value as an output.

We have already seen many functions in action. For example, in the array chapter, we learned about `push` and `pop`. These are both functions that operate on an array. Consider the following example:

```js
let arr = [5,4,3,2,1];
let poppedVal = arr.pop();
console.log(arr);
console.log(poppedVal);
```

In the example, we are using the `pop` function. It takes no inputs, and it returns a value which is the last item in the array that has been removed from the array. When you run the code in your console, you’ll see the array is now `[5,4,3,2]` and the value of `poppedVal` is `1`.

## Declaring Functions

So far we have only used functions, but to be a knowledgeable JavaScript programmer, we need to learn to write our own functions as well. There are multiple ways to write functions in JavaScript. We will cover the differences in more detail later. For now, let’s start with one way: a function declaration.

In general, we declare a function in the following way:

```js
function anyNameYouWantForTheFunction() {
    // As many lines of code as you want
}
```

In general, this type of function syntax consists of four parts:

1. The `function` keyword,
1. The name of the function (in this case, `anyNameYouWantForTheFunction`),
1. Any parameters for the function (we’ll ignore this for now, but parameters will go inside of the parentheses after the function name),
1. The function body (the code for the function, which lives inside of the curly braces).

It might seem silly, but it would be good to practice typing this syntax out a few times. You’ll be writing functions constantly in JavaScript, so the syntax is something you should commit to muscle memory. Try typing these out:

```js
function myFunction() {
}

function myOtherFunction() {
}

function yetAnotherFunction() {
}

function okayIGetItThisIsTheSyntaxForFunctions() {
}
```

The functions above aren’t very interesting, because none of them have a function body. Let’s look at an example of a function that actually does something:

```js
// this is called the function definition - we are ONLY defining the function here
function firstFunction(){
    console.log("I just wrote my first function!");
}
```

Now we have declared a function called `firstFunction`, but we have not used the function yet. To execute the code within the function, we must invoke the function. A function is *invoked* by adding a `()` after the name of the function:

```js
// to call or invoke the function
firstFunction();
```

If you run this code in the Chrome console, you will see the output is “I just wrote my first function” and on the next line, `undefined`. Next, we’ll learn where the `undefined` is coming from.

## Returning Values From Functions

In JavaScript, if we do not specifically tell the function to return something, it will return undefined when it is finished executing. So how do we tell a function to return something? We use the return keyword!

```js
// this is called the function definition -
// we are ONLY defining the function here
function firstFunction(){
    return "I just wrote my first function!";
}

// to call or invoke the function
firstFunction(); // now we don't see undefined anymore!
```

Now our function is returning “I just wrote my first function”. To capture that string, let’s use a variable:

```js
let returnValue = firstFunction();
console.log(returnValue);
```

Now in the console, you should see “I just wrote my first function”. That is the value that was returned from our function call and that is now saved in the `returnValue` variable.

Remember, the `return` keyword can ONLY be used inside of a function. let’s take a look at another example.

```js
function secondFunction(){
    return "Hello";
    return "Goodbye";
}

secondFunction(); // "Hello"
```

We see from this example that the **return** keyword can only be executed once in a function. Once it is executed, the function is complete and no other lines of code will be executed.

## Conditional Logic With Return Statements

Now that we have an idea of how functions work, let’s explore a previous topic and see how we can refactor some boolean logic. Let’s imagine we want to write a function that returns true if a random number is over .5 – otherwise the function should return false. Here is one way we can write it

```js
function isOverPointFive(){
    if (Math.random() > .5){
        return true;
    } else {
        return false;
    }
}
```

This code will work just fine, but remember, the return keyword exits from a function. So if the random number is greater than .5 we will exit the function early and never reach the else condition. So we don’t even need the “else” condition! We can refactor our code to look like this:

```js
function isOverPointFive(){
    if(Math.random() > .5){
        return true;
    }
    return false;
}
```

Much better! If the number is greater than .5, return true and exit the function. Otherwise just return false.

Finally if we wanted to be really fancy – we could use a ternary operator!

```js
function isOverPointFive(){
    return Math.random() > .5 ? true : false;
}
```

## Exercises

1. Write a function called `myName` that logs your full name. Save your full name to a variable inside of the function body, then use `console.log` to print your name to the console.

```js
myName(); // if your full name was Elie Schoppik this function would return "Elie Schoppik"
```

2. Create an array called `favoriteFoods` which contains the strings “pizza” and “ice cream”.
3. Write a function called `randomFood`. The function should use `Math.random` to randomly choose a favorite food in your `favoriteFoods` array to return. For example, your function will return either pizza or ice cream, depending on what you get back from `Math.random`.

```js
randomFood(); // either returns "pizza" or "ice cream"
```

4. Create a variable called `numbers` which is an array that contains the numbers 1 through 10.
5. Write a function called `displayOddNumbers` which iterates over the `numbers` array and console.logs out all of the numbers that are odd. Here is what that might look like:

```js
displayOddNumbers();

// 1
// 3
// 5
// 7
// 9
```

6. Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

```js
returnFirstOddNumber();

// 1
```

7. Create a function called `returnFirstHalf` which returns the first half of the `numbers` array

```js
returnFirstHalf();

// [1,2,3,4,5]
```

8. Create a function called `returnSecondHalf` which returns the second half of the `numbers` array

```js
returnSecondHalf();

// [6,7,8,9,10]
```

## Solutions

### myName

```js
function myName(){
    let myName = 'Elie Schoppik';
    console.log(myName);
}
```

### randomFood

```js
let favoriteFoods = ['pizza', 'ice cream'];
function randomFood(){
    // lets find a random number between 0 and 1 and multiply it by the length of the array. This will give us a number between 0 and 2. If we always round down, we will get either 0 or 1, so we can use Math.floor to round down.
    let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[randomIndex]);
}
```

### displayOddNumbers

```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
    for(let i = 0; i < numbers.length; i++){
        // if the value we are at in the array is not divisible by 2 (it's an odd number)
        if(numbers[i] % 2 !== 0){
            // print out that value!
            console.log(numbers[i]);
        }
    }
}
```

### displayEvenNumbers

```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
function displayEvenNumbers(){
    for(let i = 0; i < numbers.length; i++){
        // if the value we are at in the array is divisible by 2 (it's an even number)
        if(numbers[i] % 2 === 0){
            // print out that value!
            console.log(numbers[i]);
        }
    }
}
```

### returnFirstOddNumber

```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstOddNumber(){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            // print out that value, using return gets us out of the function!
            return numbers[i];
        }
    }
}
```

### returnFirstEvenNumber

```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstEvenNumber(){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            // print out that value!
            return numbers[i];
        }
    }
}
```

### returnFirstHalf

```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstHalf(){
    return numbers.slice(0,numbers.length/2);
}
```

### returnSecondHalf

```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
function returnSecondHalf(){
    return numbers.slice(numbers.length/2);
}
```