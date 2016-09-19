import { View } from 'react-native';
import { Picker, List } from 'antFB-mobile';
import * as React from 'react';

import district from '../../../site/data/district';

export default class PopupExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: [],
    };
  }
  onClick = () => {
    // console.log('start loading data');
    setTimeout(() => {
      this.setState({
        data: district,
      });
    }, 500);
  }
  onChange = (value) => {
    // console.log(value);
    this.setState({ value });
  }
  render() {
    return (<View>
      <List>
        <List.Body>
          <Picker data={this.state.data} cols={2} triggerType="onClick"
            value={this.state.value} onChange={this.onChange}
          >
            <List.Item arrow="horizontal" last onClick={this.onClick}>省市选择(异步加载)</List.Item>
          </Picker>
        </List.Body>
      </List>
    </View>);
  }
}
