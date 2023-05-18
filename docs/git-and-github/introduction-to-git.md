---
sidebar_position: 1
---

# Introduction to Git

In this chapter, we aim to define a Version Control System (VCS), understand Git's purpose and functionality, learn to initialize a Git repository with 'git init', grasp the concept of snapshots for tracking code changes, appreciate Git's collaborative benefits, and familiarize ourselves with the '.git' folder. Git is an open-source distributed version control system that enables developers to track code versions over time. It simplifies collaboration and provides a safety net through snapshots. By installing Git, you can initialize a repository with 'git init', creating the essential '.git' folder. If needed, the repository can be removed with 'rm -rf .git'. These foundations set the stage for exploring Basic Git Commands.

## Objectives

By the end of this chapter, you should be able to:

1. Define what a VCS is
2. Initialize an empty git repository, and explain what the command git init does
3. Remove a git repository

## What is Git?
If you google “what is git” you will probably see the definition for “an unpleasant or contemptible person.” Thankfully, Git is much better than that. According to the [Git documentation](https://git-scm.com/):

   `Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.`

In plain English, Git is a tool that allows developers to track versions of their code over time. It does this by creating “snapshots” of the current state of the code base whenever you tell it to. Put simply, Git is essential when collaborating with other developers to ensure that previous “snapshots” of the code can be revisited if necessary. For example, if you are working on the code and accidentally break the app, it’s much easier if you’re using Git and can simply roll back to a previous version of the code. Otherwise, you’d have to remember all the changes you made, and manually undo them; for an application of even moderate complexity, this simply isn’t feasible.

When you’re learning about tools like Git, you’ll often see the acronym VCS. This stands for **V**ersion **C**ontrol **S**ystem. Git is a VCS because it lets you create different versions of your code and easily swap back and forth between different versions. While Git is a hugely popular VCS, it’s not the only one. Subversion is another example (a more complete list can be found [here](https://en.wikipedia.org/wiki/List_of_version_control_software)).

## Getting started with Git

Before we can get started with anything Git related, we need to make sure you have Git installed. In your terminal, type in `git --version`; if you do not see an error, you are good to go. If you are seeing any errors, (e.g. command not found: git), you may need to install Git on your computer.

You can easily download git here [Download Git](https://git-scm.com/download)

Once you have Git installed, you need to “initialize” a repository with Git before you can start using it. Create a folder called `learn_git` and `cd` into that folder.

Once you are in this folder, run the command `git init` and you will see something like `Initialized empty Git repository in /Users/YOUR_USERNAME/Desktop/learn_git/.git/`. What does this mean? What do you think just happened? If you type in ls you will see that it looks like nothing is there… but how can you view hidden files?

After typing in `ls -a` you will see a folder called `.git`. This is what the `git init command` does: it creates a `.git` folder for you. Fortunately, you will almost never have to go into that folder, but without it you will not be able to use any of the git commands in the next chapter. So remember, the first step to any project with Git, is making sure you have a `.git` folder.

If you accidentally initialize a repository in the wrong directory (you don’t want to make your Desktop or Home folder a git repository), you can just remove the `.git` folder using `rm -rf .git`.

When you’re ready, move on to [Basic Git Commands](/docs/tutorial-basics/basic-git-commands.md)

