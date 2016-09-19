import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
function noop() { }
import InputItemProps from './InputItemPropsType';

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

export interface InputItemState {
  focus?: boolean;
  placeholder?: string;
}

export default class InputItem extends React.Component<InputItemProps, InputItemState> {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'bankCard', 'phone', 'password', 'number']),
    size: PropTypes.oneOf(['large', 'small']),
    labelNumber: PropTypes.oneOf([2, 3, 4, 5, 6, 7]),
    labelPosition: PropTypes.oneOf(['left', 'top']),
    textAlign: PropTypes.oneOf(['left', 'center']),
  };

  static defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    name: '',
    defaultValue: '',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    size: 'large',
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      placeholder: this.props.placeholder,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('placeholder' in nextProps && this.state.placeholder !== nextProps.placeholder) {
      this.setState({
        placeholder: nextProps.placeholder,
      });
    }
  }

  onInputChange = (e) => {
    let value = e.target.value;
    const { onChange, type } = this.props;

    switch (type) {
      case 'text':
        break;
      case 'bankCard':
        value = value.replace(/\D/g, '');
        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        value = value.replace(/\D/g, '').substring(0, 11);
        const valueLen = value.length;
        if (valueLen > 3 && valueLen < 8) {
          value = `${value.substr(0, 3)} ${value.substr(3)}`;
        } else if (valueLen >= 8) {
          value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
        }
        break;
      case 'number':
        value = value.replace(/\D/g, '');
        break;
      case 'password':
        break;
      default:
        break;
    }
    onChange(value);
  };

  onInputBlur = (e) => {
    setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 300);
    const value = e.target.value;
    this.props.onBlur(value);
  };

  onInputFocus = (e) => {
    this.setState({
      focus: true,
    });
    const value = e.target.value;
    this.props.onFocus(value);
  };

  onExtraClick = (e) => {
    this.props.onExtraClick(e);
  };

  onErrorClick = (e) => {
    this.props.onErrorClick(e);
  };

  clearInput = () => {
    this.setState({
      placeholder: this.props.value,
    });
    this.props.onChange('');
  };

  render() {
    const {
      prefixCls, prefixListCls, type, value, defaultValue, name, editable, disabled, style, clear, children,
      error, className, extra, labelNumber, maxLength } = this.props;

    let valueProps;
    if (value !== undefined) {
      valueProps = {
        value: fixControlledValue(value),
      };
    } else {
      valueProps = {
        defaultValue,
      };
    }

    const { focus, placeholder } = this.state;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: true,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [className]: className,
    });

    const labelCls = classNames({
      [`${prefixCls}-label`]: true,
      [`${prefixCls}-label-2`]: labelNumber === 2,
      [`${prefixCls}-label-3`]: labelNumber === 3,
      [`${prefixCls}-label-4`]: labelNumber === 4,
      [`${prefixCls}-label-5`]: labelNumber === 5,
      [`${prefixCls}-label-6`]: labelNumber === 6,
      [`${prefixCls}-label-7`]: labelNumber === 7,
    });

    let inputType = 'text';
    if (type === 'bankCard' || type === 'phone') {
      inputType = 'tel';
    } else if (type === 'password') {
      inputType = 'password';
    }

    return (
      <div className={wrapCls} style={style}>
        {children ? (<div className={labelCls}>{children}</div>) : null}
        <div className={`${prefixCls}-control`}>
          <input
            {...valueProps}
            type={inputType}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}
            onFocus={this.onInputFocus}
            readOnly={!editable}
            disabled={disabled}
            pattern={type === 'number' ? '[0-9]*' : ''}
          />
        </div>
        {clear && editable && !disabled && (value && value.length > 0) ?
          <div className={`${prefixCls}-clear`} onClick={this.clearInput} />
          : null}
        {error ? (<div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick} />) : null}
        {extra !== '' ? <div className={`${prefixCls}-extra`} onClick={this.onExtraClick}>{extra}</div> : null}
      </div>
    );
  }
}
