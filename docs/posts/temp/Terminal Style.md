---
shortTitle: 终端美化
title: Terminal终端美化
category:
    - 手记
tags:
date: 2025-02-23
---

## 安装 Oh my zsh

| Method    | Command                                                      |
| --------- | ------------------------------------------------------------ |
| **curl**  | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **wget**  | `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **fetch** | `sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |

## 安装 Powerlevel10k

1. 安装推荐字体
    - [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
    - [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
    - [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
    - [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

双击每个文件，然后单击“安装”。这将使`MesloLGS NF`字体可用于系统上的所有应用程序。

**Apple终端**：*终端→首选项→配置文件→文本*，单击*字体*下的*更改* 并选择`MesloLGS NF`家族。

2. 安装 Powerlevel10k

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

打开`~/.zshrc` ，找到设置`ZSH_THEME`的行，然后将其值更改为`"powerlevel10k/powerlevel10k"` 。

## 主题

1. [iTerm2主题](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/terminal)
2. [Dracula主题](https://draculatheme.com/terminal)

## 安装高亮插件

这是oh my zsh的一个插件

```bash
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
vi ~/.zshrc
```
这时我们再次打开zshrc文件进行编辑。找到plugins，此时plugins中应该已经有了git，我们需要把高亮插件也加上：

```zsh
...
plugins=(
    git
    zsh-syntax-highlighting
)
...
```

请务必保证插件顺序，zsh-syntax-highlighting必须在最后一个。

然后在文件的最后一行添加：`source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh`

按一下esc调出vi命令，输入:wq保存并退出vi模式。

执行命令使刚才的修改生效：

```bash
source ~/.zshrc
```

## 可选择、命令补全

跟代码高亮的安装方式一样，这也是一个zsh的插件，叫做`zsh-autosuggestion`，用于命令建议和补全。

```bash
cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-autosuggestions
vi ~/.zshrc
```

找到plugins，加上这个插件即可：

```zsh
plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
)
```

> 参考: [1](https://sspai.com/post/53008) [2](https://segmentfault.com/a/1190000014992947) [3](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#installation)