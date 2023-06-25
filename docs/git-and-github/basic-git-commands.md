---
sidebar_position: 2
---

# Basic Git Commands

In this chapter, our objectives are to understand and utilize basic Git commands effectively. We will learn the purpose of commands like git add, git commit, and git status, and explore the different stages involved in adding and committing files. By adding files to the staging area and committing them, we can create snapshots of our code. We will also practice using git log to view commit history and learn how to navigate it. Through exercises, such as creating files, tracking changes, and performing commits, we will gain practical experience with Git's fundamental operations.

## Objectives

By the end of this chapter, you should be able to:

1. Explain what `git add` does
2. Explain what `git commit` does
3. Explain what `git status` does
4. Explain the different stages when adding and committing

## Adding and committing Files

In order to take a snapshot of your code (what we will call a “commit”), you first need to add your code from your working directory to what is called the “staging” area. Git wants you to be careful and not just take snapshots haphazardly, so it adds an intermediate area called the staging area where your code goes before it is “committed” (i.e. before a snapshot is taken). To see what stage your code is at, you can use the `git status` command.

If you have not added, removed, or modified any files, you will be notified that there is nothing to commit and your working directory is clean (nothing that needs to be staged or committed).

Let’s take a look at a quick example. Create a directory called `working_with_git` and `cd` into it. Once in this directory, initialize a git repository. If you then type `git status`, you’ll be told that there’s nothing to commit (in this case, because there are no files yet).

If you add a new file that has never been committed before, that file will be “untracked” by git. If you are modifying or deleting files that git has seen before, you will see “modified” or “deleted” when you examine `git status`.

Let’s see this in action. From your `working_with_git` directory, create a file called example.txt. If you run `git status` now, you should see that this new file is not tracked yet. So let’s track it!

To track this file, we can type `git add example.txt`. More commonly, you can also type `git add .`, which tells git to add everything that’s changed in the current directory to the staging area. You can also type `git add -A`; if you want to read more about the differences between the different ways to add, check out this Stack Overflow post.

Once you have added all the files you would like to the staging area, the next step is to commit with a message (you always need one). This is done using the git commit command with the -m flag. So once you have added, you can then type `git commit -m` "initial commit" and you will make your first commit. Try it out with your git repository inside of `working_with_git`.

To see what your commit history looks like, you can type `git log`. This will show you each commit and the commit message that has been attached to it. To close out of git log, you can press q.

To see your commits in a bit of a cleaner fashion, you can add the `--oneline` flag to the `git log` command. So if you type `git log --oneline` you will see each commit on one line, which may be easier for you to read.

You should practice going through the process of adding and committing several times. Try adding a second file, or adding some text inside of `example.txt`. Add the changes to the staging area, then commit!

## Exercise 1.0

It never hurts to get more practice when you’re first learning Git. Now that you know how to initialize a local git repository (using `git init`), add files to the staging area, and commit them, try to complete these steps:

1. Create a folder called `learn_git`. (Make sure you do this from a folder that isn’t a git repository!)
2. cd into the `learn_git` folder.
3. Create a file called `first.txt`.
4. Initialize an empty git repository.
5. Add `first.txt` to the staging area.
6. Commit with the message `“adding first.txt”`.
7. Check out your commit with `git log`.
8. Create another file called `second.txt`.
9. Add `second.txt` to the staging area.
10. Commit with the message `“adding second.txt”`.
11. Remove the `first.txt` file.
12. Add this change to the staging area.
13. Commit with the message `“removing first.txt”`.
14. Check out your commits using git log.

Well done! You have just walked through a very simple local git workflow. Even though these examples may seem relatively straightforward, this is almost identical to the way you work with git in a professional environment!

When you’re ready, move on to Configuring Git
