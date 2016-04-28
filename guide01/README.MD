React入门实践指南零一
===

# React基本概念
----
## 一步 起源
因Facebook对当前市面上所有的Javascript MVC框架不满，决定自行架构一套，用于架设Instagram网站，于2013年5月开源。

## 二步 概述
[React](https://facebook.github.io/react/)官网所述：React是一个构建User Interfaces的Javascript库。具有三个特性：
1. 仅是UI；React被用做MVC中的V来使用。
2. 虚拟DOM；根据state(状态)变化，重新渲染整个组件的 UI。为解决性能问题采用 Virtual DOM。
3. 数据流；React采用`单向数据流`的应用架构。

React核心思想:`组件`，[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)。

## 三步 JSX
JSX语法就是把 HTML 与 Javascript混写。做到模板和组件关联，示例如下：
```
const App = function() {
  return <div>Hello World!</div>
}
```
但 JS 不支持这种包含 HTML 的语法，所以需要通过工具将 JSX 编译输出成 JS 代码才能使用。（见后文中内容）。
若采用页面中编译代码参见：[Tutorial](https://facebook.github.io/react/docs/tutorial.html)

JSX语法编译器：Babel

**注：** 一些特殊属性与关键字冲突，如下：
html中的
```
class->className
for->htmlFor
```

更详细的JSX请参见：
1. [JSX
indepth](https://facebook.github.io/react/docs/jsx-in-depth.html)
2. [JSX Spread Attributes](https://facebook.github.io/react/docs/jsx-spread.html)
3. [JSX Gotchas](JSX Gotchas)

## 四步 ES6 import 与 export 语句

```
// import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render('<div>hello</div>', document.getElementById('shengnianApp'));
```

```
// export and export default 注意丙者区别
const App = function() {
  return <div>Hi!</div>;
}
export App;
// org
export default App;
```


关于ES6语法请参见：[ES6语法](http://es6.ruanyifeng.com/)

## 五步 几个重要概念

1. Component Instances 与 Component Classes区别

```
// commponent class
const App = function() {
  return <div>Hi!</div>;
}

// commponent instance
<App />
```

**注**：测试可访问http://babeljs.io/repl/

2. React Render渲染目标DOM
```
ReactDOM.render(<App/>,
  document.getElementById('shengnianApp'))
```
在html文件中需要有DOM:
`<div id="shengnianApp"></div>`

3. 后续指南中会逐步说明
props/envents/PropTypes/state/ref/生命周期
