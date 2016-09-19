---
category: Others
type: Others
chinese: 九宫格
english: Grid
---

在水平和垂直方向，将布局切分成若干等大的区块。

### 规则
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。


## API

### Grid
| 成员        | 说明           | 类型       |   可选值     | 默认值       |
|------------|----------------|-----------|---------|--------------|
| data    |    传入的菜单数据     | Array,每个元素必须包含`icon`,和`text`两个key   |  | [] |
| onClick    |   点击每个菜单的回调     | Function(el, index)  |  |  |
| columnNum    |   列数     | number  |  | `4` |
| hasLine    |   是否有边框     | boolean  |  | `true` |
| isCarousel    |   是否跑马灯,     | boolean  |  | `false` |
| carouselMaxRow    |   如果是跑马灯, 一页跑马灯需要展示的行数   | number  |  | `2` |
| renderItem    |   自定义每个grid的条目的创建   | Function(el, index), 返回一个React.Element  |  |  |
