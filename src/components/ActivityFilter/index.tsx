import React from 'react';
import { Tag, Space, Typography } from '@douyinfe/semi-ui';
import { activityTags } from '../../constants/constants';
import styles from './index.module.scss';

export default function ActivityFilter() {
  const [selectedTags, setSelectedTags] = React.useState<{
    name: string,
    color: string,
  }[]>([]);
  const { Text } = Typography;

  return (
    <div className={styles.filter}>
      <Text>标签筛选：</Text>
      <Space className={styles.filterTags}>
        <Space className={styles.unselectedTags}>
          {
            activityTags.map(tag => <Tag 
              key={tag.name} 
              color={tag.color as any}
              onClick={() => selectedTags
                .includes(tag)
            || setSelectedTags(selectedTags.concat(tag))}
            >
              { tag.name }
            </Tag>)
          }
        </Space>
        <Space className={styles.selectedTags}>
          {
            selectedTags.map(tag => <Tag
              key={tag.name}
              data-testid='selected-filter'
              closable
              color={tag.color as any}
              onClose={() => setSelectedTags(selectedTags
                .filter(selectedTag => selectedTag !== tag))
              }>
              { tag.name }
            </Tag>)
          }
        </Space>
      </Space>
    </div>
  );
}
