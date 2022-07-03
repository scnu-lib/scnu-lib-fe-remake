import React from 'react';
import { Empty, List, Tag, Space } from '@douyinfe/semi-ui';
import { IllustrationNoResult } from '@douyinfe/semi-illustrations';
import { activityTagsType, ActivityType } from '../../types/types';
import styles from './index.module.scss';
import { Typography } from '@douyinfe/semi-ui';
import { IconUserStroked } from '@douyinfe/semi-icons';
import { TagColor } from '@douyinfe/semi-ui/lib/es/tag/interface';

interface ActivitiesProps {
  dataSource: ActivityType[]
  selectedTags: activityTagsType
}

export default function Activities({ dataSource, selectedTags }: ActivitiesProps) {
  const { Text, Title, Paragraph } = Typography;
  if(selectedTags && selectedTags.length !== 0) 
    dataSource = dataSource.filter(activity => (
      selectedTags.reduce(
        (res, selectedTag) => (
          res || activity.tags.map(tag => tag.name).includes(selectedTag.name)
        ),
        false as boolean
      )
    ));// filter all activity with selected tags

  return (
    <div data-testid='activity-list'>
      {
        dataSource && dataSource.length 
          ? <List 
            dataSource={dataSource}
            className={styles.activityList}
            size='small'
            renderItem={item => (
              <List.Item
                header={
                  <img 
                    alt='activity img'
                    src={item.img} 
                    className={styles.activityImg}
                  />
                }
                main={
                  <Space vertical align='start' className={styles.activityItemMain}>
                    <Space vertical align='start'>
                      <Space align='start'>
                        <Title heading={5}>{item.title}</Title>
                        {item.tags.map(tag => (
                          <Tag 
                            key={tag.name} 
                            color={tag.color as TagColor}
                          >
                            {tag.name}
                          </Tag>))}
                      </Space>
                      <Text type='quaternary' size='small'>
                        负责人：{item.hosts[0]}{' '}
                        活动地点：{item.spot}{' '}
                        报名截止时间：{item.register_date}{' '}
                        活动时间：{item.start_date} ~ {item.end_date}
                      </Text>
                      <Paragraph spacing='extended' >
                        { item.description }
                      </Paragraph>
                    </Space>
                    <div className={styles.peopleNumber}>
                      <IconUserStroked style={{marginRight: '2px'}}/>
                      <Text size='small' type='quaternary'>
                        {item.num_of_people} / {item.max_num_of_people}
                      </Text>
                    </div>
                  </Space>
                }
              />
            )}
          />
          : (
            <Empty
              image={<IllustrationNoResult style={{ width: 150, height: 150 }} />}
              description='搜索无结果'
            />
          )
      }
    </div>
  );
}
