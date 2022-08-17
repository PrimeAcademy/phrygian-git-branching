# phrygian-git-branching

- Create an index.html (Bryn)
  - Create an `h1`
- Create a style.css (Alex)
  - Style the `h1`
- Create class list (everyone's name)
- Create a header
- Add some styling to header and li


## Git Branching Cheatsheet

### Create a feature branch

- `git checkout main` - make sure you're on the main branch
- `git pull origin main` - make sure you're up to date
- `git branch feature-NAME` - Create a branch (replace **NAME** with your feature e.g. `feature-add-footer`)
- `git branch` - Display the branch you're currently on
- `git checkout feature-NAME` - Switch to the branch

### Commit one or more times

- `git add .`
- `git commit -m "MESSAGE"`
- `git push origin feature-NAME`