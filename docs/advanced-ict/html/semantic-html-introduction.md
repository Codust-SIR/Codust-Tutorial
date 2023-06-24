---
sidebar_position: 5
---

# Semantic HTML Introduction

## Objectives

By the end of this chapter, you should be able to:

1. Define what semantic HTML is and what tags can be used to create it

## Semantic HTML

When HTML5 was released, a number of new elements came along with it. These elements have given rise to a term called Semantic HTML, which refers to the practice of using these new elements to structure your HTML in such a way that the element name is descriptive of the content inside of it. Prior to HTML5 you may have seen much of the content of an HTML page inside of `div`, `span`, and `p` tags, but HTML5 allows us to be a little more precise in pairing our content with our elements. For more on Semantic HTML, check out [this article](https://en.wikipedia.org/wiki/Semantic_HTML).

Semantic HTML tags don’t alter your page in any specific way, but make more sense to the developer and reader of the HTML as to what they do. Here are some semantic HTML5 tags (there are many more):

1. `header` – used to display the header information on a page
2. `nav` – used to display a navbar for navigating a page
3. `section` – used to display a section of the page
4. `article` – used to display independent, self-contained content.
5. `aside` – used to display content aside from main content (on the side)
6. `footer` – used to display the footer information on a page

For more on HTML5 (including some of the new semantic elements), check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5).

Here’s a quick example illustrating what Semantic HTML looks like. Take a look at this HTML document:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Non-semantic HTML</title>
</head>
<body>
  <div>
    <h1>My super cool blog</h1>
  </div>
  <div>
    <ul>
      <li>About Me</li>
      <li>Contact</li>
      <li>Search</li>
      <li>Store</li>
    </ul>
  </div>
  <div>
    <div>
      <h2>Important Title</h2>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam maiores? Ex, eum! Ducimus ut velit ad ullam quisquam fugit vitae harum eligendi, qui necessitatibus, laudantium reprehenderit nihil, sint aperiam!</p>
    <p>Recusandae fugiat, eum, modi odio, quis quibusdam a maxime impedit accusamus ipsum nulla maiores commodi voluptas saepe nisi laudantium doloremque perferendis suscipit! Ullam consequuntur veritatis, atque quidem reiciendis facilis voluptatum!</p>
    <p>Animi sit, facere, molestiae vel consequuntur suscipit alias dolorem adipisci hic non id sint illum, doloremque iure ut assumenda! Provident neque asperiores, vitae ab. Ducimus recusandae sed rerum doloribus consequatur!</p>
  </div>
  <div>
    <div>
      <h2>Super Important Title</h2>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur ab, aliquid facilis omnis praesentium recusandae. Aliquid itaque omnis nam harum sit! Explicabo eum consectetur aut repellendus, nostrum hic iste.</p>
    <p>Illo repellat quia, minima reiciendis. Laudantium, perferendis! Laudantium consectetur impedit at nobis error aspernatur repellendus quaerat, quas repudiandae maxime. Architecto consequatur, autem natus quaerat illo accusamus! Voluptatem accusantium pariatur perspiciatis!</p>
    <p>Vitae corrupti, tempora itaque ab est facere eius optio fugiat, ex possimus beatae nulla esse molestias suscipit quisquam nostrum sunt quod mollitia. Mollitia reiciendis, aspernatur. Quas, eligendi temporibus earum debitis?</p>
  </div>
  <div>
    <div>
      <h4>Recent Posts</h4>
    </div>
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
      <li>Post 3</li>
      <li>Post 4</li>
    </ul>
  </div>
  <div>
    <p>Copright MyAwesomeBlog.net. All Rights Reserved. Don't steal my stuff!</p>
  </div>
</body>
</html>
```

There’s nothing too complex going on here, but with so many divs floating around it can be hard to visualize the structure of this document.

Here’s the same file, but refactored to use some HTML5 elements:

```html
<form action="#">
    <div>
        <label for="username">Username</label>
        <input type="text" id="username">
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password">
    </div>
    <div>
        <label>Favorite Instructor</label>
        <label for="elie">Elie</label>
        <input type="radio" name="favorite_instructor" id="elie">
        <label for="matt">Matt</label>
        <input type="radio" name="favorite_instructor" id="matt">
        <label for="tim">Tim</label>
        <input type="radio" name="favorite_instructor" id="tim">
    </div>
    <div>
        <label>Favorite Programming Language(s)</label>
        <label for="ruby">Ruby</label>
        <input type="checkbox" name="favorite_language" value="Ruby" id="ruby">
        <label for="javascript">JavaScript</label>
        <input type="checkbox" name="favorite_language" value="JavaScript" id="javascript">
        <label for="python">Python</label>
        <input type="checkbox" name="favorite_language" value="Python" id="python">
        <label for="go">Go</label>
        <input type="checkbox" name="favorite_language" value="Go" id="go">
    </div>
    <div>
        <label>Additional Comments</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div>
        <input type="submit" value="">
    </div>
</form>
```

In this particular case, we’ve been able to eliminate all the divs, and replace them with elements that have more semantic meaning regarding the layout of the page and the purpose of the content. We can look at this document and see where the footer his, what the header for each area is, and so on. That’s the beauty of semantic HTML!

When you’re ready, move on to Tables and Forms
