import React from 'react';
import Activities from '../../components/Activities';
import ActivityFilter from '../../components/ActivityFilter';
import ActivitySearchFilter from '../../components/ActivitySearchFilter';
import { activityTags } from '../../constants/constants';
import styles from './index.module.scss';

export default function ActivitiesList() {
  return <div>
    <div className={styles.filterBar} >
      <ActivityFilter />
      <ActivitySearchFilter />
    </div>
    <Activities dataSource={[
      {
        title: 'string',
        register_date: '2022-04-30T00:00:00',
        start_date: '2022-05-30T00:00:00',
        end_date: '2022-06-30T00:00:00',
        img: 'http://www.baidu.com',
        description: 'this is a activity.',
        max_num_of_people: 1,
        num_of_people: 0,
        spot: 'scnu',
        tags: [activityTags[3], activityTags[4]],
        hosts: ['624e70bc1e172b1241a0b3ba'],
        is_allow_volunteer: true,
      }
    ]} />
  </div>;
}
