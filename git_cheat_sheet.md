# GIT Commands

**Always do**: `git pull` 
and 
`git status`(when working in teams, updates main)

> If you want to work on a new feature, you can create a branch from the “main” repository. It basically creates another copy but in another timeless basically. You can later merge you branch onto the main repository once you’re finished with your feature. Here is how u create a branch:

1. `git branch "branch-name"` *(recommend branch name to be <initial_featureName>)*

2. `git checkout "branch-name"` *(switches your current branch onto the branch u 
created)*

- `git checkout -b "branch-name"` 

3. `git fetch` *(gets all branches that exist)*

4. `git push -u origin "branch-name"` *(posts the branch onto the remote repository/github)*

> U should add and commit often as you write your code for the new feature.  Go to folder you’re working on and do:

5. `git add .`
- OR `git add "file-name"` 

6. `git commit -m "your intials-small description"`  *(puts your files on staging)*

>Once you are finished with your feature. We need to merge.

7. `git fetch` *(make sure ur code is updated with everyone else’s)*

8. `git checkout main` *(switches from your current branch into the main branch)*

9. `git merge "branch-name"` *(merges your branch onto main)*

10. `git push origin main` *(pushes your version of the repository (merged version) onto github)*

11. `git push origin :"branch-name"` *(deletes the branch from github so others don’t see it)*

12. `git branch -D "branch-name"` *(deletes the branch from your computer/local repo)*

> If 2 or more people are working with similar files, it’s important to switch to their branch instead of creating your own branch:
> You can do this by doing this

13. `git fetch` *(will get all the current branches on github that anyone created)*

14. `git branch -a` *(to see all branches, including your branches and remote branches)*

15. `git switch "desired-remote-branch-name"` *(your now onto the branch X person is working on :D)*

## Vocabulary:
- **Pushing on git** (means posting onto github and saving)
- **Pull on git**(means getting the most recent version from github and changes your files to recent)
- **Fetch on git**(means getting the most recent version but it doesn’t change your files until u merge)
- **Forking** (means grabbing someone else’s REPO on github but it’s saved under you. So when u push, it will save under the repo you own, instead of the person you got it from)
- **Branch** (Alternate repository so you can create new features without affecting the working code)
- **Origin** refers to github remote or “original” repo
- **Main** where the working code goes
- the command **-a** means “all”
- The command **-b** means “create a new branch” ex: git checkout -b "branch-name"
- The command **-u** means “upstream branch” and it allows git to track the branch you created and links it to a branch on github. So now you can do git pull when working on a branch without specifying what branch you want to pull from.

# Python Commands
### Setting up virtual environment
1. `python -m venv <acronym_env>`

2. `source <acronym_env/bin/activate>`

- deactivate

> Now you can properly do your package installation in your project folder when you turn on your virtual environment

- `pip install --upgrade`

> after this pip update you can now start installing all the dependencies you need to get started!