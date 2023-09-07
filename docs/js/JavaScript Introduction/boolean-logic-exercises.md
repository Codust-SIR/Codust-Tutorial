---
sidebar_position: 5
---

# Boolean Logic Exercises

## Part I

Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

1. `2 == "2";`
2. `2 === 2;`
3. `10 % 3;`
4. `10 % 3 === 1;`
5. `true && false;`
6. `false || true;`
7. `true || false;`

## Part II

Answer the following questions about this code block:

### (a)

```js
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
```

1. What should the above code console.log?
2. Why do we not need to specify `if(isLearning === true)`? Why does `if(isLearning)` work on its own?

### (b)

```js
let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}

```

1. What should the above code console.log? `Why?`
2. What is the value of `firstvariable` when it is initialized?
3. Is the value of firstvariable a “truthy” value? `Why?`
4. Is the value of secondvariable a “truthy” value? `Why?`
5. Is the value of thirdvariable a “truthy” value? `Why?`

## Part III

1. Research Math.random here and write an if statement that console.log’s “Over 0.5” if Math.random returns a number greater than 0.5. Otherwise console.log “Under 0.5”.
2. What is a falsey value? List all the falsey values in JavaScript.

## Solutions

You can find the code [here](https://github.com/Codust-SIR/Codust-Tutorial/tree/main/solutions/boolean_logic_and_operators_exercise)

When you’re ready, move on to [Array Basics](./array-basics.md)
