/* tslint:disable:no-console */
import * as React from 'react';
import { View } from 'react-native';
import {Stepper, List} from 'antFB-mobile';

function onChange(value) {
  console.log('changed', value);
}

export default class StepperExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <List>
          <List.Body>
            <List.Item extra={<Stepper key="0" max={10} min={1} defaultValue={3} onChange={onChange} />}>
              readOnly: true
            </List.Item>
            <List.Item extra={
              <Stepper size="small" key="1" max={10} min={1} readOnly={false} defaultValue={1} onChange={onChange} />
            }>
              readOnly: false
            </List.Item>
            <List.Item extra={<Stepper key="2" disabled max={10} min={1} defaultValue={3} onChange={onChange} />}>
            禁用
            </List.Item>
          </List.Body>
        </List>
      </View>
    );
  }
}
