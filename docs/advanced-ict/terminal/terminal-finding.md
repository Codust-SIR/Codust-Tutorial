---
sidebar_position: 4
---

# Finding Files and Folders

Welcome to the "Finding Files and Folders" page, where you'll discover powerful techniques for locating specific files and folders within your system. This comprehensive guide focuses on two essential tools: grep and wildcards. Learn how to leverage the grep command to search for specific patterns or content within files, allowing you to quickly identify relevant information. Explore the versatility of wildcards, enabling you to perform advanced file and folder searches using pattern matching. By mastering these techniques, you'll be able to efficiently locate and retrieve the files and folders you need, saving time and streamlining your workflow. Get ready to unlock the power of finding files and folders with grep and wildcards!

## Objectives

By the end of this chapter, you should be able to:

1. compare and contrast `find` and `grep`
2. use `find` to search for files and folders
3. use grep to search for patterns in a string or text
4. define what a *regular expression* is

# find

One of the most useful terminal commands is the `find` command. When you know how to use it well, you can easily find files on your computer without using Spotlight, Alfred or any other GUI. Let’s get started by learning how the syntax works.

To find a specific file in your current directory, you can simply type `find` and the name of the file. (If you try to find a folder you will find all of the contents inside as well.) For example, if try typing the following command from your home directory:

```console
find Downloads
```

You should see a list of all your Downloads in the terminal.

To find something with a bit more complexity, use the following pattern

1. find
2.  a filepath
3. an expression (this is where you have the most flexibility)

Let’s `cd` into a folder called `views` and try this pattern to find anything with the name `first.txt` inside of the `views` folder:

```console
find . -name "first.txt"
```

Now this is nice if we know exactly the name of the file we are looking for, but many times we need to use wildcard characters including `*`, `?` and `[]`. The difference between these characters is as follows:

- `*` – any number of characters
- `?` – one character
- `[]` – any of the characters inside the brackets

Here are some more examples:

- find inside of the views folder (assume we are inside the views folder) anything that ends with `.html` => `find . -name "*.html"`
- find inside of the views folder (assume we are inside the views folder) anything that ends with a three letter file extension like `.txt` or` .css` => `find . -name "*.???"`
- find inside of the views folder (assume we are inside the views folder) anything that starts with the letter `f t` or `s` => `find . -name "[fts]*"`
- find inside of the views folder anything that has the text `main` somewhere in the filename (this could be the beginning as well) `find . -name "*main*"`

## grep

Another extremely useful tool for finding information that we’ve seen before is `grep`. While find is for files and folders, `grep` is excellent for searching for specific values in a string or in a text file. If you type `grep` on its own, it’s not that valuable because you need to make sure you pass a filename and text to it. You can also use `grep` with piping and `cat`.

We have already seen examples using `grep` with `cat` to find words like `cat people.txt | grep Elie` to find if the word `Elie` exists in the `people.txt` file. Let’s use the file below which we will call `names.txt` as an example:

```console
Lisa
Mark
Elie
Beth
Tim
Elizabeth
Tom
Matt
Liza
Janey
Jane
Shana
```

Let’s add a little more onto our knowledge of `grep` and introduce some flags.

`-i` for case insensitive search

`grep -i "elie" names.txt` => `Elie`

`-w` for full word search

```console
grep -i "beth" names.txt
```

```console
Beth
Elizabeth
```

`grep -iw "beth" names.txt` => `Beth`

- `-A` display a certain number of lines after

`grep -A 3 "Beth" names.txt`

```console
Beth
Tim
Elizabeth
Tom
```

- ``-B`` display a certain number of lines lines before

`grep -B 3 "Beth" names.txt`

```console
Lisa
Mark
Elie
Beth
```

- `-C` display a certain number of lines lines around

```console
Lisa
Mark
Elie
Beth
Tim
Elizabeth
Tom
```

- `-v` invert pattern (you can think of this as anything NOT what you are searching for)

`grep -v "Jane" names.txt`

```console
Lisa
Mark
Elie
Beth
Tim
Elizabeth
Tom
Matt
Liza
Shana
```

- `-c` count matches

`grep -c "Jane" names.txt` => `2`

- `-n` show line number

```console 
grep -n "Jane" names.txt
```

```console
10:Janey
11:Jane
```


There are many more flags with `grep`; you can google around for more or look at `grep --help` or `man grep`.

## Wildcards with grep

We previously saw wildcards with `find`, so how can we use them with `grep`? The key is to use regular expressions. Regular expressions are used to define patterns in a string of characters, which are then used to search a text for potential matches. Regular expressions are common and quite powerful: you can use them to check whether a user has submitted a properly formatted email address or phone number, for instance.

We will not go in depth with regular expressions here. There are a number of great [interactive references](http://regexr.com/) online. For now, but let’s just take a look at a couple examples of the syntax:

- `.` – matches any character

Example: How many names have a full name that is four characters long?

`grep -wc "...." names.txt` => `7`

- `*` – match zero or more of the preceding character or expression.

Example: How many names start with a capital T?

`grep -wc "T.*" names.txt` => `2`

- `[]` – any specific characters

Example: How many names start with a capital L, M, or E?

`grep -wc "[LME].*" names.txt` => `6`

- `[^]` – do not match

Example How many names do not start with a capital T?

`grep -wc "[^T].*" names.txt` => `10`