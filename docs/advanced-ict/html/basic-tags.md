---
sidebar_position: 3
---

# Basic Tags

## Objectives

By the end of this chapter, you should be able to:

1. Use heading tags, paragraph tags and breaks to separate content
2. Create unordered and ordered lists
3. Compare and contrast divs and spans
4. Add anchor and image tags

## Headings, Paragraphs, Breaks and horizontal rows

In HTML we have quite a few ways to display and separate text. We have heading tags `<h1></h1>`, `<h2></h2>`, …, `<h6></h6>` (h1 tags are the largest, h6 are the smallest), paragraph tags `<p></p>`, line breaks `<br>` (notice that this tag does not close), and horizontal rows `<hr>` (this tag does not close as well). You’ll commonly see heading tags used for titles of pages and sections, while `p` tags are used for larger chunks of text.

## Lists in HTML

What if you don’t want to write paragraphs, but instead just want to display some simple lists? To create list items in HTML, we can either use ordered lists or unordered lists:

```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<ul>
  <li>Something Not Ordered</li>
  <li>Something Not Ordered</li>
  <li>Something Not Ordered</li>
</ul>
```
By default, ordered lists will be numbered starting from 1. You can change the numbering by setting the `type` attribute on the list. What do you think the ordering will look like for each of the following lists?

```html
<ol type="A">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<ol type="a">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<ol type="I">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>

<ol type="i">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
```

## Divs + Spans

In HTML there are two important tags which do not have much semantic significance, but are useful for laying out a page. These tags are `<div></div>` and `<span></span>`. Both can be used to format text, but they behave differently on the page. Try pasting the following into an HTML document, and take a look at how your browser renders the text:

```html
<div>I'm in a div.</div>
<div>I'm in a div as well.</div>
<span>I'm in a span.</span>
<span>I'm in a span as well.</span>
```

## Text modifications

To change the look of text on the page we can use tags like `<b></b>`, `<u></u>`, `<em></em>`, `<small></small>`, `<sup></sup>`, `<sub></sub>`, `<blockquote></blockquote>` and `<cite></cite>`. Take a look at what these do!

## Anchor tags

When we want to create hyperlinks to other pages, we use an anchor tag `<a></a>`. To specify what link we want to go to we use the href attribute. For example, to add an anchor tag linking to Google, we would write something like `<a href="http://www.google.com">Go To Google!</a>`

## Images

We can add images and specify their source using the `src` attribute. Another important attribute for image tags is the `alt` attribute which is what is displayed when the image fails to load and is very important for SEO purposes as well. It looks something like this: `<img src="http://lorempixel.com/200/200" alt="Some random 200x200 picture">`

## HTML Comments

Sometimes we want to explain certain parts of our HTML, but not have it display on the page. We can put these explanations inside of comments, which will show up if someone looks at the HTML file, but won’t be rendered on the page by a browser. Comments are helpful in all programming languages when we want to document our code. To add a comment in HTML, we simply include text inside of this syntax: “. Here’s an example:

```html
<!-- Tell the reader to keep up the good work -->
<h1>
  Well done! You made it to the end of this section! Now go and practice some HTML with the exercises below!
</h1>
```

If you render this code in the browser, you should see that the comment doesn’t show up.

When you’re ready, move on to HTML Basics Exercise


