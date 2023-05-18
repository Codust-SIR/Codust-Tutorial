---
sidebar_position: 3
---

# Configuring Git

In this chapter, our objectives are to configure Git effectively. We will learn how to change global Git configuration settings, such as specifying the author name and email for commits. Additionally, we will explore the concept of Git aliases, which allow us to create shortcuts for frequently used Git commands. By customizing our Git configuration, we can enhance our workflow and improve efficiency. The global configuration settings are stored in the .gitconfig file in the home directory. Through practical examples, we will gain hands-on experience in configuring Git.

## Objectives

By the end of this chapter, you should be able to:

1. Change global git configuration settings
2. Make temporary and permanent aliases

## `.gitconfig` Settings

If you take a look at git log you may not see any information for the author and email. To change this (you will absolutely want this for GitHub so make sure the email you specify is the same one you used to sign up for GitHub), type:

```console
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL"
```


If you also find it annoying to press q every time in git log, you can change this as well

```console
git config --global --replace-all core.pager cat
```

These global configuration settings live in a file called .gitconfig which typically lives in your home directory. Try running `cat ~/.gitconfig` to see all of your settings!

## Git aliases

Many times you may be finding yourself typing `git` commands over and over. Things like `git add`, `git ini`t and `git status` are commands you will be typing many times, so it may be useful to make a shortcut, or `alias`, which you can type so that you do not need to type the entire command. To create a temporary alias, which will last as long as your terminal session is open, you can type:

```console
git config alias.KEYBOARD_SHORTCUT COMMAND
```

So if we wanted to type `git st` and have that be the same as `git status` we would type `git config alias.st status`. Now we can type git st and it should output the same as `git status`.

If you would like your `alias` to be a part of your global configuration, add the `--global` command after `git config`. For example, to alias `git i` to `git init` globally, you would type `git config --global alias.i init`.

When you’re ready, move on to Git Basics Exercises
