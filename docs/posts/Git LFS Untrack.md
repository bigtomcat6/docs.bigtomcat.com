---
shortTitle: Git LFS Untrack
title: Git LFS Untrack
category:
    - 手记
tags:
    - Git
date: 2024-09-09
---

要将已经存储在 Git LFS 中的图片文件恢复为普通的 Git 文件，并从 Git LFS 中取消对这些文件的管理，你需要执行以下几个步骤：

### 1. 修改 `.gitattributes` 文件
首先，你需要在项目的根目录下找到并修改 `.gitattributes` 文件。

找到之前定义的规则 `**/img/* filter=lfs diff=lfs merge=lfs -text`，并将这条规则删除或注释掉（可以在行首加上 `#` 来注释）。这样，Git 不再对这些文件应用 LFS 管理。

### 2. 移除文件的 LFS 跟踪

然后，使用 `git lfs untrack` 命令来移除文件的 LFS 跟踪。执行以下命令：

```bash
git lfs untrack "**/img/*"
```

这将告诉 Git LFS 停止跟踪 `img` 文件夹中的文件。

### 3. 手动将 LFS 中的文件移回普通 Git

Git LFS 存储的是指向大文件的指针，而不是文件的实际内容。所以你需要手动替换 LFS 中的文件为普通的文件。可以按照以下步骤操作：

- 首先，检查 LFS 文件的状态：
  
  ```bash
  git lfs ls-files
  ```

  这会列出所有正在由 LFS 跟踪的文件，确保你能看到你想移除的图片文件。

- 接下来，手动重新添加文件。你可以通过以下方式完成：

  1. **备份 LFS 中的文件**：你可以在当前目录下将图片文件备份到一个临时文件夹中，以防出现问题。

  2. **删除当前的 LFS 文件**：
     
     ```bash
     git rm --cached path/to/img/file.jpg
     ```

     这样会将 LFS 相关的指针文件从暂存区中移除。

  3. **重新添加文件**：
     
     你可以使用如下命令将文件重新添加到普通的 Git 存储中：

     ```bash
     git add path/to/img/file.jpg
     ```

  4. **提交修改**：

     ```bash
     git commit -m "Remove files from LFS and store in normal Git"
     ```

### 4. 清理 LFS 中的旧文件

移除文件后，它们依然可能存储在 LFS 中，占用空间。可以使用以下命令清理不再使用的 LFS 对象：

```bash
git lfs prune
```

这将删除所有不再需要的 LFS 文件，释放存储空间。

### 5. 推送到远程仓库

最后，将你的更改推送到远程仓库：

```bash
git push origin main
```

（请确保 `main` 是你的当前分支，或者根据你的情况修改分支名称。）

### 总结

1. 修改 `.gitattributes` 文件，取消对图片的 LFS 管理规则。
2. 使用 `git lfs untrack` 命令取消文件的 LFS 跟踪。
3. 手动删除并重新添加这些文件到 Git 仓库。
4. 提交并推送这些更改。
5. 使用 `git lfs prune` 来清理旧的 LFS 文件。

通过这些步骤，你可以将 LFS 中的图片文件移回普通的 Git 管理中，并从 LFS 中删除这些文件。