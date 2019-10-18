---
title: 常用美化指令收藏
date: 2018-12-11 17:23:59
tags:
- 技巧
- Linux
---

<!-- more -->

## bash agnoster主题

````
<!-- via https://github.com/speedenator/agnoster-bash -->

<!-- download powerline fonts -->
git clone https://github.com/powerline/fonts.git fonts \
&& cd fonts \
&& install.sh

<!-- install theme -->
cd $HOME \
&& mkdir -p .bash/themes/agnoster-bash \
&& git clone https://github.com/speedenator/agnoster-bash.git .bash/themes/agnoster-bash

<!-- init for bash: add to bashrc file -->
export THEME=$HOME/.bash/themes/agnoster-bash/agnoster.bash
if [[ -f $THEME ]]; then
    export DEFAULT_USER=`whoami`
    source $THEME
fi
````

## bash 常用alias

````
alias sb="source ~/.bashrc"
alias eb="sudo nano ~/.bashrc"
alias cc="clear"
````

## Gnome Extensions

install gnome-tweaks first. then go to extensions.gnome.org and follow the instructions to install extensions.

| name | functions |
|-|-|
| dash to panel | 合并dock和顶部状态栏 |
| drop down terminal | 下拉式终端 |
