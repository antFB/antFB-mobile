/* tslint:disable:no-console */
import * as React from 'react';
import { View } from 'react-native';
import { NoticeBar, WhiteSpace } from 'antFB-mobile';

export default class NoticeBarExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <WhiteSpace size="lg" />
        <NoticeBar>国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" onClick={() => {console.log('close');}}>
          国庆期间余额宝收益和转出到账时间1
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="error" mode="closable">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" type="info">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" type="question">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" type="success">国庆期间余额宝收益和转出到账时间</NoticeBar>
      </View>
    );
  }
}
