interface Props {
  data: any;
  value?: Array<string|number>;
  format?: (values) => void;
  cols?: number;
  extra?: string;
  dismissText?: string|React.ReactElement<any>; // React.ReactElement only for web
  okText?: string|React.ReactElement<any>; // React.ReactElement only for web
  title?: string|React.ReactElement<any>; // React.ReactElement only for web
  children: any;
  /** web only */
  prefixCls?: string;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
}

export default Props;
