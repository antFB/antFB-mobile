import * as React from 'react';
import { View, Text } from 'react-native';
import { Popup, WhiteSpace, Button, List } from 'antFB-mobile';

export default class PopupExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      sel0: '',
      sel1: '',
    };
  }

  getPopupContent = (num) => {
    return (
      <View style={{ flex: 1 }}>
        <List title="委托买入">
          <List.Body>
            <List.Item>股票名称</List.Item>
            <List.Item>股票代码</List.Item>
            <List.Item>买入价格</List.Item>
            <List.Item>买入数量</List.Item>
          </List.Body>
        </List>
        <View style={{ padding: 10 }}>
          <Text style={{ color: 'gray' }}>投资说明投资说明...</Text>
          <Text style={{ color: 'gray' }}>交易金额以实际成交为准</Text>
        </View>
        <View style={{ padding: 6 }}>
          <Button type="primary" onClick={this.onClose.bind(this, 'cancel', num) }>买入</Button>
        </View>
      </View>
    );
  }

  onClose(sel, num) {
    this.setState({ [`sel${num}`]: sel });
    Popup.hide();
  }

  onClick = () => {
    Popup.show(this.getPopupContent(0), { maskClosable: true });
  }

  onClick1 = () => {
    Popup.show(this.getPopupContent(1), { maskClosable: true, animationType: 'slide-up' });
  }

  render() {
    return (
      <View style={{ margin: 8 }}>
        <WhiteSpace />
        <Button type="ghost" onPress={this.onClick}>Dropdown 效果</Button>
        <WhiteSpace />
        <Button type="ghost" onPress={this.onClick1}>向上弹出效果</Button>
      </View>
    );
  }
}
