---
order: 2
title: 自定义
---

可自定义的浮层

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antFB-mobile';

const App = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  onClose() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="ghost" onClick={this.showModal}>
            自定义对话框
          </Button>
          <Modal
            transparent
            onClose={this.onClose}
            visible={this.state.visible}
            footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose(); } }]}
          >
            <div className="modal-demo-content">
              <div className="demo-image">图片</div>
              <div className="demo-title">标题文字标题文字</div>
              <div className="demo-content">辅助说明文字辅助说明文字辅助说明文字辅助说明文字辅助说明文字辅助说明文字</div>
            </div>
          </Modal>
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(
  <App />
, mountNode);

````


````css
.demo-image {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  margin: 0 auto;
  background-color: #108ee9;
  line-height: 1.5rem;
  color: white;
}
.demo-title {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 0.32rem;
  color: #000;
}
.demo-content {
  font-size: 0.26rem;
  color: #333;
}
````
