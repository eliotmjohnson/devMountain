/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = 'Git is a command line version control program that allows you to quickly save projects, folders, and files on your computer in local repositories and then push them to cloud repositories on the web (like GitHub).'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'GitHub is an open-source cloud git repository community where developers can push and pull from local git repositiories all of their code projects and files that they are working on or have saved on their computers.'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = 'git init initializes a local git repository in whatever folder the command like (git init) is run in.'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = 'git clone will take a cloud repositiory destination and clone the contents of that reposititory to a local repository on the host computer that the command is run in'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = 'git status if a main local git repository check to see if a local repo is initialized, what branch its on, which files havent been tracked, and what files are ready to commit.'

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = "git add is a command for the git program to add files and folders from your computer to be queued up to be committed to the initialized local git repository. They aren't saved, just tracked and ready to commit"

let gitAddCode = git add .

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = "git commit is the command to commit and save to the local git reposititory all of files from the git add stage and get them ready to be pushed to another destination like GitHub."

let gitCommitCode = git commit -m "initial commit"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = "git push is then used to push and copy all of the local committed git repository data to another destination like a cloud repository like GitHub"