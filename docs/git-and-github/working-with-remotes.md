---
sidebar_position: 6
---

# Working with Remotes

## Objectives

By the end of this chapter, you should be able to:

1. Create a remote repository on GitHub
2. Create a remote in the terminal
3. Push code from a local repository to a remote repository

## Creating a remote repository

Once you have a GitHub account, head over to <https://github.com/new> and create a repository. In this example, we will be creating a repository called `first_repo`. Do not worry about the description or checking the box to initialize the repository with a README.

After you’ve created the repo, GitHub will give you some instructions to get started. The instructions should look something like this (the url towards the end will depend on your GitHub username):

```console
echo "# first_repo" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin `<https://github.com/elie/first_repo.git>`
git push -u origin master
```

Let’s go through these commands one by one.

1. echo "`first_repo`" >> README.md – we are passing some markdown into a file called README.md.
2. git init – make sure we have a repository
3. git add README.md – let’s add the README.md file (we can also do git add . or git add -A here)
4. git commit -m "first commit" – add a commit with the message “first commit”
5. `git remote add origin <https://github.com/elie/first_repo.git>` – this is where things get fun. This command tells our local repository about a remote repository located somewhere. The location of our remote repository is `<https://github.com/elie/first_repo.git>`. Now if we want to send our code to GitHub we can just type in `git push <https://github.com/elie/first_repo.git> master` – but typing that whole URL is quite a pain. Instead, it would be better if we could give the URL a nickname (also called an alias) – that is what “origin” is! By setting up this alias, we can simply type git push origin master to send the code from our master branch to this remote repository.So going back, git remote add is how we tell our local repository about a remote repository (that we can send/retrieve code from). origin is a nickname for where the repository is actually located (at `<https://github.com/elie/first_repo.git)`.To> see your remotes locally you can type `git remote -v`. If you need to remove a remote you can use `git remote rm NAME_OF_REMOTE`

6. `git push -u origin master` – Now we can send our code from a local repository to our remote repository (which we aliased to `origin` in the previous command). The `-u` flag allows us in the future to only have to type `git push` instead of `git push origin master`.

So to review this command – `git push` is how we send code from a local repository to a remote repository. `origin` is where we are sending it (specifically to `origin/master` which is the master branch on our remote repository). `master` is the local branch where we are sending our code from.

## Pushing code up to GitHub

Now when you type in git push, you will be prompted to enter your username and password for GitHub. While that is fine once or twice, it becomes quite a nuisance if you are pushing or pulling (retrieving code) frequently. It would be nice if we could establish some trust between our computer and GitHub so that when we run git push or git pull, GitHub does not need to authenticate us. To do that we are going to create an SSH key.

When you’re ready, move on to SSH Keys
