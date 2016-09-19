---
category: UI Controls
type: UI Controls
chinese: 选择器
english: Picker
---

在一组预设值中进行选择，eg：省市区选择。


### 规则
- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- DatePicker 是 Picker 的特定模式。

## API

| 成员        | 说明           | 类型            | 默认值       |
|------------|----------------|--------------------|--------------|
| data    | 数据源        | Array<{value, label, children: Array}> |   -  |
| value   | 值, 格式[value1, value2, value3], 对应数据源的N级value    | Array  | - |
| format  | 格式化选中的值  | Function | `(values) => { return values.join(','); } ` |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调   | Function(value) ,如果使用[rc-form](https://github.com/react-component/form),一般不需要自己处理| - |
| children| 通常是List.Item | Object |  List.Item  |
| okText  | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| title  | 大标题 | String | - |
| extra   | Children如果是List.Item,则是extra属性的默认值, 如果是其它的UI组件,则value或者extra属性会经过format方法处理后传给children的extra属性,用户需要自己实现这个属性 | String |  `请选择`  |
| style   | 样式 | Object |  无  |
