React入门实践指南零四
===

# Webpack HMR(Webpack 热部署)
----
## 一步
参见 React入门实践指南零三 创建guide04，与guide03内容相同。

## 二步 概念
HRM全称Hot Module Replacement，HMR支持添加或者删除模块, 同时应用持续运行, 不需要页面刷新，即可看到最新状态。
类似：gulp-livereload和Browsersync.
详细介绍见：[Webpack HMR Tutorial](http://andrewhfarmer.com/webpack-hmr-tutorial/)

## 三步 配置
前一节中已使用了命令行（CLI）方式开启了HRM：

`webpack-dev-server --devtool eval --progress --colors --hot --content-base build`

安装webpack-dev-server：`npm install webpack-dev-server --save-dev`

本节使用WebpackDevServer API方式配置实现HRM。
1. 在webpack.config.js中更改和添加以下内容：

  `var webpack = require('webpack');`

  ```
  entry: [
    './index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
  ],
  ```

  ```
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
  ```


2. 新建server.js,结构见下
  - guide04
    - server.js

  `server.js`内容如下,其中的属性`hot:true`

  ```
  var WebpackDevServer = require('webpack-dev-server');
  var webpack = require('webpack');
  var config = require('./webpack.config.js');
  var path = require('path');

  var compiler = webpack(config);
  var server = new WebpackDevServer(compiler, {
    contentBase: 'build/',
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
  });
  server.listen(8080, 'localhost', function() {});
  ```

3. 修改package.json
```
"scripts": {
    ...
    "start": "node server.js"
  },
```

## 四步 效果
当修改内容后，浏览器会自动更新。
