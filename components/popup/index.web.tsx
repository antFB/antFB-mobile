/* eslint no-console:0 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import assign from 'object-assign';

function create(instanceId, config, content, afterClose = (x: any) => { }) {
  const props = assign({}, {
    prefixCls: 'am-popup',
    animationType: 'slide-down',
  }, config);
  const {prefixCls, transitionName, maskTransitionName, maskClosable = true, animationType} = props;

  let div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      div.parentNode.removeChild(div);
      div = null;
    }
    afterClose(instanceId);
  }

  let transName = 'am-slide-down';
  if (animationType === 'slide-up') {
    transName = 'am-slide-up';
  }

  ReactDOM.render(<Dialog
    prefixCls={prefixCls}
    visible
    title=""
    footer=""
    className={`${prefixCls}-${animationType}`}
    transitionName={transitionName || transName}
    maskTransitionName={maskTransitionName || 'am-fade'}
    onClose={close}
    maskClosable={maskClosable}
  >{content}</Dialog>, div);

  return {
    instanceId,
    close,
  };
}

const ins = {
  defaultInstance: null,
  instances: [],
};
let instanceId = 1;

export default class Popup {
  static newInstance = () => {
    let j;
    return {
      show: (content, config) => {
        j = create(instanceId++, config, content, (iId) => {
          for (let i = 0; i < ins.instances.length; i++) {
            if (ins.instances[i].instanceId === iId) {
              ins.instances.splice(i, 1);
              return;
            }
          }
        });
        ins.instances.push(j);
      },
      hide: () => {
        j.close();
      },
    };
  }
  static show = (content, config) => {
    ins.defaultInstance = create('0', config, content, (iId) => {
      if (iId === '0') {
        ins.defaultInstance = null;
      }
    });
  }
  static hide = () => {
    ins.defaultInstance.close();
  }
}
