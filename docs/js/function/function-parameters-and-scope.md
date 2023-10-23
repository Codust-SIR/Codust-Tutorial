---
sidebar_position: 2
---

# Function Parameters and Scope

## Objectives

By the end of this chapter you should be able to:

- Define what a parameter is and why they are essential when writing functions
- Compare and contrast global and function scope
- Understand what happens when variables are declared without the `let` keyword

## Function Parameters

So far our functions have not been taking in any input; they simply are returning an output. So when would we want an input to our functions? Let’s imagine we want to calculate the sum of two numbers. If our numbers are 5 and 5, well, that’s easy.

```js
5 + 5; // 10
```

But what happens if we don’t know what our numbers are? How could we possibly do this? Better yet, what if we want to do 4 + 6, and 2 + 8 and 7 + 3…we would have to start writing a whole bunch of code that’s does basically the same function. This is a great example of when we want to add inputs and use a function. Inputs to a function are called _parameters_ or _arguments_.

So what does a function look like with parameters? Let’s write a function called `add` that takes in two parameters – `number1` and `number2` – and returns their sum.

```js
function add(number1, number2){
    return number1 + number2;
}
```

Now our add function will work for any two numbers that we want to add together. It’s important to note that the name of the parameters, `number1` and `number2`, are arbitrary names that we have chosen. If we change the names of the parameters to `a` and `b`, the function would do exactly the same thing:

```js
// This function will do the same thing as our previous function
function add(a, b){
    return a + b;
}
```

Now that we have defined a function with parameters, let’s see how we _invoke_ that function

```js
add(4, 6); // returns 10
add(2, 8); // returns 10
add(7, 1); // returns 8
```

In the example above, we invoked the add function with parameters. A parameter can be a literal number like we have above, or we could even use variables:

```js
let num1 = 5;
let num2 = 8;
add(num1, num2);  // returns 13
```

It is important to understand that the variable names we are using when we invoke the function are not related at all to the variable names we have defined _inside_ of the function. The values of `num1` and `num2` are being copied into the parameters `number1` and `number2` that are defined in the function.

## Function Scope

Now that we have an idea of what functions do, let’s talk about what happens when we define variables inside of functions. To do that, we first need to define what `scope` is.

MDN defines `scope` as “The context in which values and expressions are ‘visible,’ or can be referenced”. In JavaScript (before ES2015, which is where we will start), there are only 2 kinds of scope: _global scope_ and _function scope_.

The important takeaways here are

1. **all variables that are defined outside of functions (and inside of functions without the `let` keyword) are declared in the global scope, and**
2. **all variables defined inside of functions can only be accessed by those functions (and any inner functions)**.

Let’s see an example.

```js
let globalvariable = "I live in the global scope";

function makeNewScope(){
    let functionScopevariable = "I live in the scope of the makeNewScope function";
}

globalvariable; // "I live in the global scope";
makeNewScope(); // maybe this will define the functionScopevariable...

functionScopevariable; // This gives us an error! To be specific, a ReferenceError because the functionScopevariable is not defined.
```

What happens when we remove the `let` keyword?

```js
// Since this variable declaration is in the global scope, it will
// be a global variable with or without the let keyword.  It is a best
// practice to always use the let keyword though.
globalvariable = "I live in the global scope";

function makeNewScope(){
    // You do not want to do this in practice.  You should
    // always define your variables with the let keyword.
    functionScopevariable = "What happens now?";
}

globalvariable; // "I live in the global scope"
makeNewScope(); // now this will define the functionScopevariable!

// The value of the variable will be "What happens now?"
functionScopevariable;
```

If we omit the `let` keyword inside of a function, we actually declare that variable in the global scope. While this may seem like the way to go, this is not best practice. If we need to change some variable in a function, we should at least declare it in the global scope and assign it in a function so that our code is more readable.

```js
let globalvariable = "I live in the global scope";

// we are just declaring the variable now; its value will be set to undefined.
let globalvariableToBeChanged;

function makeNewScope() {
    // Here we are assigning the value "What happens now" to the
    // globalvariableToBeChanged variable.
    globalvariableToBeChanged = "Undefined no more!";
}

globalvariable; // "I live in the global scope"
makeNewScope(); // now this will assign a new value to the globalvariableToBeChanged!

// The value of globalvariableToBeChanged is "Undefined no more!"
globalvariableToBeChanged;
```

## You’ve seen scope already

If you remember back in the section on `if` and `else` statements, we mentioned that if you declare a variable inside of a block using `let` or `const`, you can not access it outside of that block. This is another kind of scope that is called `block` scope and when you use `let` or `const` inside of a block (`if/else` statements and `for` and `while` loops), that variable is only accessible inside of the block.

## Exercises

- Make a function for `add`, `subtract`, `multiply`, and `divide`. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

```js
add(2,2); // 4
subtract(2,2); // 0
multiply(2,2); // 4
divide(2,2); // 1
```

- Write a function called `sayHello` that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return “Hello Boss”, but if the parameter passed to the function is any other name, it should return the string “Hello” and the `name` parameter.

```js
// for this example, my first name is Tim
sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"
```

- Write a function called `average` which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain **only** numbers)

```js
average([1,2,3,4,5]); // 3
average([1,2,3,4,5,6]); // 3.5
average([10,20]); // 15
```

- Write a function called `createStudent`, which accepts two parameters both of which are strings. The function should return an object with the keys `firstName` and `lastName` and the values should be each of the arguments.

```js
createStudent("Elie", "Schoppik");
/*
{
    firstName: "Elie",
    lastName: "Schoppik"
}
*/
createStudent("Tim", "Garcia");
/*
{
    firstName: "Tim",
    lastName: "Garcia"
}
*/
```

- Using your `createStudent` function, create three students and save them each in a variable. Then create a variable called `students`, which is an array that will store your three students

```js
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];

// your students array should contain three objects each with the keys of firstName and lastName. If they do not - make sure you correctly implement the createStudent function from above!

```

- Write a function called `findStudentByFirstName`, which accepts one parameter, a string. This function should iterate through the `students` array you just made and if the parameter passed to the function is the same as one of the first name’s of the students, the function should return `true`. Otherwise it should return `false`. This function should be **case insensitive** so that you can search successfully regardless of capitalization

```js
findStudentByFirstName('elie') // true
findStudentByFirstName('Elie') // true
findStudentByFirstName('Janey') // false
findStudentByFirstName('Janey') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('MMMaaaTTTtttTTT') // false
```

- Write a function called `extractEveryThird` which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

```js
extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]); // ["third value"]
```

- Write a function called `countEvensAndOdds` which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys `oddCount` and `evenCount`.

```js
countEvensAndOdds([1,2,3,4]);
/*
 {
    oddCount:2,
    evenCount:2
 }
*/
countEvensAndOdds([1,2,3,4,5,6,7]);
/*
 {
    oddCount:4,
    evenCount:3
 }
*/
```

- In the following example, what will be printed in the console? Make sure you first try read this code **before** pasting it into the console.

```js
let mylet = "Hello from global";

function scopePractice() {
   let mylet = "Hello from function scope";
}

scopePractice();
console.log(mylet);

let tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);
```

### **Optional Bonus**

- Write a function called `onlyCapitalLetters` which accepts a string and returns a new string with only the capital letters passed to the string.

```js
onlyCapitalLetters("Amazing") // "A"
onlyCapitalLetters("nothing") // ""
onlyCapitalLetters("EVERYTHING") // "EVERYTHING"
```

### Solutions

**`add`**

```js
function add(num1,num2){
    return num1 + num2;
}
```

**`subtract`**

```js
function subtract(num1,num2){
    return num1 - num2;
}
```

**`multiply`**

```js
function multiply(num1,num2){
    return num1 * num2;
}
```

**`divide`**

```js
function divide(num1,num2){
    return num1 / num2;
}
```

**`sayHello`**

```js
let myFirstName = "Elie";
function sayHello(str){
    if(str === myFirstName){
        return "Hello Boss";
    }
    return "Hello " + str;
}
```

**`average`**

```js
function average(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total / arr.length;
}
```

**`createStudent`**

```js
function createStudent(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}
```

**`findStudentByFirstName`**

```js
// let's first create some students
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];

function findStudentByFirstName(name){
    let lowerCasedName = name.toLowerCase();
    for(let i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    }
    return false;
}
```

**`extractEveryThird`**

```js
function extractEveryThird(arr){
    let newArr = [];
    for(let i = 2; i < arr.length; i += 3){
        newArr.push(arr[i]);
    }
    return newArr;
}
```

**`countEvensAndOdds`**

```js
function countEvensAndOdds(arr){
    let countObj = {
        oddCount: 0,
        evenCount: 0
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            countObj.evenCount++;
        } else {
            countObj.oddCount++;
        }
    }
    return countObj;
}
```

**`scope practice`**

```js
// the first console.log(mylet) outputs "Hello from global"

// the second console.log(mylet) also outputs "Hello from global" (the trickyScopePractice function was not called!)
```

**`onlyCapitalLetters`**

```js
function onlyCapitalLetters(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64 ){
            newStr += str[i];
        }
    }
    return newStr;
}
```

When you’re ready, move on to Higher Order Functions
