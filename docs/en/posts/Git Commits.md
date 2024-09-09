---
shortTitle: Git Commits
title: The Conventional Commits Standard for Writing Git Commit Messages
category:
    - Journal
tags:
    - Git
date: 2024-09-01
---

# The Conventional Commits Standard for Writing Git Commit Messages

**Conventional Commits** is a simple but powerful convention for writing consistent commit messages. It offers a structured approach to commit history, making it easier to automate tasks like versioning and changelog generation. The specification dovetails with Semantic Versioning (SemVer) to help describe features, fixes, and breaking changes in commit messages.

<!-- more -->

In this post, we'll explore the Conventional Commits specification, provide examples, and explain why it's useful for managing commit history in your projects.

<!-- more -->

## Structure of a Conventional Commit

A commit message using the Conventional Commits format follows this structure:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Elements of the Commit Message

- **type**: The purpose of the commit (e.g., `fix`, `feat`, `chore`, etc.).
- **scope** (optional): A noun in parentheses describing the section of the codebase affected (e.g., `fix(parser)`).
- **description**: A brief summary of what was changed.
- **body** (optional): Detailed information explaining the commit. It begins one blank line after the description.
- **footer** (optional): Additional metadata, such as breaking changes or issue references.

### Common Commit Types

1. **fix**: A bug fix (maps to a PATCH release in SemVer).
2. **feat**: A new feature (maps to a MINOR release in SemVer).
3. **BREAKING CHANGE**: A major change that introduces incompatibility, which requires a MAJOR version bump.

### Other Types

While `fix` and `feat` are the most common types, other types may also be used, for example:

- `build`: Changes related to the build system (e.g., `npm`, `Gulp`, or `Grunt`).
- `chore`: Routine tasks that don’t modify the codebase.
- `ci`: Changes to CI/CD configuration files.
- `docs`: Documentation updates.
- `style`: Code style changes (e.g., formatting, missing semicolons).
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `perf`: Changes that improve performance.
- `test`: Adding or modifying tests.

### Breaking Changes

Breaking changes can be indicated in two ways:
1. By adding `BREAKING CHANGE:` in the footer of the commit message.
2. By appending `!` after the type or scope (e.g., `feat(api)!: send email when product is shipped`).

## Commit Examples

Here are some examples of Conventional Commit messages to demonstrate various scenarios:

### 1. Commit message with a breaking change footer

```bash
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used to extend other config files.
```

### 2. Commit with a `!` indicating a breaking change

```bash
feat!: send an email to the customer when a product is shipped
```

### 3. Commit with a scope and a breaking change

```bash
feat(api)!: send an email to the customer when a product is shipped
```

### 4. Commit with both `!` and a `BREAKING CHANGE` footer

```bash
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### 5. Simple commit with no body

```bash
docs: correct spelling of CHANGELOG
```

### 6. Commit with a scope

```bash
feat(lang): add Polish language support
```

### 7. Commit with a multi-paragraph body and multiple footers

```bash
fix: prevent racing of requests

Introduce a request ID and a reference to the latest request. Dismiss
incoming responses other than from the latest request.

Remove timeouts used to mitigate the racing issue but are obsolete now.

Reviewed-by: Jane Doe
Refs: #123
```

## Specification Requirements

- Commits **MUST** begin with a type (e.g., `feat`, `fix`).
- A scope **MAY** be provided after the type in parentheses (e.g., `fix(parser)`).
- The description **MUST** follow immediately after the type/scope prefix.
- The commit body **MAY** be provided, and **MUST** begin one blank line after the description.
- Footers **MAY** be used for additional metadata like breaking changes or references.

### Breaking Changes

- Breaking changes **MUST** be indicated by the `!` in the type/scope prefix or in the footer as `BREAKING CHANGE:`.
- If `!` is used, the `BREAKING CHANGE:` footer is optional, and the description will serve as the explanation.

## Why Use Conventional Commits?

- **Automatically generate CHANGELOGs**: Easily track changes in your project’s history and release notes.
- **Semantic versioning**: Automatically determine version bumps based on commit types (`fix` for patch, `feat` for minor, and `BREAKING CHANGE` for major).
- **Clear communication**: Team members and stakeholders can quickly understand the impact of changes.
- **Efficient automation**: Trigger automated build and publish processes.
- **Encourages contribution**: A structured commit history makes it easier for contributors to understand and follow the project.

## FAQ

### 1. How should I handle commits during the initial development phase?
Write commit messages as if the product is already released. Even during early development, it's useful to track fixes and changes clearly.

### 2. Should commit types be uppercase or lowercase?
Either is acceptable, but consistency is key.

### 3. What if a commit applies to more than one type?
Try to split the changes into multiple commits, each addressing a specific type.

### 4. Does this discourage fast iteration?
Not at all! It encourages organized, maintainable development practices while still supporting rapid iteration.

### 5. How does Conventional Commits relate to SemVer?
- `fix` type commits correspond to **PATCH** releases.
- `feat` type commits correspond to **MINOR** releases.
- Commits with `BREAKING CHANGE` correspond to **MAJOR** releases.

### 6. What if I accidentally use the wrong commit type?
Before merging, use `git rebase -i` to fix the commit history. After a release, correcting the commit type will depend on your tools and process.

### 7. Do all contributors need to use the Conventional Commits format?
No! Maintainers can squash commits or adjust messages before merging, so casual contributors don’t have to worry about following the format perfectly.

## Conclusion

Conventional Commits is a powerful tool that brings clarity, structure, and automation to your commit history. Whether you're working on a small project or a large open-source library, adopting this convention will help ensure that your commit messages are useful, organized, and ready for automation.

Start using Conventional Commits today to make your development process more efficient and scalable!

## References

- [Chectsheets.zip](https://cheatsheets.zip/conventional-commits)
- [conventionalcommits.org](https://conventionalcommits.org/)
- Based on [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)