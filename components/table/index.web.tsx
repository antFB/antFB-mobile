import * as React from 'react';
import assign from 'object-assign';
import RcTable from 'rc-table';

export default class Table extends React.Component<any, any> {
  static defaultProps = {
    dataSource: [],
    prefixCls: 'am-table',
  };

  render() {
    const { columns, dataSource, direction, scrollX, titleFixed } = this.props;
    const { style, className } = this.props;

    const restProps = assign({}, this.props);
    ['style', 'className'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    let table;
    // 默认纵向
    if (!direction || direction === 'vertical') {
      if (titleFixed) {
        table = <RcTable {...restProps} columns={columns}
          data={dataSource}
          className="am-table"
          scroll={{ x: true }}
          showHeader={false}
        />;
      } else {
        table = <RcTable {...restProps} columns={columns}
          data={dataSource}
          className="am-table"
          scroll={{ x: scrollX }}
        />;
      }
    // 横向
    } else if (direction === 'horizon') {
      columns[0].className = 'am-table-horizonTitle';
      table = <RcTable {...restProps} columns={columns}
        data={dataSource}
        className="am-table"
        showHeader={false}
        scroll={{ x: scrollX }}
      />;
    // 混合
    } else if (direction === 'mix') {
      columns[0].className = 'am-table-horizonTitle';
      table = <RcTable {...restProps} columns={columns}
        data={dataSource}
        className="am-table"
        scroll={{ x: scrollX }}
      />;
    }

    return (
      <div className={className} style={style}>
      {
        table
      }
      </div>
    );
  }
}
