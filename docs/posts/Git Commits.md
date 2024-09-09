---
shortTitle: Git Commit Messages 规范
title: 使用 Conventional Commits 规范撰写 Git 提交信息
category:
    - 手记
tags:
    - Git
date: 2024-09-01
---

# 使用 Conventional Commits 规范撰写 Git 提交信息

**Conventional Commits** 是一种简单但强大的提交信息规范，旨在帮助我们保持一致的提交历史记录。这一规范提供了一个结构化的方法，方便进行自动化任务，如版本控制和生成变更日志。它与 Semantic Versioning (SemVer) 紧密结合，以便在提交信息中描述新特性、修复和重大变更。

在本文中，我们将介绍 Conventional Commits 规范，提供一些示例，并说明为什么在管理项目的提交历史时，这种规范非常有用。

<!-- more -->

## Conventional Commits 结构

使用 Conventional Commits 规范的提交信息具有以下结构：

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 提交信息的组成部分

- **type**: 提交的目的（如 `fix`、`feat`、`chore` 等）。
- **scope**（可选）：描述代码库中受影响部分的名词（如 `fix(parser)`）。
- **description**: 简要说明更改内容。
- **body**（可选）：详细说明提交的内容。正文从描述后的一空行开始。
- **footer**（可选）：额外的元数据，例如重大变更或问题引用。

### 常见的提交类型

1. **fix**: 修复代码中的问题（对应 SemVer 中的 PATCH 版本）。
2. **feat**: 添加新的功能（对应 SemVer 中的 MINOR 版本）。
3. **BREAKING CHANGE**: 重大更改，导致不兼容，需要 MAJOR 版本更新。

### 其他类型

除了常见的 `fix` 和 `feat` 类型，还可以使用其他类型，例如：

- `build`: 与构建系统相关的更改（如 `npm`、`Gulp`、`Grunt`）。
- `chore`: 不修改代码库的例行任务。
- `ci`: CI/CD 配置的更改。
- `docs`: 文档更新。
- `style`: 代码样式的更改（如格式化、缺少分号等）。
- `refactor`: 代码重构，既不修复错误也不添加功能。
- `perf`: 性能优化的更改。
- `test`: 添加或修改测试代码。

### 重大变更

重大变更可以通过以下两种方式指明：
1. 在提交信息的 footer 部分添加 `BREAKING CHANGE:`。
2. 在提交类型或 scope 后添加 `!`，例如：`feat(api)!: send email when product is shipped`。

## 提交示例

以下是一些使用 Conventional Commits 规范的提交信息示例，涵盖不同的情况：

### 1. 带有重大变更说明的提交

```bash
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` 键现在用于扩展其他配置文件。
```

### 2. 使用 `!` 表示重大变更的提交

```bash
feat!: send an email to the customer when a product is shipped
```

### 3. 带有 scope 和重大变更的提交

```bash
feat(api)!: send an email to the customer when a product is shipped
```

### 4. 同时使用 `!` 和 `BREAKING CHANGE` footer 的提交

```bash
chore!: drop support for Node 6

BREAKING CHANGE: 使用了 Node 6 不支持的 JavaScript 特性。
```

### 5. 不带正文的简单提交

```bash
docs: correct spelling of CHANGELOG
```

### 6. 带有 scope 的提交

```bash
feat(lang): add Polish language support
```

### 7. 带有多段正文和多个 footer 的提交

```bash
fix: prevent racing of requests

引入了请求 ID 并引用了最新请求。忽略除最新请求以外的所有响应。

删除了用于缓解请求竞争问题但现在已过时的超时设置。

Reviewed-by: Jane Doe
Refs: #123
```

## 规范要求

- 提交信息 **必须** 以一个 type 开头（例如 `feat`、`fix`）。
- type 后面 **可以** 添加一个 scope，使用括号包围（例如 `fix(parser)`）。
- 描述 **必须** 紧跟在 type/scope 后面。
- 提交正文 **可以** 提供，并且 **必须** 在描述后的空行之后开始。
- footer **可以** 用于提供额外的元数据，例如重大变更或引用信息。

### 重大变更

- 重大变更 **必须** 通过在 type/scope 前缀中添加 `!` 或在 footer 中使用 `BREAKING CHANGE:` 来指明。
- 如果使用了 `!`，则 `BREAKING CHANGE:` footer 是可选的，提交描述将用作变更的说明。

## 为什么要使用 Conventional Commits？

- **自动生成变更日志**：轻松跟踪项目的更改历史和版本更新。
- **语义化版本控制**：根据提交类型自动确定版本更新（`fix` 对应 PATCH，`feat` 对应 MINOR，`BREAKING CHANGE` 对应 MAJOR）。
- **清晰的沟通**：团队成员和利益相关者可以快速理解更改的影响。
- **高效的自动化**：触发自动构建和发布流程。
- **鼓励贡献**：结构化的提交历史使贡献者更容易理解和遵循项目规范。

## 常见问题

### 1. 如何处理项目初期开发阶段的提交信息？
即使在早期开发阶段，也建议像对待已发布的产品一样撰写提交信息。记录修复和变更的细节始终是有益的。

### 2. 提交类型应为大写还是小写？
大写和小写均可，但保持一致性非常重要。

### 3. 如果一个提交适用于多个类型怎么办？
尽量将更改拆分为多个提交，每个提交只对应一个类型。

### 4. 这是否会妨碍快速迭代开发？
不会！它鼓励有组织的、可维护的开发实践，同时仍然支持快速迭代。

### 5. Conventional Commits 如何与 SemVer 关联？
- `fix` 类型的提交对应 **PATCH** 版本。
- `feat` 类型的提交对应 **MINOR** 版本。
- 带有 `BREAKING CHANGE` 的提交对应 **MAJOR** 版本。

### 6. 如果我不小心用了错误的提交类型怎么办？
在合并之前，可以使用 `git rebase -i` 来修正提交历史。如果已经发布，如何修正取决于你使用的工具和流程。

### 7. 所有贡献者都需要遵守 Conventional Commits 规范吗？
不需要！维护者可以在合并之前整理提交信息，或者使用 squash 机制，这样普通贡献者无需担心格式问题。

## 结论

Conventional Commits 是一个强大的工具，它为提交历史带来了清晰性、结构化和自动化。不论是小型项目还是大型开源库，采用这一规范将确保提交信息更加有用、组织有序，并且随时准备进行自动化处理。

立即开始使用 Conventional Commits，让你的开发过程更加高效和可扩展！

## 参考资料

- [Chectsheets.zip](https://cheatsheets.zip/conventional-commits)
- [conventionalcommits.org](https://conventionalcommits.org/)
- 基于 [Angular 规范](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
