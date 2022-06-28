import React from 'react';
import { Tag } from '@douyinfe/semi-ui';
import { activityTags } from '../../constants/constants';

export default function ActivityFilter() {
  return (
    <div>
      标签筛选：
      {
        activityTags.map(tag => <Tag key={tag} >{tag}</Tag>)
      }
    </div>
  );
}
