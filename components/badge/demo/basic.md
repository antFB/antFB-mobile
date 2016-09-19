---
order: 0
title: 基本
---

简单的徽章展示。


````jsx
import { Badge } from 'antFB-mobile';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge text={9}>
      <span className="head-example" />
    </Badge>
    <p style={{ marginBottom: 20 }} />
    <Badge text={'new'}>
      <span className="head-example" />
    </Badge>

  </div>
, mountNode);
````
