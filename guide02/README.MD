React入门实践指南零二
===

# Webpack环境
----
## 一步
创建项目目录 `shengnian-react-guide/guide02`
## 二步
切换到项目目录 `cd shengnian-react-guide/guide02`
## 三步
执行 `npm init` 输入信息如下：
```
name: (guide01) shengnian-react-guide-02
version: (1.0.0) 1.0.0
description: React入门实践指南一
entry point: (index.js) main.js
test command:
git repository:
keywords:
author: Shengnian<guide@shengnian.org>
license: (ISC) MIT
```
Is this ok? (yes)` yes`

生成`package.json`文件.
## 四步
执行 `npm i webpack --save-dev`
## 五步
稍等片刻，查看`package.json`文件,可找到类似以下内容:
```
"devDependencies": {
  "webpack": "^1.13.0"
}
```
## 六步
建立以下目录结构:
- guide01
 - /app
   - main.js
   - component.js
 - /build
   - bundle.js(编译自动生成)
   - index.html
 - package.json
 - webpack.config.js

## 七步
创建`webpack.config.js`,内容如下:
```
var path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};
```
## 八步
创建`hello.component.js`,`main.js`,`index.html`.

`hello.component.js`内容
```
'use strict'

module.exports = function () {
    var ele = document.createElement( 'h1');
    ele.innerHTML = '世界，你好！'
    return ele;
}
```

`main.js`内容
```
'use strict'
var component = require('./hello.component.js')

document.body.appendChild( component());
```

`index.html`内容
```
<!DOCTYPE html>
<html>
<head>
    <title>React 入门实践指南零一 ∷ 盛年开源</title>
    <meta charset="UTF-8"/>
</head>
<body>
<script src="bundle.js"></script>
</body>
</html>
```
**注:** 也可以使用[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)生成`index.html`

## 九步
执行 `npm i webpack-dev-server --save-dev`
在 `package.json` 添加内容如下:
```
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  },
}
```
执行 `npm run build`
执行 `npm run dev`
打开浏览器(建议使用Goole Chrome开发调试),地址栏输入:`localhost:8080/`,显示`世界，你好！`

## 释义
When you run `npm run dev` from your terminal it will execute the command stated as a value on the dev property. This is what it does:

`webpack-dev-server` - Starts a web service on `localhost:8080`
`devtool eval` - Creates source urls for your code. Making you able to pinpoint by filename and line number where any errors are thrown
`progress` - Will show progress of bundling your application
`colors` - Yay, colors in the terminal!
`content-base build` - Points to the output directory configured To recap, when you run `npm run dev` this will fire up the webservice, watch for file changes and automatically rebundle your application when any file changes occur. How neat is that!
Go to `http://localhost:8080` and you should see something.
