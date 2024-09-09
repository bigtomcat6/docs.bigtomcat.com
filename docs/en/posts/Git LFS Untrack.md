---
shortTitle: Git LFS Untrack
title: How to Move Files from Git LFS Back to Standard Git Management
category:
    - 手记
tags:
    - Git
date: 2024-09-09
---

# How to Move Files from Git LFS Back to Standard Git Management

When using Git LFS (Large File Storage), we can store large files such as images, videos, etc., in LFS to save space in the Git repository. However, sometimes we might want to move these files back to standard Git storage and stop using LFS. This article will show how to restore files from Git LFS to regular Git and remove them from LFS.

<!-- more -->

## Background

Suppose we have the following rule in place:

```bash
**/img/* filter=lfs diff=lfs merge=lfs -text
```

Currently, some images match this rule and are stored in Git LFS. Now, we want to move these files back to standard Git and stop using LFS to manage them.

## Steps

### 1. Modify the `.gitattributes` File

First, we need to modify the `.gitattributes` file in the project.

Find and either delete or comment out the following rule:

```bash
**/img/* filter=lfs diff=lfs merge=lfs -text
```

Once you remove this rule, Git will no longer apply LFS management to the images in the `img` folder.

### 2. Remove Files from LFS Tracking

Next, we need to stop LFS from tracking these files. Run the following command:

```bash
git lfs untrack "**/img/*"
```

This command tells Git LFS to stop tracking the image files in the `img` folder.

### 3. Manually Move Files Back to Standard Git

Since LFS stores pointers to the actual files, we need to manually move the files back to standard Git storage. Here's how:

#### 1. Check the Status of LFS Files

We can check which files are currently being tracked by LFS using the following command:

```bash
git lfs ls-files
```

Ensure you see the files you want to remove.

#### 2. Backup Files (Optional)

To avoid any issues, you can back up the image files to a temporary folder.

#### 3. Remove LFS Pointer Files

We can remove the LFS pointer for the files using the `git rm --cached` command:

```bash
git rm --cached path/to/img/file.jpg
```

This doesn't delete the actual files, but it removes the LFS pointer from the Git staging area.

#### 4. Re-add Files to Standard Git

Next, re-add these files to standard Git:

```bash
git add path/to/img/file.jpg
```

#### 5. Commit the Changes

Commit the changes:

```bash
git commit -m "Remove files from LFS and store in standard Git"
```

### 4. Clean Up Old Files in LFS

After moving the files out of LFS, they might still occupy space in LFS storage. We can clean up unused LFS files with the following command:

```bash
git lfs prune
```

This will remove any LFS objects that are no longer being tracked, freeing up storage.

### 5. Push to the Remote Repository

Finally, push your changes to the remote repository:

```bash
git push origin main
```

Make sure to replace `main` with the branch you are working on if it's different.

## Conclusion

By following these steps, we have successfully moved files from Git LFS back to standard Git management. Here’s a quick summary:

1. Modify the `.gitattributes` file to remove the LFS management rule.
2. Use `git lfs untrack` to stop LFS from tracking the files.
3. Remove the LFS pointer and re-add the files to standard Git.
4. Commit and push the changes.
5. Clean up old LFS files using `git lfs prune`.

With these actions, your Git repository will no longer use LFS to manage these files, and they will be stored under standard Git version control.