---
sidebar_position: 1
---

# Navigating in Terminal

Welcome to "Navigating in Terminal," a comprehensive guide designed to help you master the art of command line navigation. This page covers the basics of Terminal, including an introduction to shells like Bash and ZSH. Discover how Terminal is structured and learn essential techniques for moving around directories. Gain insights into the difference between absolute and relative paths, and put your knowledge to the test with thought-provoking questions. Prepare to navigate with confidence and unlock the full potential of Terminal's command line interface.

## Objectives

By the end of this chapter, you should be able to:

1. Define what Terminal is and how it is structured
2. Navigate through and list files on your machine
3. Define the following terms: shell, terminal, directory, absolute path, relative path

## What is Terminal?

Terminal is an application that gives us a command line interface (or CLI) to interact with the computer. Everything you can do in Finder you can do in Terminal. Developers use Terminal because, more often than not, it is much faster to use Terminal than a graphical user interface (GUI) such as Finder. Although the Terminal interface can seem daunting at first, with a bit of practice, you’ll be up to speed in no time!

## What is a shell? Bash/ZSH

You will also hear the term “shell” when learning about Terminal so it is important to distinguish between these terms. From [Stack Overflow](http://superuser.com/questions/144666/what-is-the-difference-between-shell-console-and-terminal):

```console 
The shell is the program which actually processes commands and returns output. Most shells also manage foreground and background processes, command history and command line editing. These features (and many more) are standard in bash, the most common shell in modern linux systems. (We are using `zsh`).

A terminal refers to a wrapper program which runs a shell. Decades ago, this was a physical device consisting of little more than a monitor and keyboard. As unix/linux systems added better multiprocessing and windowing systems, this terminal concept was abstracted into software.
```

If you are using Windows, there is a great tool called [GitBash](https://gitforwindows.org/), which is a shell that you can install and use the same commands as if you were on Mac or Linux. This is not essential, but using it will enable you to more easily follow along with the material.

## How Terminal is Structured

In Terminal, all files and folders begin at the root directory. The root directory is noted by a /. Inside the root directory are essential files/folders that your machine needs, but we do not modify the files and folders in the root directory often. Inside of the root directory, we have a folder called `Users` which contains all of the user accounts on your computer. If you move into the directory for your user account, you will be in the `home` directory, which is denoted by `~`. For example, if your user name on the computer is WebDev, then your `home` directory would be `/Users/WebDev`. A synonym for the `/Users/WebDev` path is `~` when you are logged in as WebDev.

## Moving Around

The first thing you want to start to understand when using Terminal is how to navigate from folder to folder. One of the most common commands you will be using in Terminal is `cd` which is short for “change directory.” In order to change a directory, type cd followed by the directory or a path to the directory. If we want to move up a directory we use `cd ..` and if we want to move into a directory we specify the name of the directory we are moving into. For example, if you are in your home directory and type `cd Desktop`, you should move into your Desktop directory.

We just mentioned that you can type `cd` followed by a directory or path. But what is a path? Let’s learn some more vocabulary:

## Absolute Paths vs Relative Paths

A path is simply the way to reach a file or folder; it’s like an address for the file or folder you’re trying to reach. When we specify a path starting from the root directory `/`, we call that an absolute path. For example, if I am currently in the `~` home directory and I would like to change directories into my Desktop folder, I can do that in two of the following ways:

1. `cd Desktop` – relative to where I am currently
2. `cd /Users/WebDev/Desktop` – absolute, starting from the root (first `/`, then `Users`, then `WebDev`, then `Desktop`)

## Questions to Answer

- What is the difference between `/` and `~`? What do we call each of these directories?
- What command do we use to change directories?
- What is the difference between an absolute and relative path?

When you’re ready, move on to Working with Files and Folders