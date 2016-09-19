---
order: 3
title: 大数字
---

数字大于99，会显示 `99+`


````jsx
import { Badge } from 'antFB-mobile';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge text={99}>
      <span className="head-example" />
    </Badge>
    <p style={{ marginBottom: 20 }} />
    <Badge text={108}>
      <span className="head-example" />
    </Badge>
  </div>
, mountNode);
````
