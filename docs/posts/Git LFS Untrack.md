---
shortTitle: Git LFS文件移回
title: 如何将 Git LFS 中的文件移回普通的 Git 管理
category:
    - 手记
tags:
    - Git
date: 2024-09-09
---

# 如何将 Git LFS 中的文件移回普通的 Git 管理

在使用 Git LFS（Large File Storage）时，我们可以将大文件，如图片、视频等，存储在 LFS 中来节省 Git 仓库的空间。然而，有时候我们可能希望将这些文件移回普通的 Git 存储中，而不再使用 LFS。本文将介绍如何将 Git LFS 中的文件恢复为普通的 Git 文件并从 LFS 中删除。

<!-- more -->

## 背景

假设我们有这样一个规则：

```bash
**/img/* filter=lfs diff=lfs merge=lfs -text
```

目前已经有一些图片符合这些规则，并且已经存储在 Git LFS 中。现在，我们希望将这些文件移回普通的 Git，并且不再使用 LFS 来管理它们。

## 步骤

### 1. 修改 `.gitattributes` 文件

首先，我们需要修改项目中的 `.gitattributes` 文件。

找到并删除或注释掉以下规则：

```bash
**/img/* filter=lfs diff=lfs merge=lfs -text
```

删除这条规则后，Git 将不再对 `img` 文件夹下的图片应用 LFS 管理。

### 2. 移除文件的 LFS 跟踪

接下来，我们要移除这些文件的 LFS 跟踪。使用以下命令：

```bash
git lfs untrack "**/img/*"
```

此命令会通知 Git LFS 停止跟踪 `img` 文件夹中的图片文件。

### 3. 手动将文件移回普通的 Git

由于 LFS 中存储的是指向文件的指针，我们需要手动将文件移回普通的 Git 存储。以下是具体的步骤：

#### 1. 检查 LFS 文件的状态

我们可以通过 `git lfs ls-files` 查看当前有哪些文件正在被 LFS 跟踪：

```bash
git lfs ls-files
```

确保你看到了希望移除的文件。

#### 2. 备份文件（可选）

为避免出现问题，可以先将图片文件备份到一个临时文件夹中。

#### 3. 删除 LFS 指针文件

我们可以通过 `git rm --cached` 命令删除 LFS 中的文件指针：

```bash
git rm --cached path/to/img/file.jpg
```

这不会删除文件本身，而是会从 Git 的暂存区中移除这些文件的 LFS 指针。

#### 4. 重新添加文件到普通 Git

接下来，将这些文件重新添加到普通 Git 中：

```bash
git add path/to/img/file.jpg
```

#### 5. 提交更改

提交这次修改：

```bash
git commit -m "Remove files from LFS and store in normal Git"
```

### 4. 清理 LFS 中的旧文件

在将文件移出 LFS 后，它们可能仍然会占用 LFS 的存储空间。我们可以使用以下命令清理不再使用的 LFS 文件：

```bash
git lfs prune
```

这将移除所有不再被 Git 追踪的 LFS 对象，释放存储空间。

### 5. 推送到远程仓库

最后，将更改推送到远程仓库：

```bash
git push origin main
```

请根据你的情况修改 `main` 为你正在使用的分支名称。

## 总结

通过以上步骤，我们成功地将文件从 Git LFS 中移回到普通的 Git 管理中。以下是总结步骤：

1. 修改 `.gitattributes` 文件，取消 LFS 管理规则。
2. 使用 `git lfs untrack` 停止 LFS 对文件的跟踪。
3. 删除 LFS 文件指针并重新添加文件到普通 Git。
4. 提交并推送更改。
5. 使用 `git lfs prune` 来清理不再使用的 LFS 文件。

通过这些操作，Git 仓库将不再使用 LFS 来管理这些文件，它们将存储在普通的 Git 版本控制中。