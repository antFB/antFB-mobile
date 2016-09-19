import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export interface StepsItemProps {
  width?: number;
  size?: string;
  current?: number;
  index?: number;
  last?: boolean;
  direction?: string;
  title?: string;
  description?: string;
  status?: string;
  icon?: string;
  errorTail?: number;
}

export default class StepsItem extends React.Component<StepsItemProps, any> {

  render() {
    const { size, current, index, last, title, description,
      status, errorTail, icon } = this.props;

    let iconImg;
    let headCls;
    let tailTopCls;
    let tailBottomCls;

    const sizeCls = size === 'small' ? '_s' : '_l';

    if (index < current || status === 'finish') {
      iconImg = 'check';
      headCls = `head_blue${sizeCls}`;
      tailTopCls = 'tail_blue';
      tailBottomCls = 'tail_blue';
    } else if (index === current || status === 'process') {
      iconImg = 'check';
      headCls = `head_blue${sizeCls}`;
      tailTopCls = 'tail_blue';
      tailBottomCls = 'tail_gray';
    } else if (index > current || status === 'wait') {
      iconImg = 'more';
      headCls = `head_gray${sizeCls}`;
      tailTopCls = 'tail_gray';
      tailBottomCls = 'tail_gray';
    } else if (status === 'error') {
      iconImg = 'error';
      headCls = `head_red${sizeCls}`;
      tailTopCls = 'tail_gray';
      tailBottomCls = 'tail_gray';
    }

    if (last) {
      tailTopCls = 'tail_last';
      tailBottomCls = 'tail_last';
    }

    if (errorTail > -1) {
      tailBottomCls = 'tail_error';
    }

    let iconSource;
    if (size === 'small') {
      if (index < current || status === 'finish' || index === current || status === 'process') {
        iconSource = require('../style/images/check.png');
      } else if (index > current || status === 'wait') {
        iconSource = require('../style/images/more.png');
      } else if (status === 'error') {
        iconSource = require('../style/images/cross.png');
      }
    } else {
      if (index < current || status === 'finish' || index === current || status === 'process') {
        iconSource = require('../style/images/check_w.png');
      } else if (index > current || status === 'wait') {
        iconSource = require('../style/images/more_w.png');
        if (!!icon) {
          iconSource = icon;
        }
      } else if (status === 'error') {
        iconSource = require('../style/images/cross_w.png');
      }
    }

    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{ flexDirection: 'column'}}>
          <View style={[styles[`head_default${sizeCls}`], styles[headCls]]}>
             <Image source={iconSource} style={styles[`icon${sizeCls}`]} />
          </View>
          {
            <View style={[styles[`tail_default${sizeCls}`], styles[tailTopCls]]} />
          }
          {
            <View style={[styles[`tail_default${sizeCls}`], styles[tailBottomCls]]} />
          }
        </View>
        <View style={styles[`content${sizeCls}`]}>
          <Text style={[styles[`title${sizeCls}`]]}>{ title }</Text>
          <Text style={[styles[`description${sizeCls}`]]}>{ description }</Text>
        </View>
      </View>
    );
  }
}
