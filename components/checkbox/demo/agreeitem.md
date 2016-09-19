---
order: 1
title: 协议复选框
---

Checkbox.AgreeItem ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { Checkbox } from 'antFB-mobile';
import { createForm } from 'rc-form';

const AgreeItem = Checkbox.AgreeItem;

let AgreeItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <AgreeItem
        {...getFieldProps('agreeitem1', {
          initialValue: false,
          valuePropName: 'checked',
        })}
      >
        已阅读协议<a onClick={(e) => { e.preventDefault(); alert('打开协议'); }}>《协议链接》</a>
      </AgreeItem>
    );
  },
});

AgreeItemExample = createForm()(AgreeItemExample);

ReactDOM.render(<AgreeItemExample />, mountNode);
````
