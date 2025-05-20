---
layout: ../../../layouts/BlogPost.astro
title: "My Personal Git & GitHub Cheatsheet"
description: "Cheatshhet to Git and GitHub commands, workflows, and best practices."
pubDate: "2025-05-20"
heroImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80"
tags: ["git", "github", "development", "tutorial", "cheatsheet"]
readingTime: "15 minutes"
author: "Dev Companion"
---


# Git Mastery: A Comprehensive Developer's Guide

This guide provides a structured approach to understanding Git workflows, explaining when, why, and how to use various Git commands for effective version control.

## 🚀 Getting Started with Git

### Setting Up Your Identity

Before diving into Git workflows, set up your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Initial Repository Setup

For a new project:

```bash
git init
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

For an existing project:

```bash
git clone https://github.com/username/repository.git
```

## 📋 Essential Daily Commands

These commands form the backbone of your daily Git workflow:

```bash
git status                  # Check what files are changed/staged
git add filename.txt        # Stage specific files
git add .                   # Stage all changes
git commit -m "Message"     # Commit with descriptive message
git pull origin main        # Get latest changes from remote
git push origin branch-name # Send your changes to remote
```

## 🌿 When, Why, and How to Create a New Branch

### When to Create a Branch

Create a new branch when:
- Developing a new feature
- Fixing a bug
- Experimenting with changes
- Working on documentation

### Why Use Branches

Branches allow you to:
- Keep main/master branch stable and deployable
- Work on multiple features simultaneously
- Isolate changes for easier testing and review
- Collaborate without stepping on each other's toes

### How to Create and Use a Branch

```bash
# Start from an updated main branch
git checkout main
git pull origin main

# Create and switch to a new feature branch
git checkout -b feature/descriptive-name

# Make your changes, then commit
git add .
git commit -m "Add feature description"

# Push your branch to remote repository
git push origin feature/descriptive-name
```

## 🔄 When, Why, and How to Merge Branches

### When to Merge

Merge branches when:
- A feature is complete and tested
- Bug fixes are verified
- Changes are ready to be incorporated into the main codebase

### Why Merge

Merging allows you to:
- Incorporate completed features into your main branch
- Bring bug fixes into other branches
- Integrate changes from multiple developers

### How to Merge a Branch into Master

```bash
# Switch to the destination branch (receiving changes)
git checkout main

# Ensure it's up to date
git pull origin main

# Merge the feature branch into main
git merge feature/descriptive-name

# Push the updated main to remote
git push origin main
```

## 🔁 When, Why, and How to Rebase

### When to Rebase

Use rebase when:
- You want a cleaner, linear project history
- Bringing a feature branch up to date with main
- Before submitting a pull request to ensure clean integration

### Why Rebase

Rebasing allows you to:
- Create a cleaner commit history without merge commits
- Incorporate changes from main without creating merge commits
- Make your feature branch appear as if it was built on the latest main

### How to Rebase

```bash
# Update your main branch first
git checkout main
git pull origin main

# Switch to your feature branch
git checkout feature/descriptive-name

# Rebase your branch onto latest main
git rebase main

# If there are conflicts, resolve them and continue
git rebase --continue

# Force push to update remote branch (if already pushed)
git push origin feature/descriptive-name --force
```

⚠️ **Warning**: Never rebase branches that others are working on or that have been merged. Only rebase your own feature branches that haven't been merged yet.

## 🌟 GitHub Pull Request Workflow

For team collaboration or even personal projects:

1. Create a feature branch and push to GitHub
2. Open a Pull Request on GitHub
3. Review the code changes (or have teammates review)
4. Address any feedback with additional commits
5. Merge the PR when approved
6. Clean up branches afterward

### Cleaning Up After a Merge

```bash
# Switch back to main
git checkout main

# Pull the merged changes
git pull origin main

# Delete local feature branch
git branch -d feature/descriptive-name

# Delete remote branch (if not auto-deleted)
git push origin --delete feature/descriptive-name
```

## 🆘 Fixing Common Mistakes

### Undoing the Last Commit

```bash
git reset --soft HEAD~1    # Undo commit but keep changes staged
git reset --hard HEAD~1    # ⚠️ Undo commit AND discard changes
```

### Reverting a Specific Commit

```bash
git revert commit-hash    # Creates new commit that undoes changes
```

### Discard Changes in a File

```bash
git checkout -- filename
```

### Creating Empty Commits (for Triggering CI/CD)

```bash
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

## 📚 Git Terminology Glossary

**Branch**  
What it is: A separate line of development that diverges from the main codebase.  
Analogy: A parallel timeline where you can make changes without affecting the main timeline.

**Checkout**  
What it is: Command to switch between branches or restore files.  
Analogy: Traveling between different timelines. You're changing which files you're looking at, not transferring changes.

**Clone**  
What it is: Creating a complete copy of a remote repository.  
Analogy: Creating a duplicate of a blueprint library, with all its history and designs.

**Commit**  
What it is: Saving a snapshot of your changes to the repository.  
Analogy: Taking a photo of your work at a specific moment, which you can always return to.

**Fetch**  
What it is: Downloads changes from a remote repository without merging.  
Analogy: Checking what books are new at the library without bringing them home.

**Fork**  
What it is: Creating a personal copy of someone else's repository.  
Analogy: Making a photocopy of a recipe book so you can add your own notes and modifications.

**HEAD**  
What it is: A reference to the current commit you're working on.  
Analogy: Your current position in the timeline or the "you are here" marker.

**Merge**  
What it is: Combining changes from one branch into another.  
Analogy: Pouring the contents of one branch into another while preserving both branch histories.

**Merge Branch to Master**  
What it is: Incorporating changes from a feature branch into the main branch.  
Analogy: Adding your finished chapter (feature branch) back into the main book (master branch).

**Merge Master to Branch**  
What it is: Bringing changes from the main branch into your feature branch.  
Analogy: Updating your chapter draft with edits that have been made to the rest of the book.

**Origin**  
What it is: The default nickname for your remote repository.  
Analogy: The address of the central library where everyone shares their code.

**Pull**  
What it is: Fetches changes from remote and merges them into current branch.  
Analogy: Getting the latest books from the library and adding them to your collection.

**Push**  
What it is: Uploads your local commits to a remote repository.  
Analogy: Sending your work to the central library for others to access.

**Rebase**  
What it is: Re-anchoring your branch to a different starting point.  
Analogy: Picking up your entire branch and replanting it on top of the latest main, rewriting history.

**Remote**  
What it is: A version of your repository hosted on the internet or network.  
Analogy: The central library where everyone's contributions are stored.

**Repository (Repo)**  
What it is: The entire project including all files and history.  
Analogy: A library containing all versions of your project through time.

**Stash**  
What it is: Temporarily shelves changes so you can work on something else.  
Analogy: Putting your current work-in-progress in a drawer to work on an urgent task.

**Tag**  
What it is: A named reference to a specific commit (often used for releases).  
Analogy: A bookmark in your project's timeline, marking important milestones.

**Working Directory**  
What it is: The files on your local machine.  
Analogy: Your workspace where you actually make changes.

## 📌 Preserving Different Versions of Your Project

Sometimes you need to maintain different versions of your project simultaneously. For example, you might want to preserve your MVP while developing new features, or maintain multiple versions for different clients.

### Using Branches to Save Versions

Here's how to maintain separate versions using branches:

```bash
# Start from your current master
git checkout master

# Create a branch to preserve current state
git checkout -b MVP

# Optional: Add an empty commit to mark this version
git commit --allow-empty -m "MVP version 1.0 release"

# Push the branch to remote to preserve it
git push origin MVP

# Return to master for new development
git checkout master

# Create new branch for next version
git checkout -b "MVP-2.0"

# Work on new features...
```

This approach allows you to:
1. Preserve the exact state of your MVP
2. Keep developing new features on a separate branch
3. Deploy any version at any time by checking out the appropriate branch
4. Easily switch between versions for comparison or bug fixing

### Using Tags for Version Management (Recommended)

While branches work for preserving versions, Git tags are specifically designed for this purpose and are more efficient:

```bash
# While on master at the MVP point
git tag -a v1.0 -m "MVP Version 1.0"
git push origin v1.0

# Continue development...
# When MVP 2.0 is ready
git tag -a v2.0 -m "MVP Version 2.0"
git push origin v2.0
```

**Advantages of tags:**
- Simpler to manage than multiple long-lived branches
- Don't clutter your branch list
- Clearly indicate "official" versions
- Can be checked out just like branches: `git checkout v1.0`
- Don't move as you continue development (unlike branches)

To list all tags:
```bash
git tag
```

To checkout a specific tagged version:
```bash
git checkout v1.0
```

## 🎯 Best Practices

1. **Branch Often:** Create branches for each discrete feature or bug fix
2. **Pull Before You Branch:** Always start with the latest code
3. **Commit Regularly:** Make small, logical commits with clear messages
4. **Review Your Own Code:** Before merging, review your changes
5. **Keep Main Branch Stable:** Never commit directly to main for team projects
6. **Use .gitignore:** Exclude unnecessary files from your repository
7. **Delete Branches After Merging:** Keep your repository clean
8. **Use Tags for Versions:** Tag important milestones and releases
9. **Document Your Workflow:** Maintain notes on your branching strategy

By following these guidelines and understanding the core Git concepts, you'll develop a workflow that helps you maintain clean code, collaborate effectively, and recover from mistakes with confidence.

