---
sidebar_position: 3
---

# Common Rules

## Objectives

By the end of this chapter, you should be able to:

1. Use common typography rules to add styling
2. Include a custom Google font

## CSS rules

### Color

So far we have seen a few basic properties, such as `background-color`, which allows us to set the background color of an element. The value we assign to this property can either be a named color (`blue`, `green`, `red` etc.), a hex code (# followed by six values from 0 to F), an rgb value (red, green, blue), or an hsl value(hue, saturation, lightness) value. If you don’t know what these are, you can mess around with them [here](http://htmlcolorcodes.com/color-picker/). These same values can be assigned to the `color` property, which sets the font color on an element.

### Typography

If we want to change the text on our page, we commonly use some of these rules:

- `font-size` – select the size of your font (we will discuss other units of measurement in the next unit)
- `text-align` – align the position of the text
- `font-family` – choose what kind of font you want to use
- `letter-spacing` – add positive or negative (less) space between characters
- `text-transform` – capitalize/uppercase/lowercase your text
- `line-height` – choose the amount of height between lines
- `font-variant` – useful for displaying a small-caps font
- `text-shadow` – add a shadow to your text
- `color` – select the color of the text

Here’s an example of how you could set values for each of these properties:

```css
.some_text {
  color: #bdbfef;
  font-size: 12px;
  text-align: center;
  font-family: helvetica, sans-serif;
  letter-spacing: -1px;
  text-transform: lowercase;
  text-shadow: 0 2px 0 black;
  /* first value is horizontal/x offset */
  /* second value is vertical/y offset */
  /* third value is how much blur */
  /* fourth value is the color */
  /* you can even have multiple shadows separated by a comma! */
  line-height: 1.4;
  font-variant: small-caps;
}
```

There are hundreds of CSS properties, much more than we can cover here. You’ll pick up more properties as you start working on your projects. If you’d like to see an exhaustive reference of CSS properties and other keywords, MDN has [got you covered](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

Using a custom google font
You can head over to <https://www.google.com/fonts> and select some fonts, then click “Use” at the bottom. It will then give you a tag as well as the CSS necessary. Here is an example using Open Sans. Create an HTML file, and inside of the `head` add the following `link`:

```html
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans"
  rel="stylesheet"
  type="text/css"
/>
```

Then, inside of your style sheet, add the following rule:

```css
body {
  font-family: "Open Sans", sans-serif;
}
```

If you put some text content in your HTML, you should see that the font has changed to Open Sans!

When you’re ready, move on to Box Model
