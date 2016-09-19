import * as React from 'react';

export interface RadioProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  listPrefixCls?: string;
  /** web only */
  className?: string;
  /** web only */
  name?: string;
  style?: React.CSSProperties;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export default RadioProps;
