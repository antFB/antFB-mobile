import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './Modal';

export default function (...args) {
  const title = args[0];
  const content = args[1];
  const actions = args[2] || [{ text: '确定' }];

  if (!title && !content) {
    // console.log('Must specify either an alert title, or message, or both');
    return;
  }

  const prefixCls = 'am-modal';
  let div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  }

  const footer = actions.map((button) => {
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      orginPress();
      close();
    };
    return button;
  });

  ReactDOM.render(<Modal
    visible
    transparent
    prefixCls={prefixCls}
    title={title}
    transitionName="am-zoom"
    footer={footer}
    maskTransitionName="am-fade">
    <div style={{ zoom: 1, overflow: 'hidden' }}>{content}</div>
  </Modal>, div);
}
