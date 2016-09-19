<p align="center">
  <a href="http://diy-design.me/n.html?%2F&port=8002">
    <img width="320" src="https://zos.alipayobjects.com/rmsportal/XyhtJExcOrXZnLv.png">
  </a>
</p>

# AntFB Mobile [![](https://img.shields.io/travis/ant-design/ant-design-mobile.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-mobile) [![npm package](https://img.shields.io/npm/v/antFB-mobile.svg?style=flat-square)](https://www.npmjs.org/package/antFB-mobile) [![NPM downloads](http://img.shields.io/npm/dm/antFB-mobile.svg?style=flat-square)](https://npmjs.org/package/antFB-mobile) [![Dependency Status](https://david-dm.org/ant-design/ant-design-mobile.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-mobile)

A configurable Mobile UI specification and React-based implementation.

## Features

- Follow AntFB Mobile UI specification.
- Configurable UI style for different products.
- Support web and native usages based on React Native.
- Develop in TypeScript.

## Demo

### mobile web demo

<img src="https://zos.alipayobjects.com/rmsportal/dLMGiKuyFLBfYfm.png" />

http://diy-design.me/n.html?%2F&port=8002/kitchen-sink/

### react native demo

<img src="https://cloud.githubusercontent.com/assets/1698185/18130654/6ba4ccea-6fc2-11e6-9aa1-0a53cd74d9e1.png" />


## Install

```bash
$ npm install antFB-mobile --save
```


## Usage

### Web

```jsx
import 'antFB-mobile/lib/button/style';
import Button from 'antFB-mobile/lib/button';

ReactDOM.render(<Button>Start</Button>, mountNode);
```

Set webpack to resolve .web.js suffix

```
resolve: {
  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  extensions: ['', '.web.js', '.js', '.json'],
},
```

### React-Native

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from 'antFB-mobile/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

### Use babel-plugin-antd

Use [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) (Recommended) to reduce bundle size.

```js
// .babelrc
// no need to set style property in react-native
{
 "plugins": [["antd", { "style": "css", "libraryName": "antFB-mobile" }]]
}
```

Then you can import components from antFB-mobile directly.

```jsx
// import js and css modularly, parsed by babel-plugin-antd
import { Button } from 'antFB-mobile';
```

## Browser Support

- `iOS`
- `Android 4.0+`

## Links

- [Home Page](http://diy-design.me/n.html?%2F&port=8002)
- [Developer Instruction](http://github.com/antFB/antFB-mobile/blob/master/development.md)
- [React components](http://github.com/react-component/)
