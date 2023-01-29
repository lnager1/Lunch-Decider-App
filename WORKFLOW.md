# Quick Reference
|Type|Convention|Example|
|---|---|---|
|Commit Message|category: do something, do some other things|feat: add homepage, add navbar component|
|Branches|category-reference-description-in-kebab-case|feature-I42-create-new-button-component|
|Work Flow|**Please Read**|**Very Important**|

# Commits
## Category
A Git commit should be one of the following 4 categories:
- feat (feature)
- fix (bug fix)
- refactor
- atec (architecture work)

## statement
After the category there should be a ':'. After this there should a comma seperated list that of changes that were made. These should be described in small statments using as few words as gets the point across.

# Branches
## Category
A Git branch should be one of the following 3 categories:
- feature
- bugfix
- testing

## Refernce
After the category there should be a '-' then a issue (I#) or ticket (T#). If there is no ticket or issue this branch is sourcing from add NR for No-Ref.

## Description
After the category there should be a '-' and a small descriptor of the work being done on the branch. This will often be the name of the issue or ticket that it is solving. This should follow **Kebab Case**

# WorkFlow
## Branches
The master/main branch should always be a working version of the codebase. This means that we should never be doing work directly on the master branch. We should create a branch off of the master branch that follows the conventions above. Once you are done with work on a branch and have commited all changes you should submit a merge request.

## Merge Request
When all work is done on a branch the branch should be merged to the master branch. However we need to make sure that the code works and that it follows the laid out conventions before approving it to join the master branch. This is were the Merge request come in hand. You submit a Merge Request and the team lead will review your changes, after the changes have been approved (and all merge conflicts resolved) the code will be merged to the master branch.

### Reference
https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4