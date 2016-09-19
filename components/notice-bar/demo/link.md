---
order: 1
title: 跳转
---

是否显示跳转箭头图标，点击之后会跳转到别的页面。

````jsx
import { NoticeBar, WhiteSpace } from 'antFB-mobile';

function linkClick() {
  // 这里配置跳转
}

const NoticeBarExample = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={linkClick}>
          国庆期间余额宝收益和转出到账时间
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" type="info">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
````
