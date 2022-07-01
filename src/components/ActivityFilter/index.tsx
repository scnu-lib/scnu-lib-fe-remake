import React from 'react';
import { Tag, Space, Typography } from '@douyinfe/semi-ui';
import { activityTags } from '../../constants/constants';
import styles from './index.module.scss';
import { TagColor } from '@douyinfe/semi-ui/lib/es/tag';
import { activityTagsType } from '../../types/types';

interface ActivityFilterProps {
  selectedTags: typeof activityTags;
  handleChangeSelectedTags: (newSelectedTags: activityTagsType) => void;
}

export default function ActivityFilter({ selectedTags, handleChangeSelectedTags }: ActivityFilterProps) {
  const { Text } = Typography;

  return (
    <div className={styles.filter}>
      <Text>标签筛选：</Text>
      <Space className={styles.filterTags}>
        <Space className={styles.unselectedTags}>
          {
            activityTags.map(tag => (
              <Tag 
                key={tag.name} 
                color={tag.color as TagColor}
                onClick={() => {
                  if(!selectedTags.includes(tag))
                    handleChangeSelectedTags(selectedTags.concat(tag));
                }
                }
              >
                { tag.name }
              </Tag>)
            )  
          }
        </Space>
        <Space className={styles.selectedTags}>
          {
            selectedTags.map(tag => <Tag
              key={tag.name}
              data-testid='selected-filter'
              closable
              color={tag.color as TagColor}
              onClose={() => handleChangeSelectedTags(selectedTags
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
