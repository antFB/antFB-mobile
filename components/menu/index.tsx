import * as React from 'react';
import { Text } from 'react-native';
import { MenuProps, MenuState } from './propTypes';

export default class AntMenu extends React.Component<MenuProps, MenuState> {
  static defaultProps = {
  };
  render() {
    return (
      <Text>One</Text>
    );
  }
}
