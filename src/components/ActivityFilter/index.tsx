import React from 'react';
import { Tag } from '@douyinfe/semi-ui';
import { activityTags } from '../../constants/constants';

export default function ActivityFilter() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  return (
    <div>
      标签筛选：
      {
        activityTags.map(tag => <Tag key={tag.name} 
          onClick={() => selectedTags
            .includes(tag.name)
            || setSelectedTags(selectedTags.concat(tag.name))}
        >
          { tag.name }
        </Tag>)
      }
      {
        selectedTags.map(tag => <Tag key={tag} data-testid='selected-filter' closable
          onClose={() => setSelectedTags(selectedTags
            .filter(selectedTag => selectedTag !== tag))
          }>
          { tag }
        </Tag>)
      }
    </div>
  );
}
