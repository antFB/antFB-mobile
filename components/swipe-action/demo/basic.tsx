/* tslint:disable:no-console */
import * as React from 'react';
import { View } from 'react-native';
import { SwipeAction, List } from 'antFB-mobile';

export default class BasicSwipeActionExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <List>
          <List.Body>
            <SwipeAction
              autoClose
              style={{ backgroundColor: 'transparent' }}
              right={[
                  {
                    text: 'more',
                    onPress: () => console.log('more'),
                    style: { backgroundColor: 'orange', color: 'white' },
                  },
                  {
                    text: 'delete',
                    onPress: () => console.log('删除'),
                    style: { backgroundColor: 'red', color: 'white' },
                  },
                ]}
              left={[
                  {
                    text: '阅读',
                    onPress: () => console.log('阅读'),
                    style: { backgroundColor: 'blue', color: 'white' },
                  },
                  {
                    text: '回复',
                    onPress: () => console.log('回复'),
                    style: { backgroundColor: 'green', color: 'white' },
                  },
                ]}
              onOpen={ () => console.log('open') }
              onClose={ () => console.log('close') }
            >
              <List.Item extra="额外参数" last>
                简单例子 - 左右都可操作
              </List.Item>
            </SwipeAction>
          </List.Body>
        </List>
      </View>
    );
  }
}
