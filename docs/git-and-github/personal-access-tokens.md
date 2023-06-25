---
sidebar_position: 7
---

# Personal Access Tokens

## Objectives

By the end of this chapter, you should be able to:

1. Create a remote repository on GitHub
2. Create a remote in the terminal
3. Push code from a local repository to a remote repository

## Introduction

When you push or pull code from GitHub, it’s essential that GitHub can successfully authenticate you before letting you run these commands. This means that every time you try to git push or git pull, GitHub will ask you for your email and password, and if they are correct the command will execute. Without authentication, GitHub would be chaos: anyone could push whatever code they wanted to any repository at any time!

So, being able to authenticate people when they push or pull is critical. But it also gets tedious pretty quickly. When you are pushing and pulling frequently, typing your credentials each time is bit of a hassle. Previously, it was recommended by GitHub to use SSH, but now the recommendation is to use a Personal Access Token or PAT. To do this we need to complete the following steps.

## Creating a PAT

This can be a bit intimidating, but if you follow the steps carefully, you should be able to get this to work. (If you get stuck, GitHub also provides instructions on creating PATs.)

1. Go to <https://github.com/settings/tokens/new>
2. Under Note enter “Rithm”
3. Under Expiration choose “No expiration”
4. Under Select scopes, “repo” should be checked.
5. Click Generate token
6. Important save the token in a file. It won’t be shown to you again.

Next time, when you pull/push to GitHub, it will prompt you to authenticate to *https://your_<username@github.com>*. Even though the prompt says to enter a password, you need to enter your new access token.

This might seem like a pain, but thankfully you only need to do it once. Once the connection is established, you’ll be able to push and pull without having to authenticate every single time.

When you’re ready, move on to GitHub Workflow
