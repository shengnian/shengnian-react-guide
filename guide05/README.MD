React入门实践指南零五
===

# 虚拟DOM(Virtual DOM)
----
## 一步 概念
1. 概念
React的核心机制之一就是虚拟DOM：可以在内存中创建的虚拟DOM元素。React利用虚拟DOM来减少对实际DOM的操作从而提升性能。类似于真实的原生DOM，虚拟DOM也可以通过JavaScript来创建，例如：
```
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
```
使用这样的机制，我们完全可以用JavaScript构建完整的界面DOM树，正如我们可以用JavaScript创建真实DOM。但这样的代码可读性并不好，于是React发明了JSX，利用我们熟悉的HTML语法来创建虚拟DOM：
```
var root =(
  <ul className="my-list">
    <li>First Text Content</li>
    <li>Second Text Content</li>
  </ul>
);
```
2. 虚拟DOM中diff算法，可参见：[Reconciliation](https://facebook.github.io/react/docs/reconciliation.html)和前后章节及[深入浅出React（四）：虚拟DOM Diff算法解析](http://www.infoq.com/cn/articles/react-dom-diff)


## 二步 实例
创建与前几节中相同环境。参见源码内容。
