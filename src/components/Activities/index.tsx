import React from 'react';
import { Avatar, AvatarGroup, Empty, List, Tag } from '@douyinfe/semi-ui';
import { IllustrationNoResult } from '@douyinfe/semi-illustrations';
import { ActivityType } from '../../types/types';

interface ActivitiesProps {
  dataSource: ActivityType[]
}

export default function Activities({ dataSource }: ActivitiesProps) {
  return (
    <div data-testid='activity-list'>
      {
        dataSource && dataSource.length 
          ? <List 
            dataSource={dataSource}
            renderItem={item => (
              <List.Item
                header={
                  item.img
                }
                main={
                  <div>
                    <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>{item.title}</span>
                    {item.tags.map(tag => (<Tag 
                      key={tag.name} 
                      color={tag.color as any}
                    >
                      {tag.name}
                    </Tag>))}
                    <span>{item.register_date}</span>
                    <span>{item.start_date} ~ {item.end_date}</span>
                    <span>{item.num_of_people} / {item.max_num_of_people}</span>
                    <span>{item.spot}</span>
                    <p>
                      { item.description }
                    </p>
                    {item.hosts[0]}
                  </div>
                }
              />
            )}
          />
          : <Empty
            image={<IllustrationNoResult
              style={{ width: 150, height: 150 }} />}
            description='搜索无结果'
          />
      }
    </div>
  );
}
