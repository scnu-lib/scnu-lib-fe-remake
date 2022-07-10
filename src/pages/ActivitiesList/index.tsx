import React from 'react';
import Activities from '../../components/Activities';
import ActivityFilter from '../../components/ActivityFilter';
import ActivitySearchFilter from '../../components/ActivitySearchFilter';
import { activityTags, imgLinkStub } from '../../constants/constants';
import styles from './index.module.scss';
import { Divider } from '@douyinfe/semi-ui';
import { activityTagsType } from '../../types/types';
import LibFooter from '../../components/LibFooter';

export default function ActivitiesList() {
  const dataSource = [
    {
      title: 'string',
      register_date: '2022-04-30T00:00:00',
      start_date: '2022-05-30T00:00:00',
      end_date: '2022-06-30T00:00:00',
      img: imgLinkStub,
      description: 'this is a activity.',
      max_num_of_people: 1,
      num_of_people: 0,
      spot: 'scnu',
      tags: [activityTags[3], activityTags[4]],
      hosts: ['624e70bc1e172b1241a0b3ba'],
      is_allow_volunteer: true,
    },
    {
      title: 'string',
      register_date: '2022-04-30T00:00:00',
      start_date: '2022-05-30T00:00:00',
      end_date: '2022-06-30T00:00:00',
      img: imgLinkStub,
      description: 'this is a activity.',
      max_num_of_people: 1,
      num_of_people: 0,
      spot: 'scnu',
      tags: [activityTags[1], activityTags[2]],
      hosts: ['624e70bc1e172b1241a0b3ba'],
      is_allow_volunteer: true,
    }
  ];
  const [selectedTags, setSelectedTags] = React.useState<{
    name: string,
    color: string,
  }[]>([]);

  const handleChangeSelectedTags = (newSelectedTags: activityTagsType) => {
    setSelectedTags(newSelectedTags);
  };

  return <div className={styles.activityPage} >
    <div className={styles.filterBar} >
      <ActivityFilter
        selectedTags={selectedTags} 
        handleChangeSelectedTags={handleChangeSelectedTags} 
      />
      <ActivitySearchFilter />
    </div>
    <Divider margin='12px'/>
    <Activities selectedTags={selectedTags} dataSource={dataSource.concat(dataSource)} />
    <LibFooter />
  </div>;
}
