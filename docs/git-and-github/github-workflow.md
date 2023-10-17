---
sidebar_position: 8
---

# GitHub Workflow

## Objectives

By the end of this chapter, you should be able to:

1. Fork a repository on GitHub
2. Clone a remote repository
3. Issue a pull request
4. Explain what an upstream is, and set up an upstream repository

## Fork

Now that we know how to push code up to GitHub, let’s discuss a GitHub specific concept: forking.

When working with others, you may sometimes not be able to push directly to that repository (imagine if we could just push our code to some of the world’s largest open source projects…that would be pretty crazy). So what we need to do is make a copy of someone else’s remote repository and make sure it is under our username so that we can push code to it.

To practice forking – head over [here](https://github.com/Codust-SIR/learn-fork) and on the top right you will see a button with the text Fork. Click on this button and you will have a copy of the repository under your name!

Remember, the “forking” is a **GitHub** concept, and not something directly related to Git. It is simply the way to make your own copy of a repository on your account where you have permission to push your code to GitHub.

## Clone

Once you have forked the repository, you need to take that repository (the remote one you just made) and download the code on your local computer (make a local repository). Instead of making a folder and going through the whole `git init` process and adding a remote, you can use the `git clone` command, which accepts a link to the repository and downloads it into a folder (with git and a remote already set up!)

Head over to your forked copy of the repository and you will see a button that is either set to `HTTPS` or `SSH`. When you click on this button it should display “Choose a clone URL” – **Make sure that you is using SSH.** Selecting `HTTPS` will force you to enter your credentials whenever you push or pull, which is an entirely avoidable problem since we’ve set up SSH! You can copy the link by either selecting and copying or by clicking the icon next to the link (when you hover over it – it should say “copy to clipboard”).

In the terminal (you can start in your home directory) run the command `git clone PASTE_URL_HERE`

Now that you have the repository locally, add a new file or make some changes, add and commit them and run `git push origin master` and you should see your updated changes in your forked copy.

## Pull Request

Now let’s say you are collaborating with the `Codedust-SIR` organization (where you forked the repository from) and you would like to merge your changes with the original repo that you forked (remember you can’t just push up to it, because you do not have permission to do that). You can issue a pull request and someone who has permission can either merge or reject it.

To do this, click on the “New pull request button” and then click on the “Create pull request”. You should then be able to go to the original repository and see your pull request or “PR”.

## Retrieving Code from Github + Setting Upstream

Now what happens if someone else makes a pull request that gets merged into `Codedust-SIR`'s original repository? How do we get that code to our computer? Do we have to fork and clone all over again? Nope! Instead we will use a different and easier workflow.

1. Make sure everything is committed first locally
2. Pull the latest code from GitHub (from a new remote which we will call upstream)
3. Fix merge conflicts if there are any
4. Push the code back up to our origin repository

So what is going on in step 2? What is this upstream thing we are talking about? Well, we have our remote called origin which corresponds to the forked repository, but if a change has been made to the original repository which we forked, origin won’t automatically update with those changes! To get the changes, we’ll need to go back to the original repository that we forked from.

Even though we can’t push to this original repository repository, we can pull to get the latest changes. But in order to do that we need to tell Git what remote repository to pull the code from. So let’s add a new remote called upstream:

```console
git remote add upstream git@github.com:Codust-SIR/learn-fork.git
```

Notice that the url points to `Codedust-SIR` repository, not any repository associated with our GitHub account. Once the upstream is set, we can run git pull upstream master to get the latest code from the original repo, and then we can run git push origin master to update our forked copy with the latest code.

The git pull command is actually a combination of two commands git fetch + git merge. If you notice that a remote repository has new branches, you can use the git fetch command to retrieve them and see them using git branch -a. For more on pulling, fetching, and merging, check out this Stack Overflow question.

When you’re ready, move on to GitHub Exercises
