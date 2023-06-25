---
sidebar_position: 2
---

# HTML Emmet

## Objectives

By the end of this chapter, you should be able to:

1. Use Emmet shortcuts to write HTML faster
2. Understand how to add text inside of elements with Emmet
3. Write nested statements to generate HTML quickly

## Introduction and Installation

Sometimes typing all of these HTML tags is quite a pain. There are a lot of characters to type, some of them are awkward to type (especially the opening and closing brackets), and you have to remember to add closing tags as well!

Thankfully, there is a nice tool to help us out called Emmet, which makes writing HTML a breeze. We will be using VS Code as our text editor so to get started, follow these steps:

1. Install VS Code. You can find it [here](https://code.visualstudio.com/)
2. Open VS Code. Create and save a file with a .html extension.

In your `.html` file – type in ! and press tab and this should appear:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

Don’t worry about trying to remember all of this HTML boilerplate; Emmet’s got you covered!

## Emmet Shortcuts

One of the nice things you can do with emmet is write HTML quickly! Get started by typing h1 and pressing tab. You should see `<h1></h1>` with your cursor in the middle!

If you want to nest tags inside of others you can use the `>` symbol. For example, typing `div>span` and pressing tab should produce `<div><span></span></div>`. Once again, your cursor should show up in the middle.

If you want to add text inside a tag you can use the `{}` braces and then press tab. Emmet converts `h1{Hello World}` to `<h1>Hello World</h1>`.

If you want to create multiple tags you can use the `*` operator.

`p>div{inner}*2` produces:

```html
<p>
  <div>inner</div>
  <div>inner</div>
</p>
```

You can also create sibling elements (remember, these are elements with the same direct parent) using the + operator.

`div+p>span` produces:

```html
<div></div>
<p>
  <span></span>
</p>
```

What about attributes? Emmet’s got you covered there as well! You can pass in an attribute name and value between square brackets.

`div[id="hello"]{Hi everybody!}>span{Yo}*3` produces

```html
<div id="hello">Hi everybody!
  <span>Yo</span>
  <span>Yo</span>
  <span>Yo</span>
</div>
```

There’s a lot more that Emmet can do for you as well. You can always check out the documentation for all of the features, but there’s also an [Emmet cheat sheet](http://docs.emmet.io/cheat-sheet/) which is a great reference when you’re first trying to pick up these shortcuts.

## Opening in browser

A handy extension for VS Code is [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser). If you install this, when working with HTML files you can right click on the file and select “Open in Default Browser”. This will open your page right in a browser tab! In order for this to work, you need to make sure your file is saved with the `.html` extension.

## Emmet Exercises

Write the one-line Emmet commands to produce the following HTML:

```html
<h1></h1>
```

```html
<div>
    <p>
        <section>
            <h1>Nice!</h1>
        </section>
    </p>
</div>
```

```html
<ul>outside
    <li>inside</li>
    <li>inside</li>
    <li>inside</li>
    <li>inside</li>
</ul>
```

```html
<p>sibling 1</p>
<div>sibling 2</div>
<p>parent
    <div>child
        <div>grandchild</div>
    </div>
</p>
```

When you’re ready, move on to Basic Tags
