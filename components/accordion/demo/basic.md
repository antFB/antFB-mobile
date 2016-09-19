---
order: 0
title: 基本
---

Accordion

````jsx
import { Accordion, List } from 'antFB-mobile';

const AccordionExmple = React.createClass({
  onChange(key) {
    console.log(key);
  },
  render() {
    return (
      <div>
        <Accordion
          defaultActiveKey="0"
        >
          <Accordion.Panel header="标题文字">
            <List.Item>子内容子内容</List.Item>
            <List.Item>子内容子内容</List.Item>
            <List.Item>子内容子内容</List.Item>
            <List.Item>子内容子内容</List.Item>
          </Accordion.Panel>
          <Accordion.Panel header="标题文字"><List.Item>this is panel content2 or other</List.Item></Accordion.Panel>
          <Accordion.Panel header="标题文字"><List.Item>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</List.Item></Accordion.Panel>
        </Accordion>
      </div>
    );
  },
});

ReactDOM.render(<AccordionExmple />, mountNode);
````
