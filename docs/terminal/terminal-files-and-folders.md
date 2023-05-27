---
sidebar_position: 2
---

# Working with Files and Folders

## Objectives

By the end of this chapter, you should be able to:

1. Create files and folders in Terminal using `mkdir` and `touch`
2. Move files and folders in Terminal using `mv`
3. Copy files and folders in Terminal using `cp`
4. Remove files and folders in Terminal using `rm` and `rmdir`
5. Explain what a flag is in Terminal
6. Explain what the following commands do: `whoami`, `pwd`, `cat`, `echo`, `less`, `open`

## Creating Files And Folders

Now that we have a good understanding of how to change directories and navigate in Terminal, let’s see how we can create our own folders and files. To create a folder we use the `mkdir` command (short for “make directory”), followed by the name (or space-separated names) of the folder(s) that we would like to create. So let’s head over to our `Desktop` and create a new folder called `first_folder`.

```console 
cd /Users/$USER/Desktop
mkdir first_folder
```

Whoa…you should be asking yourself, what is that `$USER `thing? It is an environment variable in your shell that keeps track of the current user of the shell. You can also see who `$USER` by typing `echo $USER` or by using the command `whoami`. Try out both methods of checking who the current user is.

As another side note, this tutorial will use absolute paths to navigate, just to make it easier for you to follow along. However, don’t feel like you MUST use absolute paths over relative ones.

Now that we made the `first_folder`, how do we change directories into it? If you are thinking of the cd command, you’re right! So let’s `cd /Users/$USER/Desktop/first_folder`. Or, if you are already in your Desktop, you can just cd `first_folder`

We just mentioned “if you are already in your Desktop.” How do you know which directory you are in if you forget? Thankfully, there is a handy command called `pwd` which will display the absolute path and let you know what current directory you are working in. So if you are ever unsure, just type in `pwd` (which is short for present working directory).

Now that we are inside our new folder, `first_folder`, let’s create a new file. A simple way to create a file is with the `touch` command. The `touch` command simply creates an empty file. Let’s create a file called `first_file`: `touch /Users/$USER/Desktop/first_folder/first_file`. Alternatively, if you are currently in the `first_folder` directory, you can simple type `touch first_file`. Now use the `ls` command to verify that your file was created. `ls`, which is short for “list,” will list all of the files and folders in your current directory.

## Displaying Contents Of A File

A very common command to display the contents of a file is the `cat` command. If you type `cat NAME_OF_FILE` you can see the contents of the file easily, right there in Terminal. Try it out on the file you just created, `first_file`. You should see no output after pressing enter. There is no output because `first_file` is empty.

Let’s add some text to the file so that we can use `cat`. Type:

```console
echo "Hello World" > first_file
```

The `echo` command simply writes text to the terminal. The `>` is called a redirect. The `>` redirects the output from the command on the left side into the file on the right hand side. We will see more redirects in the next chapter.

Now try using `cat` on the file again. Do you see `Hello World`?

There are other ways of seeing the contents of a file in the terminal. Try using the command less: `less first_file`. `less` is a program that displays the contents of a file and allows the user to navigate up and down through the file or search for text in the file. To exit `less`, just press `q`.

## Opening up a file

If you would like to `open` up a file, you can use the `open` command. So if we want to see the contents of first_file we can do `open first_file`. The `open` command is also very useful if you want to open all the files and folders in a directory (using your operating system’s user interface). Try typing in `open .` and see what happens! If you are on Windows, the command to do this is `start NAME_OF_FILE`

## Moving Files And Folders

Now that you understand how to create files and folders, let’s move onto another essential operation: moving and copying folders. To move files and folders we use the `mv` command. Let’s try this out!

Head back to the Desktop by typing in `cd ~/Desktop` and let’s make a new file called `test.txt` (remember that command? If not – stop reading and go through the previous section again). Now on your Desktop you should have a folder called `first_folder` and a file called `test.txt`. Our goal is to move `test.txt` inside of `first_folder` – let’s do that using the `mv` command. First make sure you are in the Desktop (type `pwd` to be sure), type `mv test.txt first_folder/test.txt`, and press enter.

Did it work? You shouldn’t see any kind of success message or confirmation from Terminal, but you also should not see an error. This is very common when working with Terminal: you will see error messages if a command is incorrect, but very rarely see a success message. In other words, no news is good news. In this case, to make sure we did the correct thing, let’s `cd` into `first_folder` and type in `ls`. We should see `test.txt` inside of `first_folder`.

## Copying Files and Folders

Sometimes you may want to make a copy of a file or a folder. To copy a file, we use the cp command (short for copy). The general syntax looks like this:

```console
cp PATH_TO_ORIGINAL_FILE PATH_TO_COPIED_FILE
```

For example, if we wanted to create a copy of `test.txt` and call it `test_copy.txt`, we could enter the following command, assuming we’re inside of `first_folder`:

```console
cp test.txt test_copy.txt
```

If you list all of the files in `first_folder`, you should now see three text files.

What if you want to copy an entire directory of files? Try moving up a directory from `first_folder`, and then type `cp first_folder first_folder_copy`. Uh oh! You should see an error: `cp: questions_copy is a directory (not copied).`

In order to copy a directory, you need to modify the `cp` command as follows:

```console
cp -r first_folder first_folder_copy
```

The `-r` is called a flag; you can think of a flag for a command as an option that can be passed to that command. To learn more about the flags that you can pass to `cp`, you can type `man cp` (man is short for manual, on Windows this command is `--help`) and use the arrow keys to move up and down. When you’re finished, press `q` to quit.

## Deleting Files And Folders

Alright, enough with all of these files and folders, let’s get rid of them. Make sure you are inside the `first_folder` and type `rm test.txt`. Once again, you shouldn’t see much of a response from the terminal, so run a quick `ls` to make sure that the file is removed. Now that it is gone… where did it go? The Trash? The answer is it is completely removed from your computer. There is no confirmation or undo so be **VERY** careful when using the `rm` command. After you have removed this file, go ahead and remove the copied file as well. Finally, remove `first_file`. Now that the `first_folder` is empty, let’s move up a directory and remove the `first_folder` directory itself.

Alright, enough with all of these files and folders, let’s get rid of them. Make sure you are inside the `first_folder` and type `rm test.txt`. Once again, you shouldn’t see much of a response from the terminal, so run a quick ls to make sure that the file is removed. Now that it is gone… where did it go? The Trash? The answer is it is completely removed from your computer. There is no confirmation or undo so be VERY careful when using the `rm` command. After you have removed this file, go ahead and remove the copied file as well. Finally, remove `first_file`. Now that the `first_folder` is empty, let’s move up a directory and remove the first_folder directory itself.

If there is anything inside the folder, you will have to use `rm -rf first_folder`. Like we saw with `cp`, the `r` and `f` in -`rf` are examples of flags. How can you learn more about the flags for rm? Go ahead and remove the `first_folder_copy` directory using `rm -rf`.

## Exercises

1. Create a file called name.txt.
2. Try renaming the file to rename.txt using the mv command. What does this tell you about the command?
3. Using the cp command, make a copy of rename.txt and call it copy.txt.
4. Remove the file copy.txt.
5. Create a folder called questions.
6. Change directories to the questions folder.
7. Create a file called first.txt.
8. Create a file called second.txt.
9. Go back a directory and make a copy of the questions folder and call it questions_copy.
10. When using cp -r what is the -r called? What does it do?
11. Delete the original questions folder and the copy.

When you’re ready, move on to Listing Files and Flags