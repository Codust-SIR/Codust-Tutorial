---
sidebar_position: 1
---

# Object Basics

## Objectives

By the end of this chapter, you should be able to:

1. Compare and contrast objects and arrays, and explain good use cases for each one
2. Iterate over arrays and objects
3. Add and remove properties/elements from objects

## Introduction

In JavaScript, along with primitives we have objects. Objects allow you to map keys to values. For example, the key `'name'` could map to `"Tim"`. Or the key `'isInstructor'` could map to the boolean `true`. These are example of key value mappings. When you want to know the name property of the object, you look it up and get the value back, which is `"Tim"` in this case. Here is an example of declaring an object:

```js
let firstObj = {
    firstName: "Tim",
    lastName: "Garcia",
    isInstructor: true
};
```

In this object, we have keys of `"firstName"`, `"lastName"`, and `"isInstructor"` and values of `"Tim"`, `"Garcia"`, and `true` respectively.

Notice the format of an object. It has a key, followed by a colon, followed by a value, then a comma. But the last key and value in the object omits the comma. Forgetting the comma is an error that you may run into from time to time. Try putting the following in your console. You should see an error, `Uncaught SyntaxError: Unexpected identifier`, because there is no comma after the `firstName` key and value:

```js
let firstObj = {
    firstName: "Tim"
    lastName: "Garcia",
    isInstructor: true
};
```

After we have created an object, the first thing we may want to do with it is access the values using the object’s keys.

## Accessing Object Values

To access values in an object, we could use the dot notation:

```js
firstObj.firstName;       // returns "Tim"
firstObj.lastName;        // returns "Garcia"
firstObj.isInstructor;    // returns true
firstObj.keyDoesntExist;  // returns undefined
```

We will learn the difference between these two later on.

Objects are one of the built-in types in JavaScript and consist of unordered key-value pairs. Let’s look at another object:

```js
let tim = {
    name: "Tim",
    catOwner: true,
    boatOwner: true
};
```

In the object above we have a set of keys (`name`, `catOwner`, `boatOwner`) and values (`"Tim"`, `true` and `true`).

## Bracket Notation vs Dot Notation

If we want to access values in the object we can do it two different ways: either using brackets (`[]`) or dot notation. Let’s take a look at both.

```js
let obj = {
    firstName: "Elie",
    lastName: "Schoppik",
    favoriteColor: "purple",
    job: "instructor",
    isDeveloper: true
};

obj.firstName; // Elie
obj["lastName"]; // Schoppik
obj[favoriteColor]; // This gives us an error, because there is no variable called "favoriteColor"!
```

So which one should we use? Well, best practice is to use the dot notation *if you can use it*. But there are cases in which you’ll need to use bracket notation. Let’s take a look at this example:

```js
let obj = {};
let person = "Tom";

obj[person] = "This is a person";
obj[1+1+1] = "Three";

obj;


/*
obj now should look like this:
{
    Tom: "This is a person",
    3: "Three"
}
*/

obj.3;// Syntax Error! Can't use the dot notation
obj[3]; // "Three" - we NEED to use the bracket notation
obj[person]; // "This is a person"
obj["Tom"]; // "This is a person"
obj.person; // undefined
```

In short, use the bracket notation when you need to evaluate some expression or pass in a variable to get the name of the key, but when you know the name of the key and it is not a variable or expression, always use the dot notation.

## Keys Are Always Strings in JavaScript

It is important to note that the type of a key in JavaScript is always a string. Let’s say we create the following object of some employee id to the employee name:

```js
let idToName = {
    754: "Tim",
    843: "Matt",
    921: "Janey",
    192: "Elie"
};
```

Now we want to access the key `754` to get the value `"Tim"`. We cannot use the dot notation for this:

```js
idToName.754;  // causes an error
```

Instead we need to use the bracket notation. And the value inside the bracket notation is a string:

```js
idToName["754"];  // returns "Tim"
```

So even though we did not quote the key name when we created the `idToName` object, JavaScript automatically converts the number into a string. **Every key in a JavaScript object is a string!**

### Adding to objects

To add properties or functions (which are sometimes called methods) to our objects, we can use the `.` or `[]` operator (as before, the dot notation is preferred, but not always possible).

```js
let obj = {
    name: "Jon Snow",
    watchMember: true
};

obj.gameOfThrones = "awesome";
obj;
/*
{
    name: "Jon Snow",
    watchMember: true,
    gameOfThrones: "awesome"
}
*/
```

### Removing from objects

We can remove a key from an object by using the `delete` keyword. Here’s an example:

```js
let obj = {
    name: "Elie",
    job: "Instructor"
};

delete obj.job; // returns true

obj;
/*
{
    name: "Elie"
}
*/
```

## Exercises

1. Create an object that has your firstName, lastName, and occupation as keys.
2. Access each value from your object using both dot notation and bracket notation.
3. Add a key for hobby to your object. Remove the key and value for occupation.
4. What is the difference between dot notation and bracket notation?

When you’re ready, move on to Object Iteration