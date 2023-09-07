---
sidebar_position: 2
---

# Object Iteration

## Objectives

By the end of this chapter, you should be able to:

1. Understand how to iterate through an object using a `for...in` loop
2. Determine if a key exists in an object using an `if...in` statement

## Looping over objects

One of the most important ideas in programming is the idea of iteration, or looping. Let’s say we want to print out all of the values in an object. One way we can do this is by printing the values individually, one per line.

```js
let obj = {
    firstName: "Elie",
    lastName: "Schoppik",
    favoriteColor: "purple",
    job: "instructor",
    isDeveloper: true
};

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.favoriteColor);
console.log(obj.job);
console.log(obj.isDeveloper);
```

Although this will work, there are cases where we don’t know the keys that an object has. In that case, looping is a much better idea. Let’s take a look at how we would loop over the keys in an object.

To iterate over objects, we use a `for in` loop.


```js
let instructor = {
    name: "Matt",
    mathWizard: true,
    dogOwner: true
};

for(let singleKey in instructor){
    console.log(instructor[singleKey]);
}

// the loop will log:
// "Matt"
// true
// true
```

In the code example, `singleKey` is a variable that will be assigned to each key in the `instructor` object. To access the key’s value, we must use the bracket notation.

## if…in: Determining If a Key Exists in an Object

Sometimes, we just want to check and see if a certain key exists in an object. To do that we use a `if...in` statement. Here is an example

```js
let obj = {
    favoriteNumber: 33,
    favoriteColor: 'blue'
}

if ("favoriteNumber" in obj){
    console.log("The favoriteNumber key exists!");
}

// "The favoriteNumber key exists!"

if ("nothing" in obj){
    console.log("The nothing key exists!");
}
```

## A quick note on for…of with objects
You might remember from our previous notes that we can use the handy `for...of` to iterate over arrays and strings easily. While `for...of` is a great way to loop over strings and arrays it does not work on objects (you will get an error). If you need to iterate over an object, always use `for...in`.

## Exercises

1. Given the following object below, write code to print the value then the key to the console separated by
    ```js
    let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
    }

    // Output should be:
    // JavaScript => elie
    // jogging => matt
    // table building => janey
    // sailing => tim
    ```

2. Add a key for your name, and a value for your favorite hobby to the `namesAndHobbies` object.

3. Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

## Solutions

```js
let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for(let key in namesAndHobbies){
    console.log(`${namesAndHobbies[key]} => ${key}`)
}

namesAndHobbies.joel = "bridge"

if("joel" in namesAndHobbies){
    console.log("Joel", namesAndHobbies.joel)
}
```

When you’re ready, move on to Object Exercises