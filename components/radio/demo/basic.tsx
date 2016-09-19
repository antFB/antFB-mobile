import * as React from 'react';
import { View } from 'react-native';
import { WhiteSpace, Radio, List } from 'antFB-mobile';
const RadioItem = Radio.RadioItem;

export default class BasicRadioExample extends React.Component<any, any> {
  state = {
    part1Value: 1,
    part2Value: 1,
  };

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Radio checked={this.state.part1Value === 1}
            onChange={(checked) => {
              if(checked) {
                this.setState({ part1Value: 1 });
              }
            }}
            style={{ borderWidth: 1, borderColor: '#ff0000', margin: 10 }}/>
          <WhiteSpace />
          <Radio checked={this.state.part1Value === 2}
            onChange={(checked) => {
              if(checked) {
                this.setState({ part1Value: 2 });
              }
            }}
            style={{ borderWidth: 1, borderColor: '#ff0000', margin: 10 }}/>
          <WhiteSpace />
        </View>

        <List>
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <RadioItem checked={this.state.part2Value === 1}
              onChange={(checked) => {
              if(checked) {
                this.setState({ part2Value: 1 });
              }
            }}>使用 Ant Desgin Component</RadioItem>
            <RadioItem checked={this.state.part2Value === 2}
              onChange={(checked) => {
              if(checked) {
                this.setState({ part2Value: 2 });
              }
            }}>使用 Ant Desgin Component</RadioItem>
            <RadioItem disabled>个性化调整disabled</RadioItem>
            <RadioItem disabled checked>个性化调整disabled</RadioItem>
          </List.Body>
        </List>
      </View>
    );
  }
}
