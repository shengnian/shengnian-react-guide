React入门实践指南零三
===

# React 和 ReactDOM
----
## 一步
参见 React入门实践指南零二 创建guide03目录

## 二步 安装
`npm install react --save`
`npm install react-dom --save`
`npm i babel babel-core babel-loader --save-dev`
`npm install babel-preset-react --save-dev`
`npm install babel-preset-es2015 --save-dev`
**注**：
1. i 参数是 install 的简写
2. babel用于解析jsx语法，因此此处须安装babel。
3. presete-es2015与preset-react 用于解析react语法和es2015语法（ES6）

## 三步 使用
参见代码。
注意`package.json`中内容变化。
`webpack.config.js`内容中增加`module`段：
```
module: {
    loaders: [{
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        query:
        {
          presets:['es2015', 'react']  //  if not this can throw Uncaught SyntaxError: Unexpected token import and babel-loader jsx SyntaxError: Unexpected token
        }
    }]
}
```


## 四步 效果

`npm run dev`

浏览器中输入：http://localhost:8080/
