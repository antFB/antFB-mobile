---
order: 0
english: AntFB Mobile of React
---

`antFB-mobile` 是 AntFB 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

<div class="pic-plus">
  <img width="160" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="/images/iconMb.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

[AntFB](http://diy-design.me/n.html?%2Ffrontend%2Findex.html&port=8055)基于AntDesign开发，AntDesign 在中后台领域的耕耘取得了很多成绩，使得 Ant Design 设计规范和 React 逐渐成为蚂蚁金服主流的前端产品开发模式，也受到社区的广泛关注。我们没有止步于此，一年后推出了 Ant Design 移动端规范及其实现。

随着蚂蚁金服中后台的移动端需求增多，不同的设计规范及研发方式，给设计者和开发者带来大量的重复工作，降低了产品的研发效率。

我们希望为设计者和开发者提供一套统一的设计规范，可以降低设计、开发成本，减少沟通误差。不同于大多数设计规范，我们抽象出通用组件的基础样式和组件属性，使得拓展性更强。基于这套规范我们可以快速实现页面，提高研发效率，也希望借此推进蚂蚁金服各应用向设计规范化的方向发展。

在工程方面，我们继续推进和发展 React 全家桶技术栈，探索多端同栈、可预测、高效的研发模式。

## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## 安装

```bash
$ npm install antFB-mobile --save
```

## 使用

```jsx
import { Button } from 'antFB-mobile';

ReactDOM.render(<Button>按钮</Button>, mountNode);
```

无需单独引入样式，使用 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) 按需加载，并引入相关样式。

```js
{
  "plugins": [
    ["antd", {
      style: 'css',  // 'less',
      libraryName: 'antFB-mobile',
    }]
  ]
}
```

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](/)
- [开发文档](http://github.com/antFB/antFB-mobile/blob/master/development.md)
- [React 模块](http://github.com/react-component)

## 谁在使用

- 蚂蚁金服
- 阿里巴巴
- 口碑

## 欢迎参与

有任何建议或意见您可以进行 [提问](http://github.com/antFB/antFB-mobile/issues)。
