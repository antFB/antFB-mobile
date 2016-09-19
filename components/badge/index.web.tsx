import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import BadgeProps from './BadgePropsType';

export default class Badge extends React.Component<BadgeProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    dot: PropTypes.bool,
    corner: PropTypes.bool,
    overflowCount: PropTypes.number,
    size: PropTypes.string,
  };
  static defaultProps = {
    prefixCls: 'am-badge',
    text: null,
    dot: false,
    corner: false,
    overflowCount: 99,
    size: null,
  };

  render() {
    let { text, prefixCls, overflowCount, className, style, children } = this.props;

    const dot = this.props.dot;
    const size = this.props.size;
    const corner = this.props.corner;

    text = text > overflowCount ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    // null undefined "" "0" 0
    const hidden = (!text || text === '0') && !dot;

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-dot-large`]: dot && (size === 'large'),
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && (size === 'large'),
    });

    const badgeCls = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-corner-wrapper-large`]: corner && (size === 'large'),
    });

    return (
      <span className={badgeCls} title={text}>
        {children}
        {
          !hidden &&
          <sup className={scrollNumberCls} style={style} >
            {text}
          </sup>
        }
      </span>);
  }
}
