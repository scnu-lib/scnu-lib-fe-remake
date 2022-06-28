import React from 'react';
import { Tag } from '@douyinfe/semi-ui';
import { activityTags } from '../../constants/constants';

export default function ActivityFilter() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  return (
    <div>
      标签筛选：
      {
        activityTags.map(tag => <Tag key={tag} 
          onClick={() => selectedTags
            .includes(tag)
            || setSelectedTags(selectedTags.concat(tag))}
        >
          { tag }
        </Tag>)
      }
      {
        selectedTags.map(tag => <Tag key={tag} data-testid='selected-filter' >{tag}</Tag>)
      }
    </div>
  );
}
