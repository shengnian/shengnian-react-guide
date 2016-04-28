React入门实践指南零零
===

# NodeJS环境
----
## 一步 下载
[NodeJS Download Page](https://nodejs.org/en/download/ "下载NodeJS")，根据不同平台选择安装包。本指南以Windows_7_x86_64为例。

## 二步 安装
1. 双击下载后的安装包 node-[版本号].msi
2. 点击以上的Run(运行)
3. 点击next（下一步）
4. 勾选接受协议选项，点击 next（下一步） 按钮
5. Node.js默认安装目录为 "C:\Program Files\nodejs\" , 可以修改目录，并点击 next（下一步）
6. 点击树形图标来选择你需要的安装模式 , 然后点击下一步 next（下一步）
7. 点击 Install（安装） 开始安装Node.js。你也可以点击 Back（返回）来修改先前的配置。 然后并点击 next（下一步）
等待安装
8. 点击 Finish（完成）按钮退出安装向导。

## 三步 检查
1. 检测PATH环境变量是否配置了Node.js，`点击开始->运行` 或 `Win键 + R`->`输入"cmd"`-> `path`命令，输出如下
```
C:\Users\shengnian>path
PATH=C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Program Files
\ThinkPad\Bluetooth Software\;C:\Program Files\ThinkPad\Bluetooth Software\syswow64;D:\studio\nodejs\;
```
2. 继续输入`node --version` 和 `npm -version`，输出如下：
```
C:\Users\shengnian>node --version
v5.11.0
C:\Users\shengnian>npm -version
3.8.6
```
**注**：其它环境请自行安装。

## 四步 使用
npm 常用命令
安装：`npm install  [package-name] [-g（全局）] [--save|--save-dev]`
删除：`npm uninstall [package-name]`
搜索：`npm search`
初始化：`npm init`
帮助：`npm help <command>`
