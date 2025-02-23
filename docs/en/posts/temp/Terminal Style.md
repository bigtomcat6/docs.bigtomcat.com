---
shortTitle: Terminal Beautification
title: Terminal Beautification
category:
    - Journal
tags:
date: 2025-02-23
---

## Installing Oh My Zsh

| Method    | Command                                                      |
| --------- | ------------------------------------------------------------ |
| **curl**  | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **wget**  | `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **fetch** | `sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |

## Installing Powerlevel10k

1. **Install Recommended Fonts**
    - [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
    - [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
    - [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
    - [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

Double-click each file and then click "Install". This will make the `MesloLGS NF` font available to all applications on your system.

**Apple Terminal**: Go to *Terminal → Preferences → Profiles → Text*, click on *Change* under *Font* and select the `MesloLGS NF` family.

2. **Install Powerlevel10k**

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

Open your `~/.zshrc` file, locate the line that sets `ZSH_THEME`, and change its value to `"powerlevel10k/powerlevel10k"`.

## Themes

1. [iTerm2 Themes](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/terminal)
2. [Dracula Theme](https://draculatheme.com/terminal)

## Installing Syntax Highlighting Plugin

This is an Oh My Zsh plugin.

```bash
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
vi ~/.zshrc
```

Now open the `~/.zshrc` file for editing. Locate the plugins section—it should already include `git`. Add the syntax highlighting plugin as follows:

```zsh
...
plugins=(
    git
    zsh-syntax-highlighting
)
...
```

Make sure that `zsh-syntax-highlighting` is the last plugin in the list.

Then, add the following line at the end of the file:

```bash
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

Press `ESC` to exit insert mode, then type `:wq` to save and exit vi.

Execute the following command to apply the changes:

```bash
source ~/.zshrc
```

## Optional: Command Auto-completion

Similarly to syntax highlighting, this is another Zsh plugin called `zsh-autosuggestions` used for command suggestions and auto-completion.

```bash
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-autosuggestions
vi ~/.zshrc
```

Locate the plugins section and add this plugin:

```zsh
plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
)
```

> References: [1](https://sspai.com/post/53008) [2](https://segmentfault.com/a/1190000014992947) [3](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#installation)